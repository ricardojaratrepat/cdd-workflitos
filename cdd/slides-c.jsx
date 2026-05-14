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

/* ════════════════════════════ 5 · AGENTE CLASIFICADOR · bifurcación ════════════════════════════ */
function SlideClassifier() {
  // What z-bot consults BEFORE deciding
  const inputs = [
    { id: "arq",  title: "Arquitectura Buk",  note: "convenciones técnicas, módulos e integraciones" },
    { id: "kit",  title: "Kit de Producto",   note: "lineamientos UX, componentes y patrones" },
    { id: "help", title: "Help Center",       note: "funcionalidades ya documentadas en producto" },
  ];

  // The three branches of the decision
  const outputs = [
    {
      id: "create",
      tone: "success",
      symbol: "✓",
      verdict: "No existe · y es factible",
      action: "Crea ticket en Jira",
      detail: "Siguiente paso: z-bot enriquece la solicitud con contexto y prioridad.",
    },
    {
      id: "reject-rules",
      tone: "warning",
      symbol: "▽",
      verdict: "No sigue los lineamientos de Buk",
      action: "Rechaza · responde al cliente",
      detail: "Mensaje automático con la razón (Arquitectura, Kit de Producto o ambas).",
    },
    {
      id: "reject-exists",
      tone: "danger",
      symbol: "↺",
      verdict: "Ya existe en la plataforma",
      action: "Rechaza · responde al cliente",
      detail: "Mensaje con el link al Help Center o al módulo donde ya está resuelto.",
    },
  ];

  const toneStyles = {
    success: {
      verdict: "#2F8F1E",
      bg: "linear-gradient(180deg, rgba(107,198,76,0.12), rgba(107,198,76,0.02))",
      border: "rgba(107,198,76,0.55)",
      icon: "#6BC64C",
      stroke: "rgba(107,198,76,0.85)",
    },
    warning: {
      verdict: "#C26A00",
      bg: "linear-gradient(180deg, rgba(249,147,4,0.10), rgba(249,147,4,0.02))",
      border: "rgba(249,147,4,0.55)",
      icon: "#F99304",
      stroke: "rgba(249,147,4,0.85)",
    },
    danger: {
      verdict: "#C2362B",
      bg: "linear-gradient(180deg, rgba(249,94,80,0.10), rgba(249,94,80,0.02))",
      border: "rgba(249,94,80,0.50)",
      icon: "#F95E50",
      stroke: "rgba(249,94,80,0.80)",
    },
  };

  // Cycle a highlight across the three branches
  const [active, setActive] = useStateC(0);
  useEffectC(() => {
    const t = setInterval(() => setActive(v => (v + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  // viewBox coordinates for the connector SVG (matches the absolute card layout below)
  const VB_W = 1640, VB_H = 600;
  const HUB_X = 820, HUB_Y = 300, HUB_R = 110;
  const IN_X = 360;            // right edge of input cards
  const OUT_X = 1100;          // left edge of output cards
  const inY  = [90, 300, 510]; // vertical centers of input cards
  const outY = [90, 300, 510]; // vertical centers of output cards

  return (
    <Slide kicker="Zoom · z-bot" frame="06 / 09">
      <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 50, flex: 1 }}>
        {/* heading */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 44, lineHeight: 1.1,
            letterSpacing: "-0.02em", margin: 0, maxWidth: 1300,
          }}>
            <span style={{
              display: "block",
              fontFamily: "var(--display)", fontWeight: 600, fontSize: 96, lineHeight: 0.95,
              letterSpacing: "-0.04em", marginBottom: 12,
              background: "linear-gradient(120deg, #6C87D8, #2F4DAA)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              paddingBottom: 4,
            }}>z-bot</span>
            Contrasta cada feedback con los lineamientos de Buk y bifurca el flujo en tres salidas.
          </motion.h2>
          <Eyebrow tone="muted">Clasificación</Eyebrow>
        </div>

        {/* flow canvas */}
        <div style={{ position: "relative", flex: 1, minHeight: 600 }}>
          {/* SVG connectors */}
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          >
            <defs>
              <linearGradient id="inFlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="rgba(108,135,216,0.20)" />
                <stop offset="100%" stopColor="rgba(108,135,216,0.85)" />
              </linearGradient>
            </defs>

            {/* inputs → hub */}
            {inY.map((y, i) => (
              <motion.path
                key={`in${i}`}
                d={`M ${IN_X} ${y} C ${IN_X + 160} ${y}, ${HUB_X - HUB_R - 80} ${HUB_Y}, ${HUB_X - HUB_R} ${HUB_Y}`}
                stroke="url(#inFlow)" strokeWidth="2.2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.8, ease: E.easeOut }}
              />
            ))}

            {/* hub → outputs (one per branch, colored by tone) */}
            {outY.map((y, i) => {
              const strokes = [toneStyles.success.stroke, toneStyles.warning.stroke, toneStyles.danger.stroke];
              const isActive = active === i;
              return (
                <motion.path
                  key={`out${i}`}
                  d={`M ${HUB_X + HUB_R} ${HUB_Y} C ${HUB_X + HUB_R + 80} ${HUB_Y}, ${OUT_X - 160} ${y}, ${OUT_X} ${y}`}
                  stroke={strokes[i]}
                  strokeWidth={isActive ? 3.2 : 2}
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: isActive ? 1 : 0.7 }}
                  transition={{ delay: 1.15 + i * 0.10, duration: 0.8, ease: E.easeOut }}
                  style={{ filter: isActive ? `drop-shadow(0 0 10px ${strokes[i]})` : "none" }}
                />
              );
            })}
          </svg>

          {/* inputs column */}
          <div style={{ position: "absolute", left: 0, top: 0, width: 360, height: VB_H }}>
            <div style={{
              position: "absolute", top: -34, left: 4,
              fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
              letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7,
            }}>z-bot revisa contra</div>
            {inputs.map((inp, i) => (
              <motion.div
                key={inp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.20 + i * 0.08, duration: 0.6, ease: E.easeOut }}
                style={{
                  position: "absolute",
                  left: 0, top: inY[i] - 55, width: 340, height: 110,
                  background: "#FFFFFF",
                  border: "1px solid #E4E5E7",
                  borderRadius: 14,
                  padding: "18px 22px",
                  display: "flex", flexDirection: "column", justifyContent: "center",
                  boxShadow: "0 4px 18px rgba(9,19,81,0.05)",
                }}
              >
                <div style={{
                  fontFamily: "var(--display)", fontWeight: 600, fontSize: 22,
                  color: "var(--ink)", letterSpacing: "-0.01em",
                }}>{inp.title}</div>
                <div style={{
                  fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
                  marginTop: 6, lineHeight: 1.45,
                }}>{inp.note}</div>
              </motion.div>
            ))}
          </div>

          {/* hub: z-bot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.8, ease: E.easeOut }}
            style={{
              position: "absolute",
              left: `calc(${(HUB_X / VB_W) * 100}% - ${HUB_R}px)`,
              top:  `calc(${(HUB_Y / VB_H) * 100}% - ${HUB_R}px)`,
              width: HUB_R * 2, height: HUB_R * 2, borderRadius: "50%",
              background: "linear-gradient(180deg, rgba(108,135,216,0.22), rgba(47,77,170,0.08))",
              border: "1.5px solid rgba(108,135,216,0.55)",
              display: "grid", placeItems: "center",
              boxShadow: "0 0 80px rgba(108,135,216,0.35), inset 0 0 0 1px rgba(255,255,255,0.4)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div style={{ textAlign: "center", padding: 8 }}>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.32em",
                textTransform: "uppercase", color: "var(--accent)", marginBottom: 6,
              }}>Clasifica</div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 700, fontSize: 42,
                letterSpacing: "-0.02em",
                background: "linear-gradient(120deg, #6C87D8, #2F4DAA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>z-bot</div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--muted)", marginTop: 6,
              }}>3 salidas</div>
            </div>
          </motion.div>

          {/* outputs column */}
          <div style={{ position: "absolute", right: 0, top: 0, width: 540, height: VB_H }}>
            <div style={{
              position: "absolute", top: -34, right: 4,
              fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
              letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7,
            }}>Bifurcación · 3 outputs</div>
            {outputs.map((o, i) => {
              const t = toneStyles[o.tone];
              const isActive = active === i;
              return (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1, x: 0,
                    scale: isActive ? 1.025 : 1,
                  }}
                  transition={{ delay: 1.05 + i * 0.10, duration: 0.6, ease: E.easeOut }}
                  style={{
                    position: "absolute",
                    right: 0, top: outY[i] - 80, width: 540, height: 160,
                    background: t.bg,
                    border: `1.5px solid ${t.border}`,
                    borderRadius: 16,
                    padding: "22px 26px",
                    display: "flex", gap: 18, alignItems: "flex-start",
                    boxShadow: isActive
                      ? `0 12px 36px ${t.border}, 0 0 0 1px ${t.border}`
                      : "0 4px 18px rgba(9,19,81,0.04)",
                    transition: "box-shadow 0.4s ease",
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: 56, height: 56, borderRadius: 14,
                    background: t.icon, color: "#FFFFFF",
                    display: "grid", placeItems: "center",
                    fontFamily: "var(--display)", fontWeight: 700, fontSize: 28,
                    boxShadow: `0 6px 20px ${t.border}`,
                  }}>{o.symbol}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.20em",
                      textTransform: "uppercase", color: t.verdict, fontWeight: 700,
                    }}>{o.verdict}</div>
                    <div style={{
                      fontFamily: "var(--display)", fontWeight: 600, fontSize: 24,
                      color: "var(--ink)", marginTop: 4, letterSpacing: "-0.015em",
                      lineHeight: 1.2,
                    }}>{o.action}</div>
                    <div style={{
                      fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)",
                      marginTop: 8, lineHeight: 1.5,
                    }}>{o.detail}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}

Object.assign(window, { SlideLegacy, SlideClassifier });
