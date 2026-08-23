import React from "react";

export default function Privacidade() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Política de Privacidade</span>
        </h1>
        <p className="text-gray-400 mb-12">Última atualização: agosto de 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Quem somos</h2>
            <p>
              A Octopuzz ("nós") é uma empresa de tecnologia sediada em Fortaleza - CE, que
              oferece soluções de automação, inteligência artificial, sistemas de gestão
              (ERP/CRM/PDV), desenvolvimento e consultoria. Este site (octopuzz.com.br) é
              nosso canal institucional e de contato comercial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Quais dados coletamos</h2>
            <p className="mb-3">Coletamos dados pessoais apenas quando você opta por nos enviar:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>
                <span className="text-gray-300">Formulário de contato:</span> nome, e-mail,
                telefone, empresa, serviço de interesse e a mensagem que você escrever.
              </li>
              <li>
                <span className="text-gray-300">Dados técnicos básicos:</span> como
                navegador e páginas visitadas, coletados de forma agregada por ferramentas
                de métricas, quando estiverem ativas no site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Para que usamos esses dados</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Responder sua solicitação de contato ou consultoria gratuita;</li>
              <li>Entender, de forma agregada, como o site é usado, para melhorá-lo;</li>
              <li>Cumprir obrigações legais, quando aplicável.</li>
            </ul>
            <p className="mt-3">
              Não vendemos seus dados pessoais a terceiros. Não usamos os dados do formulário
              de contato para nenhuma finalidade além de responder sua solicitação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Com quem compartilhamos</h2>
            <p>
              Seus dados ficam armazenados em infraestrutura própria da Octopuzz. Podemos
              utilizar prestadores de serviço estritamente técnicos (como hospedagem e envio
              de e-mail transacional) apenas para operar o site — esses prestadores não têm
              autorização para usar seus dados para fins próprios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Seus direitos (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode, a
              qualquer momento, solicitar a confirmação da existência de tratamento, acesso,
              correção ou eliminação dos seus dados pessoais, entrando em contato pelo e-mail
              abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contato</h2>
            <p>
              Dúvidas sobre esta política ou sobre seus dados? Fale com a gente em{" "}
              <a href="mailto:contato@octopuzz.com.br" className="text-blue-400 hover:text-blue-300">
                contato@octopuzz.com.br
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
