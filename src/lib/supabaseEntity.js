// Fabrica um client de entidade sobre uma tabela do Supabase, imitando a
// forma de chamada que as páginas já usavam contra o SDK do Base44
// (Entity.list/filter/get/create/update/delete). Só o que está atrás dessa
// função mudou — as páginas continuam chamando exatamente do mesmo jeito.
import { supabase } from '@/lib/supabaseClient';

function parseSort(sort) {
  if (!sort) return null;
  const desc = sort.startsWith('-');
  return { column: desc ? sort.slice(1) : sort, ascending: !desc };
}

export function makeEntityClient(table) {
  async function list(sort, limit) {
    let query = supabase.from(table).select('*');
    const s = parseSort(sort);
    if (s) query = query.order(s.column, { ascending: s.ascending });
    if (limit != null) query = query.limit(limit);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  async function filter(filterObj, sort, limit) {
    let query = supabase.from(table).select('*');
    for (const [key, value] of Object.entries(filterObj || {})) {
      query = query.eq(key, value);
    }
    const s = parseSort(sort);
    if (s) query = query.order(s.column, { ascending: s.ascending });
    if (limit != null) query = query.limit(limit);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  }

  async function get(id) {
    const { data, error } = await supabase.from(table).select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  }

  async function create(payload) {
    const { data, error } = await supabase.from(table).insert(payload).select().single();
    if (error) throw error;
    return data;
  }

  async function update(id, payload) {
    const { data, error } = await supabase.from(table).update(payload).eq('id', id).select().single();
    if (error) throw error;
    return data;
  }

  async function del(id) {
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
    return true;
  }

  return { list, filter, get, create, update, delete: del };
}
