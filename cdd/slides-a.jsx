/* global React, motion, AnimatePresence, Slide, Eyebrow, Card, Chip, fadeUp, fade, scaleIn, stagger, E */
const { useState: useStateA, useEffect: useEffectA } = React;

/* ════════════════════════════ 1 · HOOK ════════════════════════════ */
function SlideHook() {
  return (
    <Slide kicker="Workflitos · Betathon 2026" frame="02 / 09">
      {/* hero glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: E.easeOut }}
        style={{
          position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-50%)",
          width: 1400, height: 1400,
          background: "radial-gradient(circle, rgba(108,135,216,0.18), rgba(108,135,216,0.04) 35%, transparent 60%)",
          filter: "blur(20px)", pointerEvents: "none",
        }}
      />
      {/* floating glass orb */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.6, ease: E.easeOut }}
        style={{
          position: "absolute", right: 160, top: 220, width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #C1C2C4, rgba(108,135,216,0.08) 40%, rgba(108,135,216,0) 70%)",
          border: "1px solid #E4E5E7",
          boxShadow: "inset 0 0 80px rgba(108,135,216,0.15), 0 40px 120px rgba(108,135,216,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: -40, borderRadius: "50%",
            border: "1px dashed rgba(108,135,216,0.18)",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: -90, borderRadius: "50%",
            border: "1px dashed rgba(108,135,216,0.10)",
          }}
        />
      </motion.div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 56, position: "relative", zIndex: 2 }}>
        <motion.div variants={fadeUp} style={{ fontFamily: "var(--mono)", fontSize: 15, color: "var(--ink-dim)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Equipo Workflitos · Betathon 2026
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 220, lineHeight: 0.92,
              letterSpacing: "-0.045em", margin: 0, color: "var(--ink)",
            }}
          >
            Client-Driven
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 220, lineHeight: 0.92,
              letterSpacing: "-0.045em", margin: 0,
              background: "linear-gradient(180deg, #6C87D8 0%, #6C87D8 40%, #2F4DAA 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", color: "transparent",
            }}
          >
            Development<span style={{ fontSize: 80, verticalAlign: "super", marginLeft: 18, opacity: 0.5 }}>©</span>
          </motion.h1>
        </div>

        <motion.div
          variants={fadeUp}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}
        >
          <p style={{
            fontFamily: "var(--display)", fontWeight: 300, fontSize: 44, lineHeight: 1.18,
            letterSpacing: "-0.015em", margin: 0, color: "var(--ink)", maxWidth: 1100,
          }}>
            ¿Y si el cliente pudiera <span style={{ color: "var(--accent)" }}>programar</span> sin saberlo?
          </p>
          <div style={{
            fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.24em",
            color: "var(--ink-dim)", textTransform: "uppercase", textAlign: "right", lineHeight: 1.9,
          }}>
            Buk · Workflitos<br/>
            15 · 05 · 2026<br/>
            v0.1 · Live demo
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 2 · PROBLEMA ════════════════════════════ */
function SlideProblem() {
  const steps = [
    { num: "01", label: "Llega Feedback", desc: "Hotjar, AAM, soporte, ventas, conversaciones sueltas.", tone: "ink" },
    { num: "02", label: "Clasificación", desc: "PBD lo lee, lo categoriza, lo prioriza a mano.", tone: "bad" },
    { num: "03", label: "Refinamiento", desc: "El equipo lo refina, estima y agenda.", tone: "bad" },
    { num: "04", label: "Producción", desc: "Termina en producción. O no termina.", tone: "bad" },
  ];

  const times = ["~ 2 días", "~ 3 semanas", "~ 6 semanas"];

  return (
    <Slide kicker="Diagnóstico · Ciclo actual" frame="03 / 09">
      <div style={{ display: "flex", flexDirection: "column", gap: 80, marginTop: 80, flex: 1, justifyContent: "center" }}>
        <motion.h2 variants={fadeUp} style={{
          fontFamily: "var(--display)", fontWeight: 500, fontSize: 96, lineHeight: 1.0,
          letterSpacing: "-0.03em", margin: 0, color: "var(--ink)", maxWidth: 1500,
        }}>
          El feedback del cliente <span style={{ color: "var(--danger-500)" }}>se pierde</span> antes de convertirse en código.
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 120px 1fr 120px 1fr 120px 1fr",
          alignItems: "stretch", gap: 0,
        }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <motion.div variants={fadeUp}>
                <Card style={{
                  padding: 36, height: "100%", minHeight: 260,
                  display: "flex", flexDirection: "column",
                  borderColor: s.tone === "bad" ? "rgba(249,94,80,0.30)" : "#E4E5E7",
                  background: s.tone === "bad" ? "rgba(249,94,80,0.06)" : "#FFFFFF",
                }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: s.tone === "bad" ? "var(--danger-500)" : "var(--muted)", letterSpacing: "0.24em" }}>
                    {s.num}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontWeight: 600, fontSize: 38, lineHeight: 1.0,
                    letterSpacing: "-0.02em", marginTop: 14,
                    color: s.tone === "bad" ? "var(--danger-500)" : "var(--ink)",
                  }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 20, color: "var(--ink-dim)", marginTop: 20, lineHeight: 1.5, fontWeight: 400 }}>
                    {s.desc}
                  </div>
                </Card>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.7, ease: E.easeOut }}
                  style={{
                    position: "relative",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    gap: 12,
                  }}
                >
                  {/* time label */}
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.12em",
                    color: "var(--danger-500)", whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}>
                    {times[i]}
                  </div>
                  {/* arrow line */}
                  <motion.svg
                    width="100%" height="14" viewBox="0 0 120 14" preserveAspectRatio="none"
                    style={{ overflow: "visible" }}
                  >
                    <motion.line
                      x1="0" y1="7" x2="106" y2="7"
                      stroke="rgba(249,94,80,0.55)" strokeWidth="1.5"
                      strokeDasharray="3 5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.6 + i * 0.2, duration: 0.8, ease: E.easeOut }}
                    />
                    <motion.polyline
                      points="100,1 113,7 100,13"
                      fill="none" stroke="var(--danger-500)" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.2, duration: 0.4 }}
                    />
                  </motion.svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: E.easeOut }}
          style={{
            alignSelf: "flex-end",
            fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.28em",
            color: "var(--danger-500)", textTransform: "uppercase",
            display: "inline-flex", alignItems: "baseline", gap: 14,
          }}
        >
          <span style={{ opacity: 0.7 }}>Lead-time total</span>
          <span style={{
            fontFamily: "var(--display)", fontSize: 42, fontWeight: 600,
            letterSpacing: "-0.03em", textTransform: "none",
          }}>~ 9 semanas</span>
        </motion.div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 3 · SOLUCIÓN — n8n canvas ════════════════════════════ */
function SlideSolution() {
  // Authored on a 1640 × 500 canvas, scaled by parent grid.
  // Node types: trigger (kiwi), agent (blueberry), integration (purple), notify (peach)
  const nodes = [
    { id: "feedback",    x:  60, y: 200, type: "trigger",     icon: "feedback",        name: "Feedback",            sub: "Webhook" },
    { id: "classifier",  x: 380, y: 130, type: "agent",       icon: "psychology",       name: "Agente clasificador", sub: "n8n" },
    { id: "jira",        x: 740, y: 270, type: "integration", icon: "inventory_2",      name: "Jira",                sub: "Launchpad" },
    { id: "workflito",   x: 1100, y: 130, type: "agent",      icon: "smart_toy",        name: "Workflito",           sub: "Pull Request" },
    { id: "notify",      x: 1420, y: 230, type: "notify",     icon: "notifications_active", name: "Notificar",       sub: "Google Chat" },
  ];

  const TYPE_COLORS = {
    trigger:     { bg: "var(--success-500)", glow: "rgba(107,198,76,0.4)",  text: "#0c2008" },
    agent:       { bg: "var(--primary-500)", glow: "rgba(108,135,216,0.45)", text: "#fff" },
    integration: { bg: "var(--purple-500)",  glow: "rgba(107,79,187,0.4)",  text: "#fff" },
    notify:      { bg: "var(--secondary-500)", glow: "rgba(249,147,4,0.4)", text: "#1a0e00" },
  };

  // n8n node footprint (canvas units)
  const NW = 240, NH = 110;

  // bezier from right edge of n0 to left edge of n1
  function pathFor(a, b) {
    const x1 = a.x + NW, y1 = a.y + NH / 2;
    const x2 = b.x,      y2 = b.y + NH / 2;
    const dx = Math.abs(x2 - x1) * 0.55;
    return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
  }

  return (
    <Slide kicker="Protocolo · CDD-01" frame="04 / 09">
      <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 80, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <div>
            <motion.div variants={fadeUp} style={{
              fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)", letterSpacing: "0.28em",
              textTransform: "uppercase", marginBottom: 24,
            }}>
              La solución · Client-Driven Development©
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 92, lineHeight: 1.0,
              letterSpacing: "-0.03em", margin: 0, maxWidth: 1400,
            }}>
              De feedback a producción en{" "}
              <span style={{
                background: "linear-gradient(120deg, #6C87D8, #2F4DAA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>10 minutos</span>.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 8 }}>
              Tiempo medio
            </div>
            <div style={{
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 64, lineHeight: 1,
              letterSpacing: "-0.04em", color: "var(--accent)",
            }}>≤ 10 min</div>
          </motion.div>
        </div>

        {/* n8n-style canvas */}
        <motion.div variants={fadeUp} style={{
          position: "relative", flex: 1, minHeight: 480,
          borderRadius: 18,
          background: `
            radial-gradient(circle at 50% 0%, rgba(108,135,216,0.10), transparent 60%),
            #FAFCFD
          `,
          border: "1px solid #E4E5E7",
          overflow: "hidden",
          boxShadow: "inset 0 0 60px rgba(9,19,81,0.04)",
        }}>
          {/* n8n dot grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(9,19,81,0.10) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            backgroundPosition: "0 0",
            pointerEvents: "none",
          }} />

          {/* canvas chrome — top-left mini toolbar */}
          <div style={{
            position: "absolute", top: 14, left: 18,
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--success-500)", boxShadow: "0 0 8px var(--success-500)" }} />
            <span>n8n · workflow.cdd-01</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ opacity: 0.6 }}>active</span>
          </div>
          <div style={{
            position: "absolute", top: 14, right: 18,
            display: "flex", alignItems: "center", gap: 14,
            fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>
            <span>5 nodes</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>120 / día</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ color: "var(--success-500)" }}>● live</span>
          </div>

          {/* zoom-fit container — authored on 1640×500 */}
          <div style={{
            position: "absolute", inset: 0, padding: "60px 40px 30px",
          }}>
            <div style={{
              position: "relative", width: "100%", height: "100%",
            }}>
              <svg
                viewBox="0 0 1640 380" preserveAspectRatio="none"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
              >
                <defs>
                  <marker id="nArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="#6C87D8"/>
                  </marker>
                  <linearGradient id="nGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"  stopColor="rgba(108,135,216,0.3)" />
                    <stop offset="100%" stopColor="rgba(108,135,216,1)" />
                  </linearGradient>
                </defs>

                {/* connectors */}
                {nodes.slice(0, -1).map((n, i) => (
                  <motion.path
                    key={i}
                    d={pathFor(n, nodes[i + 1])}
                    stroke="url(#nGrad)"
                    strokeWidth="2.2"
                    fill="none"
                    markerEnd="url(#nArrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.18, duration: 0.8, ease: E.easeOut }}
                  />
                ))}

                {/* pulsing packet traveling along path */}
                {nodes.slice(0, -1).map((n, i) => (
                  <motion.circle
                    key={`p${i}`}
                    r="5" fill="#6C87D8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: 1.5 + i * 0.6,
                      duration: 1.4,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "linear",
                    }}
                    style={{ filter: "drop-shadow(0 0 8px #6C87D8)" }}
                  >
                    <motion.animateMotion
                      dur="1.4s"
                      begin={`${1.5 + i * 0.6}s`}
                      repeatCount="indefinite"
                      path={pathFor(n, nodes[i + 1])}
                    />
                  </motion.circle>
                ))}
              </svg>

              {/* nodes */}
              {nodes.map((n, i) => {
                const c = TYPE_COLORS[n.type];
                return (
                  <motion.div
                    key={n.id}
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.14, ...E.spring }}
                    style={{
                      position: "absolute",
                      left: `${(n.x / 1640) * 100}%`,
                      top: `${(n.y / 380) * 100}%`,
                      width: `${(NW / 1640) * 100}%`,
                      height: `${(NH / 380) * 100}%`,
                    }}
                  >
                    <div style={{
                      position: "relative", width: "100%", height: "100%",
                      borderRadius: 10,
                      background: "#FFFFFF",
                      border: "1px solid #E4E5E7",
                      display: "flex",
                      overflow: "hidden",
                      boxShadow: `0 4px 12px rgba(9,19,81,0.08), 0 0 0 2px ${c.glow}`,
                    }}>
                      {/* icon block */}
                      <div style={{
                        width: 96, flexShrink: 0,
                        background: c.bg,
                        display: "grid", placeItems: "center",
                        color: c.text,
                      }}>
                        <span className="ms-icon" style={{ fontSize: 48 }}>{n.icon}</span>
                      </div>
                      {/* label */}
                      <div style={{
                        flex: 1, padding: "16px 20px",
                        display: "flex", flexDirection: "column", justifyContent: "center",
                      }}>
                        <div style={{
                          fontFamily: "var(--display)", fontWeight: 600, fontSize: 22,
                          color: "var(--ink)", letterSpacing: "-0.01em", lineHeight: 1.15,
                        }}>{n.name}</div>
                        <div style={{
                          fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
                          letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 6,
                        }}>{n.sub}</div>
                      </div>
                      {/* status led */}
                      <div style={{
                        position: "absolute", top: 10, right: 10,
                        width: 7, height: 7, borderRadius: 7,
                        background: c.bg, boxShadow: `0 0 8px ${c.bg}`,
                      }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* legend */}
        <motion.div variants={fade} style={{
          display: "flex", gap: 36, fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)",
          letterSpacing: "0.18em", textTransform: "uppercase",
        }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, background: "var(--success-500)", marginRight: 10, verticalAlign: "middle" }} /> Trigger</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, background: "var(--primary-500)", marginRight: 10, verticalAlign: "middle" }} /> Agente IA</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, background: "var(--purple-500)", marginRight: 10, verticalAlign: "middle" }} /> Integración</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, borderRadius: 3, background: "var(--secondary-500)", marginRight: 10, verticalAlign: "middle" }} /> Human-in-the-loop</span>
        </motion.div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 4 · CÓMO FUNCIONA (interactive) ════════════════════════════ */
function SlideHow() {
  const stages = [
    {
      kind: "01 · Source",
      name: "Feedback",
      role: "Escuchamos donde el cliente ya está hablando",
      body: <>Sesiones grabadas en Hotjar y AAM, encuestas in-app, eventos de frustración (rage clicks, dead clicks) y tickets de soporte. <b>Nada vive en una planilla.</b></>,
    },
    {
      kind: "02 · Orquestación",
      name: "z-bot",
      role: "Workflow declarativo · sin código pegoteado",
      body: <>El webhook normaliza payloads, deduplica, <b>clasifica</b> bug / mejora / pregunta, enriquece con segmento y plan, y enruta al siguiente agente.</>,
    },
    {
      kind: "03 · Ticketing",
      name: "Jira",
      role: "Crea la tarjeta Launchpad lista para dev",
      body: <>Título corto, contexto del cliente, <b>criterios de aceptación</b>, link a la sesión y label. Adjunta evidencia y prioriza por impacto.</>,
    },
    {
      kind: "04 · Agente · Dev",
      name: "Workflito",
      role: "De ticket a Pull Request, sin intervención",
      body: <>Toma el Launchpad, levanta el repo correcto, escribe el código <b>siguiendo convenciones del squad</b>, agrega tests y abre PR con descripción y screenshots.</>,
    },
    {
      kind: "05 · Human-in-the-loop",
      name: "Notificar",
      role: "La última milla · revisión humana",
      body: <>Notifica al squad en Google Chat con <b>resumen y link al PR</b>. Un humano aprueba, comenta o pide ajustes. El agente itera. Listo para merge.</>,
    },
  ];

  const [active, setActive] = useStateA(0);

  // ↑↓ keyboard while this slide is visible
  useEffectA(() => {
    const onKey = (e) => {
      if (!document.body.dataset.curSlide || document.body.dataset.curSlide !== "how") return;
      if (e.key === "ArrowUp")   { e.stopPropagation(); e.preventDefault(); setActive(v => (v - 1 + stages.length) % stages.length); }
      if (e.key === "ArrowDown") { e.stopPropagation(); e.preventDefault(); setActive(v => (v + 1) % stages.length); }
    };
    window.addEventListener("keydown", onKey, true);
    document.body.dataset.curSlide = "how";
    return () => {
      window.removeEventListener("keydown", onKey, true);
      delete document.body.dataset.curSlide;
    };
  }, []);

  const cur = stages[active];

  return (
    <Slide kicker="Inspección · Nodo por nodo" frame="05 / 09">
      <div style={{ display: "flex", flexDirection: "column", gap: 48, marginTop: 80, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 88, lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: 0,
          }}>
            Cómo funciona, <span style={{ color: "var(--accent)" }}>paso a paso</span>.
          </motion.h2>
          <Eyebrow tone="muted">Click en un nodo · ↑↓ teclado</Eyebrow>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "600px 1fr", gap: 48, flex: 1 }}>
          {/* sidebar */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {stages.map((s, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.99 }}
                transition={E.spring}
                style={{
                  textAlign: "left", cursor: "pointer", border: "none", outline: "none",
                  padding: "22px 28px", borderRadius: 18,
                  background: active === i ? "linear-gradient(90deg, rgba(108,135,216,0.16), rgba(108,135,216,0.03))" : "#F6F7F9",
                  boxShadow: active === i ? "inset 4px 0 0 var(--accent), 0 0 30px rgba(108,135,216,0.14)" : "inset 1px 0 0 #E4E5E7",
                  color: "var(--ink)",
                  display: "flex", alignItems: "center", gap: 20,
                  transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <span style={{
                  fontFamily: "var(--mono)", fontSize: 15, letterSpacing: "0.16em",
                  color: active === i ? "var(--accent)" : "var(--ink-dim)", minWidth: 40,
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 26, letterSpacing: "-0.01em" }}>
                  {s.name}
                </span>
                <motion.span
                  animate={{ x: active === i ? 0 : -4, opacity: active === i ? 1 : 0.4 }}
                  style={{ marginLeft: "auto", color: active === i ? "var(--accent)" : "var(--ink-dim)", fontFamily: "var(--mono)" }}
                >→</motion.span>
              </motion.button>
            ))}
          </motion.div>

          {/* detail */}
          <motion.div variants={fadeUp} style={{ position: "relative" }}>
            <Card style={{
              padding: 56,
              height: "100%",
              background: "radial-gradient(800px 400px at 20% 0%, rgba(108,135,216,0.08), transparent 60%), #FFFFFF",
              overflow: "hidden",
            }}>
              <span style={{
                position: "absolute", top: 22, right: 28, fontFamily: "var(--mono)", fontSize: 13,
                color: "var(--ink-dim)", letterSpacing: "0.22em", textTransform: "uppercase",
              }}>Detail · Live</span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: E.easeOut }}
                >
                  <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)", letterSpacing: "0.28em", textTransform: "uppercase" }}>
                    {cur.kind}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontWeight: 500, fontSize: 80, lineHeight: 1.0,
                    letterSpacing: "-0.03em", marginTop: 16, color: "var(--ink)",
                  }}>
                    {cur.name}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 15, color: "var(--ink-dim)", marginTop: 14, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                    {cur.role}
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 300, fontSize: 32, color: "var(--ink)", lineHeight: 1.4, marginTop: 40, maxWidth: 820 }}>
                    {cur.body}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, { SlideHook, SlideProblem, SlideSolution, SlideHow });
