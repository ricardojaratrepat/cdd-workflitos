/* global React */
// Shared atoms for the Apple-style CDD deck.
// All exports are pushed to window at the bottom so other Babel scripts can find them.

const { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } = window.FramerMotion || window.framerMotion || window.Motion;
const { useEffect, useState, useRef, useMemo, useCallback } = React;

/* ─── easing & spring presets that feel Apple ─── */
const E = {
  spring: { type: "spring", stiffness: 80, damping: 18, mass: 0.6 },
  springBouncy: { type: "spring", stiffness: 120, damping: 14 },
  springSoft: { type: "spring", stiffness: 60, damping: 22, mass: 0.8 },
  ease: [0.22, 0.61, 0.36, 1],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.7, 0, 0.84, 0],
};

/* stagger helper */
const stagger = (delayBase = 0.06, child = 0.04) => ({
  hidden: {},
  show: { transition: { staggerChildren: delayBase, delayChildren: child } },
});

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: E.easeOut } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.0, ease: E.easeOut } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.1, ease: E.easeOut } },
};

/* ─── Eyebrow ─── */
function Eyebrow({ children, tone = "blue", className = "" }) {
  const color = tone === "blue" ? "var(--accent)" : tone === "green" ? "var(--accent-2)" : tone === "muted" ? "var(--muted)" : "var(--ink)";
  return (
    <motion.div
      variants={fadeUp}
      className={`eyebrow ${className}`}
      style={{ color, fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 12 }}
    >
      <span style={{ width: 8, height: 8, borderRadius: 8, background: color, boxShadow: `0 0 12px ${color}` }} />
      {children}
    </motion.div>
  );
}

/* ─── Frosted card ─── */
function Card({ children, className = "", style = {}, ...rest }) {
  return (
    <div
      className={`card ${className}`}
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",
        borderRadius: 24,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/* ─── Animated count-up ─── */
function CountUp({ to, from = 0, duration = 1.4, delay = 0, format = (v) => Math.round(v).toLocaleString("es-CL"), className, style }) {
  const ref = useRef(null);
  const [val, setVal] = useState(from);
  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      delay,
      ease: E.easeOut,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [to, from, duration, delay]);
  return <span ref={ref} className={className} style={style}>{format(val)}</span>;
}

/* ─── Chip ─── */
function Chip({ children, tone = "default", style = {} }) {
  const tones = {
    default: { color: "var(--ink-dim)", border: "rgba(255,255,255,0.18)", bg: "rgba(255,255,255,0.05)" },
    accent:  { color: "var(--accent)", border: "rgba(100,210,255,0.35)", bg: "rgba(100,210,255,0.06)" },
    green:   { color: "var(--accent-2)", border: "rgba(48,209,88,0.35)", bg: "rgba(48,209,88,0.06)" },
    warn:    { color: "#FFD60A", border: "rgba(255,214,10,0.35)", bg: "rgba(255,214,10,0.06)" },
    red:     { color: "#FF6961", border: "rgba(255,105,97,0.35)", bg: "rgba(255,105,97,0.06)" },
  }[tone];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "7px 14px", borderRadius: 999,
      fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.06em",
      color: tones.color, border: `1px solid ${tones.border}`, background: tones.bg,
      ...style,
    }}>
      {children}
    </span>
  );
}

/* ─── Slide page wrapper: handles the choreography envelope ─── */
function Slide({ children, padding = "120px 140px", style = {}, kicker, frame }) {
  return (
    <motion.section
      variants={stagger(0.09, 0.15)}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0.985, transition: { duration: 0.5, ease: E.easeIn } }}
      style={{
        position: "absolute", inset: 0,
        padding,
        display: "flex", flexDirection: "column",
        ...style,
      }}
    >
      {(kicker || frame) && <SlideTopbar kicker={kicker} frame={frame} />}
      {children}
    </motion.section>
  );
}

function SlideTopbar({ kicker, frame }) {
  return (
    <motion.div
      variants={fade}
      style={{
        position: "absolute", top: 56, left: 64, right: 64,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.22em",
        textTransform: "uppercase", color: "var(--muted)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: 6, background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
        {kicker}
      </span>
      <span>{frame}</span>
    </motion.div>
  );
}

Object.assign(window, { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView, E, stagger, fadeUp, fade, scaleIn, Eyebrow, Card, CountUp, Chip, Slide, SlideTopbar });
