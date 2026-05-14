/* global React, motion, AnimatePresence, Slide, Eyebrow, Card, Chip, fadeUp, fade, scaleIn, stagger, E */
const { useState: useStateA, useEffect: useEffectA } = React;

/* ════════════════════════════ 1 · HOOK ════════════════════════════ */
function SlideHook() {
  return (
    <Slide kicker="Workflitos · Bukathon 2026" frame="01 / 07">
      {/* hero glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: E.easeOut }}
        style={{
          position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-50%)",
          width: 1400, height: 1400,
          background: "radial-gradient(circle, rgba(100,210,255,0.18), rgba(100,210,255,0.04) 35%, transparent 60%)",
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
          background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18), rgba(100,210,255,0.08) 40%, rgba(100,210,255,0) 70%)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow: "inset 0 0 80px rgba(100,210,255,0.15), 0 40px 120px rgba(100,210,255,0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: -40, borderRadius: "50%",
            border: "1px dashed rgba(100,210,255,0.18)",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", inset: -90, borderRadius: "50%",
            border: "1px dashed rgba(100,210,255,0.10)",
          }}
        />
      </motion.div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 56, position: "relative", zIndex: 2 }}>
        <motion.div variants={fadeUp} style={{ fontFamily: "var(--mono)", fontSize: 15, color: "var(--muted)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Equipo Workflitos · Bukathon 2026
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
              background: "linear-gradient(180deg, #64D2FF 0%, #5AC8FA 40%, #0A84FF 100%)",
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
            fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.24em",
            color: "var(--muted)", textTransform: "uppercase", textAlign: "right", lineHeight: 1.9,
          }}>
            Buk · Workflitos<br/>
            14 · 05 · 2026<br/>
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
    { num: "01", label: "Feedback", desc: "Cliente lo dice en Hotjar, soporte, AAM, un chat suelto.", tone: "ink" },
    { num: "02", label: "Planilla", desc: "Se diluye en un backlog sin dueño claro.", tone: "bad" },
    { num: "03", label: "Olvido", desc: "Nadie lo prioriza, nadie lo implementa.", tone: "bad" },
    { num: "04", label: "Churn", desc: "El cliente repite el reporte. El NPS cae.", tone: "bad" },
  ];

  return (
    <Slide kicker="Diagnóstico · Ciclo roto" frame="02 / 07">
      <div style={{ display: "flex", flexDirection: "column", gap: 80, marginTop: 80, flex: 1, justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 80 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 96, lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: 0, color: "var(--ink)", maxWidth: 1300,
          }}>
            El feedback del cliente <span style={{ color: "#FF6961" }}>se pierde</span> antes de convertirse en código.
          </motion.h2>
          <motion.div variants={fadeUp} style={{
            fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.22em",
            color: "var(--muted)", textTransform: "uppercase", lineHeight: 1.9, textAlign: "right",
          }}>
            Caso real · soporte<br/>4 herramientas<br/>3 traspasos<br/>0 trazabilidad
          </motion.div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, position: "relative" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{ position: "relative" }}
            >
              <Card style={{ padding: 36, minHeight: 240, borderColor: s.tone === "bad" ? "rgba(255,105,97,0.25)" : "rgba(255,255,255,0.13)", background: s.tone === "bad" ? "rgba(255,105,97,0.04)" : "rgba(255,255,255,0.10)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: s.tone === "bad" ? "#FF6961" : "var(--muted)", letterSpacing: "0.24em" }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: "var(--display)", fontWeight: 500, fontSize: 40, lineHeight: 1.0,
                  letterSpacing: "-0.02em", marginTop: 14, color: s.tone === "bad" ? "#FF6961" : "var(--ink)",
                }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "var(--display)", fontSize: 19, color: "var(--ink-dim)", marginTop: 18, lineHeight: 1.5, fontWeight: 400 }}>
                  {s.desc}
                </div>
              </Card>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.18, duration: 0.6, ease: E.easeOut }}
                  style={{
                    position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
                    color: s.tone === "bad" ? "#FF6961" : "var(--muted)",
                    fontFamily: "var(--mono)", fontSize: 28, lineHeight: 1,
                  }}
                >→</motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -2 }}
          animate={{ opacity: 0.9, rotate: -4 }}
          transition={{ delay: 1.0, duration: 0.6, ease: E.easeOut }}
          style={{
            position: "absolute", right: 160, bottom: 140,
            fontFamily: "var(--mono)", fontSize: 22, letterSpacing: "0.22em",
            color: "#FF6961", border: "1.5px solid #FF6961", padding: "10px 18px",
            textTransform: "uppercase",
          }}
        >
          Lead-time · semanas
        </motion.div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 3 · SOLUCIÓN ════════════════════════════ */
function SlideSolution() {
  const nodes = [
    { kind: "Source", name: "AAM · Hotjar", desc: "Captura del feedback donde ya está hablando el cliente.", tone: "default" },
    { kind: "Orquestador", name: "n8n", desc: "Webhook, normaliza, clasifica, enruta.", tone: "green" },
    { kind: "Agente", name: "Jira", desc: "Crea Launchpad con contexto, criterios y label.", tone: "accent" },
    { kind: "Agente", name: "Dev", desc: "Escribe el código, abre el PR con tests.", tone: "accent" },
    { kind: "Review", name: "Google Chat", desc: "Ping al squad. Aprueba o pide ajustes.", tone: "warn" },
  ];

  return (
    <Slide kicker="Protocolo · CDD-01" frame="03 / 07">
      <div style={{ display: "flex", flexDirection: "column", gap: 60, marginTop: 80, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <div>
            <motion.div variants={fadeUp} style={{
              fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", letterSpacing: "0.28em",
              textTransform: "uppercase", marginBottom: 24,
            }}>
              La solución · Client-Driven Development©
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: "var(--display)", fontWeight: 500, fontSize: 88, lineHeight: 1.0,
              letterSpacing: "-0.03em", margin: 0, maxWidth: 1400,
            }}>
              Cada feedback se convierte en{" "}
              <span style={{
                background: "linear-gradient(120deg, #64D2FF, #0A84FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Pull Request</span>{" "}
              antes de que termine la reunión.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 8 }}>
              Tiempo medio
            </div>
            <div style={{
              fontFamily: "var(--display)", fontWeight: 500, fontSize: 64, lineHeight: 1,
              letterSpacing: "-0.04em", color: "var(--accent)",
            }}>≤ 5 min</div>
          </motion.div>
        </div>

        <div style={{ position: "relative", flex: 1, minHeight: 380 }}>
          {/* arrows */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1640 380" preserveAspectRatio="none">
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(100,210,255,0.2)" />
                <stop offset="100%" stopColor="#64D2FF" />
              </linearGradient>
              <marker id="arrowHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="#64D2FF"/>
              </marker>
            </defs>
            {[0,1,2,3].map(i => {
              const xStart = 320 + i*320;
              return (
                <motion.path
                  key={i}
                  d={`M ${xStart} 190 Q ${xStart + 14} 190 ${xStart + 28} 190`}
                  stroke="url(#arrowGrad)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowHead)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.25, duration: 0.7, ease: E.easeOut }}
                />
              );
            })}
          </svg>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, position: "relative", height: "100%", alignItems: "center" }}>
            {nodes.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.18, ...E.spring }}
              >
                <Card style={{
                  padding: 28,
                  borderColor: n.tone === "accent" ? "rgba(100,210,255,0.4)" : n.tone === "green" ? "rgba(48,209,88,0.3)" : n.tone === "warn" ? "rgba(255,214,10,0.3)" : "rgba(255,255,255,0.13)",
                  background: n.tone === "accent" ? "linear-gradient(180deg, rgba(100,210,255,0.10), rgba(100,210,255,0.02))" : "rgba(255,255,255,0.10)",
                  boxShadow: n.tone === "accent" ? "0 0 40px rgba(100,210,255,0.12)" : "none",
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute", top: 18, right: 18, width: 8, height: 8, borderRadius: 8,
                    background: n.tone === "green" ? "var(--accent-2)" : n.tone === "warn" ? "#FFD60A" : "var(--accent)",
                    boxShadow: `0 0 10px ${n.tone === "green" ? "var(--accent-2)" : n.tone === "warn" ? "#FFD60A" : "var(--accent)"}`,
                  }} />
                  <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.24em", textTransform: "uppercase" }}>
                    {n.kind}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontWeight: 500, fontSize: 32, lineHeight: 1.05,
                    letterSpacing: "-0.02em", marginTop: 10,
                    color: n.tone === "accent" ? "var(--accent)" : "var(--ink)",
                  }}>{n.name}</div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--ink-dim)", marginTop: 14, lineHeight: 1.5, fontWeight: 400 }}>
                    {n.desc}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fade} style={{ display: "flex", gap: 36, fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 8, background: "var(--accent)", marginRight: 8, boxShadow: "0 0 8px var(--accent)" }} /> Trigger</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 8, background: "var(--accent-2)", marginRight: 8, boxShadow: "0 0 8px var(--accent-2)" }} /> Workflow</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 8, background: "#fff", marginRight: 8, boxShadow: "0 0 8px #fff" }} /> Agente IA</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 8, background: "#FFD60A", marginRight: 8, boxShadow: "0 0 8px #FFD60A" }} /> Human-in-the-loop</span>
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
      name: "AAM / Hotjar",
      role: "Escuchamos donde el cliente ya está hablando",
      body: <>Sesiones grabadas, encuestas in-app, eventos de frustración (rage clicks, dead clicks) y tickets de soporte. <b>Nada vive en una planilla.</b></>,
      meta: [
        ["Trigger", "Webhook · tag “feedback”"],
        ["Volumen", "~120 / día"],
        ["Latencia", "≈ 0 ms · push"],
      ],
    },
    {
      kind: "02 · Orquestación",
      name: "n8n",
      role: "Workflow declarativo · sin código pegoteado",
      body: <>El webhook normaliza payloads, deduplica, <b>clasifica</b> bug / mejora / pregunta, enriquece con segmento y plan, y enruta al siguiente agente.</>,
      meta: [
        ["Nodos", "14 pasos"],
        ["Branches", "3 (bug · feat · ask)"],
        ["Retries", "Auto · idempotente"],
      ],
    },
    {
      kind: "03 · Agente · Ticketing",
      name: "Agente Jira",
      role: "Crea la tarjeta Launchpad lista para dev",
      body: <>Redacta título corto, contexto del cliente, <b>criterios de aceptación</b>, link a la sesión y label. Adjunta evidencia y prioriza por impacto.</>,
      meta: [
        ["Output", "Launchpad ticket"],
        ["Campos", "9 auto-llenos"],
        ["Asignación", "Code-owner del squad"],
      ],
    },
    {
      kind: "04 · Agente · Dev",
      name: "Agente Dev",
      role: "De ticket a Pull Request, sin intervención",
      body: <>Toma el Launchpad, levanta el repo correcto, escribe el código <b>siguiendo convenciones del squad</b>, agrega tests y abre PR con descripción y screenshots.</>,
      meta: [
        ["Tiempo", "3 – 4 min"],
        ["Tests", "Auto-generados"],
        ["PRs / día", "~30 estimado"],
      ],
    },
    {
      kind: "05 · Human-in-the-loop",
      name: "Google Chat",
      role: "La última milla · revisión humana",
      body: <>Notifica al squad en su canal habitual con <b>resumen y link al PR</b>. Un humano aprueba, comenta o pide ajustes. El agente itera. Listo para merge.</>,
      meta: [
        ["Canal", "#cdd-review"],
        ["Acciones", "Approve · Ask · Reject"],
        ["Loop", "Cierra el ciclo"],
      ],
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
    <Slide kicker="Inspección · Nodo por nodo" frame="04 / 07">
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
                  background: active === i ? "linear-gradient(90deg, rgba(100,210,255,0.14), rgba(100,210,255,0.02))" : "rgba(255,255,255,0.05)",
                  boxShadow: active === i ? "inset 4px 0 0 var(--accent), 0 0 30px rgba(100,210,255,0.12)" : "inset 1px 0 0 rgba(255,255,255,0.10)",
                  color: "var(--ink)",
                  display: "flex", alignItems: "center", gap: 20,
                  transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <span style={{
                  fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.16em",
                  color: active === i ? "var(--accent)" : "var(--muted)", minWidth: 40,
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 26, letterSpacing: "-0.01em" }}>
                  {s.name}
                </span>
                <motion.span
                  animate={{ x: active === i ? 0 : -4, opacity: active === i ? 1 : 0.3 }}
                  style={{ marginLeft: "auto", color: active === i ? "var(--accent)" : "var(--muted)", fontFamily: "var(--mono)" }}
                >→</motion.span>
              </motion.button>
            ))}
          </motion.div>

          {/* detail */}
          <motion.div variants={fadeUp} style={{ position: "relative" }}>
            <Card style={{
              padding: 56,
              height: "100%",
              background: "radial-gradient(800px 400px at 20% 0%, rgba(100,210,255,0.08), transparent 60%), rgba(255,255,255,0.10)",
              overflow: "hidden",
            }}>
              <span style={{
                position: "absolute", top: 22, right: 28, fontFamily: "var(--mono)", fontSize: 12,
                color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase",
              }}>Detail · Live</span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: E.easeOut }}
                >
                  <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", letterSpacing: "0.28em", textTransform: "uppercase" }}>
                    {cur.kind}
                  </div>
                  <div style={{
                    fontFamily: "var(--display)", fontWeight: 500, fontSize: 64, lineHeight: 1.0,
                    letterSpacing: "-0.025em", marginTop: 12, color: "var(--ink)",
                  }}>
                    {cur.name}
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", marginTop: 8, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    {cur.role}
                  </div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 300, fontSize: 28, color: "var(--ink)", lineHeight: 1.45, marginTop: 32, maxWidth: 800 }}>
                    {cur.body}
                  </div>
                  <div style={{ display: "flex", gap: 40, marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.13)" }}>
                    {cur.meta.map(([k, v], j) => (
                      <div key={j}>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase" }}>{k}</div>
                        <div style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 22, color: "var(--ink)", marginTop: 6 }}>{v}</div>
                      </div>
                    ))}
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
