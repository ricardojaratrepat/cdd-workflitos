/* global React, motion, AnimatePresence, Slide, Eyebrow, Card, Chip, fadeUp, fade, scaleIn, stagger, E */
const { useState: useStateC, useEffect: useEffectC } = React;

/* ════════════════════════════ 0 · APERTURA · La pregunta ════════════════════════════ */
function SlideLegacy() {
  return (
    <Slide kicker="Workflitos · Betathon 2026" frame="01 / 09">
      {/* soft primary glow background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.0, ease: E.easeOut }}
        style={{
          position: "absolute", right: -200, top: -120, width: 900, height: 900,
          background: "radial-gradient(circle, rgba(108,135,216,0.28), rgba(108,135,216,0.06) 35%, transparent 60%)",
          filter: "blur(20px)", pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4 }}
        style={{
          position: "absolute", left: -160, bottom: -240, width: 700, height: 700,
          background: "radial-gradient(circle, rgba(47,77,170,0.16), transparent 60%)",
          filter: "blur(20px)", pointerEvents: "none",
        }}
      />

      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", gap: 64, position: "relative", zIndex: 2,
        maxWidth: 1500,
      }}>
        <motion.div variants={fadeUp} style={{
          fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)",
          letterSpacing: "0.32em", textTransform: "uppercase",
          display: "inline-flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--accent)", boxShadow: "0 0 12px rgba(47,77,170,0.5)" }} />
          Una pregunta
        </motion.div>

        {/* the rhetorical question */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--display)", fontWeight: 600, fontSize: 132, lineHeight: 1.02,
            letterSpacing: "-0.035em", margin: 0,
            color: "var(--ink)",
            paddingBottom: 12,
          }}
        >
          ¿El cliente está{" "}
          <span style={{
            color: "var(--accent)",
            position: "relative",
            display: "inline-block",
          }}>
            realmente
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 1.0, ease: E.easeOut }}
              style={{
                position: "absolute", left: 0, right: 0, bottom: 8,
                height: 6, background: "var(--accent)",
                transformOrigin: "left", borderRadius: 4,
                opacity: 0.25,
              }}
            />
          </span>{" "}
          en el centro?
        </motion.h1>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 5 · AGENTE CLASIFICADOR · n8n flow ════════════════════════════ */
function SlideClassifier() {
  // 6-stage internal n8n flow with an animated "packet" moving through
  const stages = [
    { id: "in",      title: "Webhook",       note: "POST /feedback",            icon: "↘" },
    { id: "parse",   title: "Parse",         note: "Extrae texto + metadata",    icon: "{ }" },
    { id: "classify",title: "Clasifica",     note: "bug · feat · pregunta",      icon: "✦" },
    { id: "filter",  title: "Filtra",        note: "Buk + Workflitos rules",     icon: "▽" },
    { id: "enrich",  title: "Enriquece",     note: "segmento, plan, prioridad",  icon: "+" },
    { id: "route",   title: "Enruta",        note: "→ Jira · Launchpad",         icon: "→" },
  ];

  // animated packet across nodes
  const [activeNode, setActiveNode] = useStateC(0);
  useEffectC(() => {
    const t = setInterval(() => {
      setActiveNode(v => (v + 1) % (stages.length + 2)); // pause beyond
    }, 1100);
    return () => clearInterval(t);
  }, []);

  return (
    <Slide kicker="Zoom · z-bot" frame="06 / 09">
      <div style={{ display: "flex", flexDirection: "column", gap: 56, marginTop: 80, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 64, lineHeight: 1.0,
            letterSpacing: "-0.03em", margin: 0, maxWidth: 1400,
          }}>
            <span style={{
              display: "block",
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 120, lineHeight: 0.95,
              letterSpacing: "-0.04em", marginBottom: 16,
              background: "linear-gradient(120deg, #6C87D8, #2F4DAA)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              paddingBottom: 4,
            }}>z-bot</span>
            El agente que clasifica, valida y enriquece cada feedback.
          </motion.h2>
          <Eyebrow tone="muted">Lifecycle</Eyebrow>
        </div>

        {/* flow */}
        <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* connection lines */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1640 380" preserveAspectRatio="none">
            <defs>
              <linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(108,135,216,0.3)" />
                <stop offset="100%" stopColor="rgba(108,135,216,0.8)" />
              </linearGradient>
            </defs>
            {Array.from({ length: stages.length - 1 }).map((_, i) => {
              const x1 = 130 + i * 268;
              const x2 = x1 + 178;
              return (
                <motion.line
                  key={i}
                  x1={x1} y1="190" x2={x2} y2="190"
                  stroke="url(#connGrad)" strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                />
              );
            })}
          </svg>

          <div style={{ display: "grid", gridTemplateColumns: `repeat(${stages.length}, 1fr)`, gap: 24, position: "relative", width: "100%" }}>
            {stages.map((s, i) => {
              const isActive = activeNode === i;
              const isPassed = activeNode > i;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 30, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.10, ...E.spring }}
                  style={{ position: "relative" }}
                >
                  {/* node block */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      boxShadow: isActive
                        ? "0 0 60px rgba(108,135,216,0.45), inset 0 0 0 2px rgba(108,135,216,0.7)"
                        : isPassed
                          ? "0 0 30px rgba(107,198,76,0.25), inset 0 0 0 1.5px rgba(107,198,76,0.45)"
                          : "0 0 0 rgba(0,0,0,0), inset 0 0 0 1px #E4E5E7",
                    }}
                    transition={{ duration: 0.4, ease: E.easeOut }}
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, rgba(108,135,216,0.18), rgba(108,135,216,0.04))"
                        : isPassed
                          ? "linear-gradient(180deg, rgba(107,198,76,0.10), rgba(107,198,76,0.02))"
                          : "#FFFFFF",
                      borderRadius: 18,
                      padding: 24,
                      textAlign: "center",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <div style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: isActive ? "var(--accent)" : isPassed ? "var(--accent-2)" : "#E4E5E7",
                      display: "grid", placeItems: "center",
                      margin: "0 auto 16px",
                      fontFamily: "var(--mono)", fontSize: 24,
                      color: isActive || isPassed ? "#000" : "var(--ink)",
                      fontWeight: 600,
                      boxShadow: isActive ? "0 0 24px rgba(108,135,216,0.6)" : "none",
                      transition: "background 0.4s ease, color 0.4s ease",
                    }}>{s.icon}</div>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
                      letterSpacing: "0.2em", textTransform: "uppercase",
                    }}>{String(i + 1).padStart(2, "0")}</div>
                    <div style={{
                      fontFamily: "var(--display)", fontWeight: 500, fontSize: 26,
                      letterSpacing: "-0.015em", marginTop: 6, color: "var(--ink)",
                    }}>{s.title}</div>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)",
                      marginTop: 10, lineHeight: 1.5,
                    }}>{s.note}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* animated packet — feedback flowing */}
          <motion.div
            animate={{
              left: `calc(${(activeNode / stages.length) * 100}% + 8.3%)`,
              opacity: activeNode < stages.length ? 1 : 0,
              scale: activeNode < stages.length ? 1 : 0.5,
            }}
            transition={{ duration: 0.9, ease: E.easeOut }}
            style={{
              position: "absolute", top: 100,
              transform: "translateX(-50%)",
              fontFamily: "var(--mono)", fontSize: 13, color: "#000",
              background: "linear-gradient(135deg, #6C87D8, #2F4DAA)",
              padding: "6px 12px", borderRadius: 999,
              boxShadow: "0 6px 24px rgba(108,135,216,0.5)",
              letterSpacing: "0.1em", textTransform: "uppercase",
              whiteSpace: "nowrap", pointerEvents: "none",
              fontWeight: 600,
            }}
          >
            ◆ feedback · WFL-842
          </motion.div>
        </div>

        {/* footer copy */}
        <motion.div variants={fadeUp} style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28,
          paddingTop: 28, borderTop: "1px solid #E4E5E7",
        }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Reglas</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink)", marginTop: 8, lineHeight: 1.35, fontWeight: 400 }}>
              Criterios de Buk + Workflitos: <b style={{ fontWeight: 500 }}>seguridad, scope, prioridad</b>.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Salida</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink)", marginTop: 8, lineHeight: 1.35, fontWeight: 400 }}>
              Feedback estructurado, con contexto, listo para <b style={{ fontWeight: 500 }}>Jira</b>.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Observable</div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink)", marginTop: 8, lineHeight: 1.35, fontWeight: 400 }}>
              Cada paso es un nodo n8n: <b style={{ fontWeight: 500 }}>visible, idempotente</b>, con retries.
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}

Object.assign(window, { SlideLegacy, SlideClassifier });
