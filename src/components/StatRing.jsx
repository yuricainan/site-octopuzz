import React, { useEffect, useRef, useState } from "react";

const CIRCUMFERENCE = 2 * Math.PI * 33;

// Anel de progresso com o número contando por dentro, ao entrar na tela.
// ringPercent é só decorativo (não representa uma métrica real de 0-100).
export default function StatRing({ value, label, description, ringPercent = 70, duration = 1400 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const match = typeof value === "string" ? value.match(/^(\d+)(.*)$/) : null;
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(target === null ? null : 0);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setVisible(true); }),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || target === null) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(target * progress));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  const offset = visible ? CIRCUMFERENCE * (1 - ringPercent / 100) : CIRCUMFERENCE;

  return (
    <div ref={ref} className="stat-ring-widget service-card status-card rounded-2xl p-6 flex flex-col items-center text-center gap-3">
      <div className="ring-wrap">
        <svg viewBox="0 0 76 76">
          <circle className="ring-track" cx="38" cy="38" r="33" />
          <circle
            className="ring-fill"
            cx="38" cy="38" r="33"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="ring-val">{display === null ? value : `${display}${suffix}`}</div>
      </div>
      <div className="text-lg font-semibold text-white">{label}</div>
      {description && <div className="text-sm text-gray-400">{description}</div>}
    </div>
  );
}
