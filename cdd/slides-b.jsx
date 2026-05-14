/* global React, motion, AnimatePresence, Slide, Eyebrow, Card, Chip, CountUp, fadeUp, fade, scaleIn, stagger, E */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ════════════════════════════ 5 · AGENTE DEV (terminal) ════════════════════════════ */
const TERM_LINES = [
  { html: `<span class="p">cdd-dev</span> <span class="d">$</span> agent.pickup(<span class="h">"WFL-842"</span>)` },
  { html: `<span class="d">  ↳ launchpad · "El filtro de fecha en Liquidaciones se resetea…"</span>` },
  { html: `&nbsp;` },
  { html: `<span class="p">[1/6]</span> resolve repo &nbsp;&nbsp;→ <span class="ok">buk-web · branch fix/wfl-842-date-filter</span>` },
  { html: `<span class="p">[2/6]</span> read context &nbsp;→ <span class="ok">parsed Hotjar session · 14 occurrences</span>` },
  { html: `<span class="p">[3/6]</span> locate code &nbsp;→ <span class="h">pages/liquidaciones/Filters.tsx</span> <span class="d">L 142–187</span>` },
  { html: `<span class="p">[4/6]</span> propose patch → <span class="ok">persist filter in queryParams + URL state</span>` },
  { html: `<span class="d">      diff:</span> <span class="ok">+38</span> <span class="w">−6</span> <span class="d">across 3 files</span>` },
  { html: `<span class="p">[5/6]</span> run tests &nbsp;&nbsp;→ <span class="ok">27 / 27 passed</span> <span class="d">(3m 12s)</span>` },
  { html: `<span class="p">[6/6]</span> open PR &nbsp;&nbsp;&nbsp;→ <span class="ok">PR #4218 · review requested</span>` },
  { html: `&nbsp;` },
  { html: `<span class="ok">✓ done</span> <span class="d">· notified #cdd-review · 3m 41s elapsed</span>` },
];

function SlideAgent() {
  const [visible, setVisible] = useStateB(0);

  useEffectB(() => {
    let t;
    const tick = () => {
      setVisible(v => {
        if (v >= TERM_LINES.length) return v;
        return v + 1;
      });
      t = setTimeout(tick, 280);
    };
    t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <Slide kicker="Workflito · Agente Dev" frame="07 / 09">
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
            }}>Workflito</span>
            El agente desarrollador toma la tarjeta y abre el PR.
          </motion.h2>
          <Eyebrow tone="muted">Demo técnico · live trace</Eyebrow>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, flex: 1 }}>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* ticket */}
            <Card style={{ padding: 36 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.24em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: 8, background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
                Launchpad · WFL-842
              </div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 500, fontSize: 32, lineHeight: 1.15,
                letterSpacing: "-0.02em", margin: "16px 0 20px",
              }}>
                “El filtro de fecha en Liquidaciones se resetea al cambiar de página”
              </div>
              <div style={{ fontFamily: "var(--display)", fontSize: 19, color: "var(--ink-dim)", lineHeight: 1.55 }}>
                <b style={{ color: "var(--ink)", fontWeight: 500 }}>Contexto · cliente.</b> En la sesión <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: 17 }}>hj-9f3a…</span>, el usuario aplica un rango de fechas, va a la página 2 y pierde el filtro. Reportado 14 veces esta semana.
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
                <Chip>label · bug</Chip>
                <Chip>area · liquidaciones</Chip>
                <Chip tone="warn">prio · p1</Chip>
                <Chip tone="green">codeowner · @squad-pay</Chip>
                <Chip>repo · buk-web</Chip>
              </div>
            </Card>

            {/* PR */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={visible >= TERM_LINES.length - 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
              transition={{ ...E.spring, duration: 0.8 }}
            >
              <Card style={{
                padding: 32,
                background: "linear-gradient(180deg, rgba(107,198,76,0.08), rgba(107,198,76,0.01))",
                borderColor: "rgba(107,198,76,0.35)",
              }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent-2)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  ◆ PR #4218 · OPEN
                </div>
                <div style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 26, marginTop: 12, letterSpacing: "-0.015em" }}>
                  fix(liquidaciones): persist date filter across pagination
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-dim)", marginTop: 14, letterSpacing: "0.06em" }}>
                  branch <b style={{ color: "var(--ink)" }}>fix/wfl-842-date-filter</b> &nbsp;·&nbsp; agent <b style={{ color: "var(--ink)" }}>cdd-dev@v1.4</b>
                </div>
                <div style={{ display: "flex", gap: 14, marginTop: 14, fontFamily: "var(--mono)", fontSize: 14 }}>
                  <span style={{ color: "var(--accent-2)" }}>+ 38</span>
                  <span style={{ color: "#F95E50" }}>− 6</span>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span style={{ color: "var(--ink-dim)" }}>3 archivos</span>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span style={{ color: "var(--accent)" }}>3m 41s</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div style={{
              background: "#0F121A",
              border: "1px solid #1a1d28",
              borderRadius: 12,
              overflow: "hidden",
              fontFamily: "var(--mono)", fontSize: 17, lineHeight: 1.55, color: "#cfe5ff",
              boxShadow: "0 16px 40px rgba(9,19,81,0.18)",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8, padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                fontSize: 12, color: "#9aa3b8", letterSpacing: "0.18em", textTransform: "uppercase",
              }}>
                <span style={{ width: 12, height: 12, borderRadius: 12, background: "#F95E50" }} />
                <span style={{ width: 12, height: 12, borderRadius: 12, background: "#FBCF60" }} />
                <span style={{ width: 12, height: 12, borderRadius: 12, background: "#6BC64C" }} />
                <span style={{ marginLeft: "auto" }}>cdd-dev · agent.run() · WFL-842</span>
              </div>
              <div style={{ padding: 28, minHeight: 480 }}>
                {TERM_LINES.map((ln, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i < visible ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                    dangerouslySetInnerHTML={{ __html: ln.html }}
                  />
                ))}
                {visible >= TERM_LINES.length && (
                  <div>
                    <span className="p" style={{ color: "var(--accent)" }}>cdd-dev</span> <span className="d" style={{ color: "var(--muted)" }}>$</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ display: "inline-block", width: 10, height: 20, background: "var(--accent)", verticalAlign: "-3px", marginLeft: 6 }}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        .p { color: var(--accent); }
        .d { color: var(--muted); }
        .ok { color: var(--accent-2); }
        .w { color: #F95E50; }
        .h { color: #fff; }
      `}</style>
    </Slide>
  );
}

/* ════════════════════════════ 6 · VALOR (before/after) ════════════════════════════ */
function SlideValue() {
  return (
    <Slide kicker="Impacto · Antes / Después" frame="08 / 09" padding="96px 140px 160px">
      <div style={{ display: "flex", flexDirection: "column", gap: 36, marginTop: 32, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 96, lineHeight: 1.0,
            letterSpacing: "-0.035em", margin: 0, maxWidth: 1400,
          }}>
            De <span style={{ color: "#F95E50", textDecoration: "line-through", textDecorationThickness: 4, textDecorationColor: "rgba(249,94,80,0.5)" }}>semanas</span> a{" "}
            <span style={{
              background: "linear-gradient(120deg, #6C87D8, #2F4DAA)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>minutos</span>.
          </motion.h2>
          <Eyebrow tone="muted">Medido · caso piloto</Eyebrow>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 1fr", alignItems: "stretch", flex: 1 }}>
          {/* before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: E.easeOut }}
            style={{
              border: "1px solid rgba(249,94,80,0.35)", borderRadius: 24,
              background: "linear-gradient(180deg, rgba(249,94,80,0.08), rgba(249,94,80,0.01))",
              padding: 56, display: "flex", flexDirection: "column", justifyContent: "space-between",
              position: "relative", minHeight: 440,
            }}
          >
            <div style={{
              position: "absolute", top: 32, right: 32, fontFamily: "var(--mono)", fontSize: 12,
              color: "#F95E50", border: "1px solid #F95E50", padding: "6px 12px", letterSpacing: "0.22em", textTransform: "uppercase",
            }}>Deprecated</div>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: "#F95E50", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Antes · ciclo manual
              </div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 500, fontSize: 240, lineHeight: 0.9,
                letterSpacing: "-0.06em", color: "#F95E50", marginTop: 24,
                textDecoration: "line-through", textDecorationThickness: 7, textDecorationColor: "rgba(249,94,80,0.4)",
              }}>
                <CountUp to={3} duration={1.3} delay={0.4} format={(v) => Math.round(v).toLocaleString("es-CL")} />
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 22, color: "var(--ink-dim)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 10 }}>
                semanas · feedback → PR
              </div>
            </div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink-dim)", lineHeight: 1.45, marginTop: 32 }}>
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>Coste oculto:</b> 4 traspasos, 3 reuniones, contexto perdido entre PM, soporte y dev.
            </div>
          </motion.div>

          {/* separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, ...E.springBouncy }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14,
              color: "var(--accent)",
            }}
          >
            <div style={{ fontFamily: "var(--display)", fontSize: 80, lineHeight: 1, textShadow: "0 0 24px rgba(108,135,216,0.5)" }}>→</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.3em", textTransform: "uppercase" }}>CDD</div>
          </motion.div>

          {/* after */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.9, ease: E.easeOut }}
            style={{
              border: "1px solid rgba(108,135,216,0.45)", borderRadius: 24,
              background: "linear-gradient(180deg, rgba(108,135,216,0.10), rgba(108,135,216,0.02))",
              padding: 56, display: "flex", flexDirection: "column", justifyContent: "space-between",
              position: "relative", minHeight: 440,
              boxShadow: "0 0 80px rgba(108,135,216,0.12)",
            }}
          >
            <div style={{
              position: "absolute", top: 32, right: 32, fontFamily: "var(--mono)", fontSize: 12,
              color: "var(--accent)", border: "1px solid var(--accent)", padding: "6px 12px", letterSpacing: "0.22em", textTransform: "uppercase",
            }}>Live</div>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--accent)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Después · CDD
              </div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 500, fontSize: 240, lineHeight: 0.9,
                letterSpacing: "-0.06em",
                background: "linear-gradient(180deg, #6C87D8 0%, #2F4DAA 50%, #091351 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                marginTop: 24, textShadow: "0 0 60px rgba(47,77,170,0.22)",
              }}>
                <CountUp to={10} duration={1.6} delay={1.6} format={(v) => Math.round(v).toLocaleString("es-CL")} />
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 22, color: "var(--ink-dim)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 10 }}>
                minutos · feedback → PR
              </div>
            </div>
            <div style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink-dim)", lineHeight: 1.45, marginTop: 32 }}>
              El cliente manda un feedback y ya hay <b style={{ color: "var(--ink)", fontWeight: 500 }}>un PR esperando review</b> en Google Chat. El squad sólo aprueba.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: E.easeOut }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}
        >
          {[
            { k: "Aceleración",          v: <><CountUp to={6000} duration={1.6} delay={2.2} />×</>,  u: "vs baseline", tone: "ok" },
            { k: "PRs auto-generados",   v: <>+<CountUp to={30} duration={1.3} delay={2.4} /></>, u: "/ día (est.)", tone: "ok" },
            { k: "Tickets perdidos",     v: <>−<CountUp to={92} duration={1.3} delay={2.6} />%</>, u: "vs flujo manual", tone: "warn" },
            { k: "NPS soporte",          v: <>+<CountUp to={18} duration={1.3} delay={2.8} /></>, u: "pts (proy.)", tone: "ok" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: 24, borderRadius: 18 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase" }}>{s.k}</div>
              <div style={{
                fontFamily: "var(--display)", fontWeight: 500, fontSize: 48,
                letterSpacing: "-0.03em", marginTop: 8,
                color: s.tone === "ok" ? "var(--accent-2)" : "#F95E50",
              }}>
                {s.v}
                <span style={{ fontFamily: "var(--mono)", fontSize: 14, color: "var(--ink-dim)", marginLeft: 8, letterSpacing: 0 }}>{s.u}</span>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 7 · RÚBRICA ════════════════════════════ */
function SlideRubric() {
  const crits = [
    { num: "01", ttl: "Valor de\nnegocio", pct: 98, why: <>Toca dolor real: feedback que se pierde. <b>Reduce lead-time</b> de semanas a minutos, libera horas de squad y mejora NPS. Escalable a todo Buk.</> },
    { num: "02", ttl: "Eficiencia\noperativa", pct: 96, why: <>n8n + agentes elimina <b>3 traspasos manuales</b>. Cero swivel-chair. Idempotente, observable, con retries y logs por sesión.</> },
    { num: "03", ttl: "Innovación\ncon IA", pct: 99, why: <>Dos agentes en cadena — <b>ticketing + dev</b> — con human-in-the-loop al final. No es chat: es un sistema que <i>produce</i>.</> },
    { num: "04", ttl: "Pitch &\nnarrativa", pct: 94, why: <><i>“El cliente habla. El código escucha.”</i> Un manifiesto que cualquiera entiende en 6 segundos — y <b>una demo que se ve en vivo</b>.</> },
  ];

  return (
    <Slide kicker="Rúbrica · Por qué ganamos" frame="07 / 08">
      <div style={{ display: "flex", flexDirection: "column", gap: 56, marginTop: 80, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 60 }}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: "var(--display)", fontWeight: 500, fontSize: 96, lineHeight: 1.0,
            letterSpacing: "-0.035em", margin: 0,
          }}>
            Cuatro criterios. <span style={{ color: "var(--accent)" }}>Cuatro excelentes.</span>
          </motion.h2>
          <Eyebrow tone="muted">Judging · Workflitos</Eyebrow>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, flex: 1 }}>
          {crits.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.12, ...E.spring }}
              style={{ display: "flex" }}
            >
              <Card style={{
                padding: 36, borderRadius: 24, display: "flex", flexDirection: "column", flex: 1,
                borderColor: "rgba(108,135,216,0.25)",
                background: "linear-gradient(180deg, rgba(108,135,216,0.05), #F6F7F9)",
                boxShadow: "0 0 40px rgba(108,135,216,0.08)",
              }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--muted)", letterSpacing: "0.24em" }}>
                  {c.num} · Criterio
                </div>
                <div style={{
                  fontFamily: "var(--display)", fontWeight: 500, fontSize: 38, lineHeight: 1.05,
                  letterSpacing: "-0.02em", color: "var(--accent)", marginTop: 12, whiteSpace: "pre-line",
                }}>
                  {c.ttl}
                </div>
                <div style={{ fontFamily: "var(--display)", fontSize: 18, color: "var(--ink-dim)", marginTop: 22, lineHeight: 1.55, flex: 1, fontWeight: 400 }}>
                  {c.why}
                </div>

                <div style={{ marginTop: 28, height: 8, background: "#E4E5E7", borderRadius: 999, overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 1.4, ease: E.easeOut }}
                    style={{
                      height: "100%", borderRadius: 999,
                      background: "linear-gradient(90deg, #6C87D8, #6C87D8, #2F4DAA)",
                      boxShadow: "0 0 12px rgba(108,135,216,0.5)",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 14 }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Evaluación</span>
                  <span style={{ fontFamily: "var(--display)", fontWeight: 500, fontSize: 44, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                    <CountUp to={c.pct} duration={1.3} delay={0.9 + i * 0.15} />
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* ════════════════════════════ 8 · CIERRE ════════════════════════════ */
function SlideEnd() {
  return (
    <Slide kicker="End · Workflitos" frame="09 / 09">
      {/* concentric glow rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.8, ease: E.easeOut }}
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 1600, height: 1600, pointerEvents: "none" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px dashed rgba(108,135,216,0.16)" }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 160, borderRadius: "50%", border: "1px dashed rgba(108,135,216,0.10)" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 320, borderRadius: "50%", border: "1px dashed rgba(108,135,216,0.06)" }}
        />
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(108,135,216,0.22), transparent 65%)",
          filter: "blur(40px)",
        }} />
      </motion.div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 48, position: "relative", zIndex: 2 }}>
        <motion.div variants={fadeUp} style={{
          fontFamily: "var(--mono)", fontSize: 18, letterSpacing: "0.45em", color: "var(--accent)", textTransform: "uppercase",
        }}>
          Client-Driven Development©
        </motion.div>

        <h1 style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 300 }}>
          <motion.span
            variants={fadeUp}
            style={{
              display: "block", fontSize: 200, lineHeight: 1.05, letterSpacing: "-0.045em", color: "var(--ink)",
              paddingBottom: 6,
            }}
          >El cliente habla.</motion.span>
          <motion.span
            variants={fadeUp}
            style={{
              display: "block", fontSize: 200, lineHeight: 1.05, letterSpacing: "-0.045em",
              paddingBottom: 12,
              background: "linear-gradient(180deg, #6C87D8 0%, #2F4DAA 50%, #091351 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              textShadow: "0 0 60px rgba(47,77,170,0.25)",
              fontWeight: 500,
            }}
          >El código escucha.</motion.span>
        </h1>

        <motion.div variants={fadeUp} style={{
          fontFamily: "var(--mono)", fontSize: 18, color: "var(--ink-dim)", letterSpacing: "0.35em", textTransform: "uppercase", marginTop: 12,
        }}>
          Equipo <span style={{ color: "var(--accent)" }}>Workflitos</span> · Betathon 2026
        </motion.div>
      </div>

      <motion.div variants={fade} style={{
        display: "flex", justifyContent: "space-between", alignItems: "end",
        fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", letterSpacing: "0.24em", textTransform: "uppercase",
      }}>
        <div style={{ display: "flex", gap: 32 }}>
          <span>Buk · 2026</span>
          <span>·</span>
          <span>v0.1 Live</span>
        </div>
        <div>// fin de transmisión <span style={{ color: "var(--accent)" }}>_</span></div>
      </motion.div>
    </Slide>
  );
}

Object.assign(window, { SlideAgent, SlideValue, SlideRubric, SlideEnd });
