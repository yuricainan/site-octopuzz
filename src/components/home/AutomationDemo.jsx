import React, { useEffect, useRef, useState } from "react";
import { Inbox, Brain, Settings2, TrendingUp } from "lucide-react";

const STEPS = [
  "Novo pedido recebido no e-commerce...",
  "IA classificando prioridade do pedido...",
  "Disparando automação de faturamento...",
  "Atualizando estoque no ERP...",
];

const NODES = [
  { icon: Inbox, label: "Dado" },
  { icon: Brain, label: "IA" },
  { icon: Settings2, label: "Automação" },
  { icon: TrendingUp, label: "Resultado" },
];

function useTypedLog(steps, pauseMs = 1500) {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    let cancelled = false;
    let timeouts = [];

    function typeLine(stepIndex, currentLines) {
      if (cancelled) return;
      if (stepIndex >= steps.length) {
        timeouts.push(setTimeout(() => {
          if (cancelled) return;
          setLines([]);
          typeLine(0, []);
        }, pauseMs));
        return;
      }
      const text = steps[stepIndex];
      let charIndex = 0;
      const nextLines = [...currentLines, { text: "", done: false }];
      setLines(nextLines);

      function typeChar() {
        if (cancelled) return;
        charIndex++;
        setLines((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { text: text.slice(0, charIndex), done: false };
          return copy;
        });
        if (charIndex < text.length) {
          timeouts.push(setTimeout(typeChar, 28));
        } else {
          timeouts.push(setTimeout(() => {
            setLines((prev) => {
              const copy = [...prev];
              copy[copy.length - 1] = { text, done: true };
              return copy;
            });
            timeouts.push(setTimeout(() => typeLine(stepIndex + 1, [...nextLines.slice(0, -1), { text, done: true }]), 300));
          }, 200));
        }
      }
      timeouts.push(setTimeout(typeChar, 28));
    }

    typeLine(0, []);
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [steps, pauseMs]);

  return lines;
}

export default function AutomationDemo() {
  const lines = useTypedLog(STEPS);

  return (
    <div className="demo-widget">
      <div className="demo-widget-bar">
        <span className="demo-dot r"></span>
        <span className="demo-dot y"></span>
        <span className="demo-dot g"></span>
        <span className="demo-widget-title">octopuzz — automação #482</span>
        <span className="demo-widget-live"><span className="pip"></span>AO VIVO</span>
      </div>

      <div className="demo-pipeline">
        <div className="demo-track">
          <div className="demo-particle" style={{ animationDelay: "0s" }}></div>
          <div className="demo-particle" style={{ animationDelay: "1s" }}></div>
          <div className="demo-particle" style={{ animationDelay: "2s" }}></div>
          <div className="demo-particle" style={{ animationDelay: "3s" }}></div>
        </div>
        <div className="demo-nodes">
          {NODES.map((node) => (
            <div className="demo-node" key={node.label}>
              <div className="ic"><node.icon /></div>
              <span>{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="demo-term-divider"></div>
      <div className="demo-term-body">
        {lines.map((line, i) => (
          <div className={`demo-term-line ${line.done ? "done" : ""}`} key={i}>
            <span className="tick">✓</span>
            <span className="txt">
              {line.text}
              {!line.done && i === lines.length - 1 && <span className="demo-caret"></span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
