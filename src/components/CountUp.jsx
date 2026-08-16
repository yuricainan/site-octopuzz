import React, { useEffect, useRef, useState } from "react";

// Anima um número (com sufixo tipo "+", "%") de 0 até o valor real quando
// o elemento entra na tela. Números que não começam com dígito (ex: "24/7")
// são renderizados direto, sem animação.
export default function CountUp({ value, duration = 1200, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  const match = typeof value === "string" ? value.match(/^(\d+)(.*)$/) : null;
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (target === null || !ref.current) return;
    const el = ref.current;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min(1, (now - start) / duration);
              setDisplay(Math.round(target * progress));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  if (target === null) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display === null ? 0 : display}{suffix}
    </span>
  );
}
