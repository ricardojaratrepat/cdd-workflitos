/* global React, ReactDOM */
const { motion: m, AnimatePresence: AP } = window.FramerMotion || window.framerMotion || window.Motion;
const { useState: useStateApp, useEffect: useEffectApp, useCallback: useCallbackApp, useRef: useRefApp } = React;

const SLIDES = [
  { id: "legacy",     C: window.SlideLegacy,     label: "" },
  { id: "hook",       C: window.SlideHook,       label: "" },
  { id: "problem",    C: window.SlideProblem,    label: "Problema" },
  { id: "solution",   C: window.SlideSolution,   label: "Solución" },
  { id: "how",        C: window.SlideHow,        label: "Cómo funciona" },
  { id: "classifier", C: window.SlideClassifier, label: "Clasificador" },
  { id: "agent",      C: window.SlideAgent,      label: "Workflito" },
  { id: "value",      C: window.SlideValue,      label: "Valor" },
  { id: "end",        C: window.SlideEnd,        label: "Cierre" },
];

/* ─── stage that scales 1920×1080 to fit any viewport ─── */
function Stage({ children }) {
  const [scale, setScale] = useStateApp(() => {
    if (typeof window === "undefined") return 1;
    const sx = window.innerWidth / 1920;
    const sy = window.innerHeight / 1080;
    return Math.min(sx, sy);
  });
  useEffectApp(() => {
    const fit = () => {
      const sx = window.innerWidth / 1920;
      const sy = window.innerHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return (
    <div style={{
      position: "fixed", left: "50%", top: "50%",
      width: 1920, height: 1080,
      transform: `translate(-50%, -50%) scale(${scale})`,
      transformOrigin: "50% 50%",
      background: "#FFFFFF",
      overflow: "hidden",
      borderRadius: 0,
    }}>
      {children}
    </div>
  );
}

/* ─── progress UI: top progress bar + bottom nav ─── */
function Progress({ i, n, onJump }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        display: "flex", gap: 4, padding: "0 0px", zIndex: 50,
      }}
    >
      {Array.from({ length: n }).map((_, k) => (
        <button
          key={k}
          onClick={() => onJump(k)}
          aria-label={`Slide ${k + 1}`}
          style={{
            flex: 1, height: 2, padding: 0, border: "none", cursor: "pointer",
            background: k <= i ? "linear-gradient(90deg, #6C87D8, #2F4DAA)" : "rgba(0,0,0,0.08)",
            transition: "background 0.6s cubic-bezier(0.22,0.61,0.36,1)",
          }}
        />
      ))}
    </m.div>
  );
}

function NavBar({ i, n, onPrev, onNext, label }) {
  return (
    <div style={{
      position: "absolute", bottom: 36, left: 0, right: 0,
      display: "flex", justifyContent: "center", zIndex: 50,
      pointerEvents: "none",
    }}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        style={{
          display: "flex", alignItems: "center", gap: 14,
          padding: "10px 14px",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid #E4E5E7",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          borderRadius: 999,
          boxShadow: "0 12px 36px rgba(9,19,81,0.12), 0 2px 6px rgba(9,19,81,0.06)",
          pointerEvents: "auto",
        }}
      >
        <NavBtn onClick={onPrev} disabled={i === 0} aria="Anterior">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </NavBtn>
      <span style={{
        fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-dim)",
        letterSpacing: "0.22em", textTransform: "uppercase",
        minWidth: 200, textAlign: "center", whiteSpace: "nowrap",
      }}>
        <span style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
        <span style={{ opacity: 0.5 }}> / {String(n).padStart(2, "0")}</span>
        {label && (<>
          <span style={{ margin: "0 12px", opacity: 0.4 }}>·</span>
          <span>{label}</span>
        </>)}
      </span>
        <NavBtn onClick={onNext} disabled={i === n - 1} aria="Siguiente" primary>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </NavBtn>
      </m.div>
    </div>
  );
}

function NavBtn({ children, onClick, disabled, primary, aria }) {
  return (
    <m.button
      onClick={onClick}
      disabled={disabled}
      aria-label={aria}
      whileHover={!disabled ? { scale: 1.08 } : {}}
      whileTap={!disabled ? { scale: 0.94 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      style={{
        width: 36, height: 36, borderRadius: "50%", border: "none", cursor: disabled ? "default" : "pointer",
        background: primary ? "linear-gradient(135deg, #2F4DAA, #172A7A)" : "#F0F1F3",
        color: primary ? "#FFFFFF" : "var(--ink)",
        display: "grid", placeItems: "center", outline: "none",
        opacity: disabled ? 0.3 : 1,
        boxShadow: primary && !disabled ? "0 6px 20px rgba(108,135,216,0.35)" : "none",
      }}
    >
      {children}
    </m.button>
  );
}

/* ─── transition: directional fade+slide+blur ─── */
const variantsByDir = (dir) => ({
  enter: { opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.985, filter: "blur(12px)" },
  center: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit:  { opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.985, filter: "blur(10px)" },
});

/* ─── root ─── */
function App() {
  const [i, setI] = useStateApp(() => {
    const h = parseInt(location.hash.replace("#", ""), 10);
    return isNaN(h) ? 0 : Math.max(0, Math.min(SLIDES.length - 1, h));
  });
  const [dir, setDir] = useStateApp(1);

  const goto = useCallbackApp((next) => {
    setI((cur) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, next));
      setDir(clamped > cur ? 1 : -1);
      return clamped;
    });
  }, []);

  useEffectApp(() => {
    history.replaceState(null, "", `#${i}`);
  }, [i]);

  // Listen to URL hash changes (back/forward, manual edit)
  useEffectApp(() => {
    const onHash = () => {
      const h = parseInt(location.hash.replace("#", ""), 10);
      if (!isNaN(h)) goto(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [goto]);

  useEffectApp(() => {
    const onKey = (e) => {
      // arrow up/down used inside slide-how; only handle if not consumed
      if (e.defaultPrevented) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); goto(i + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); goto(i - 1); }
      else if (e.key === "Home") { goto(0); }
      else if (e.key === "End")  { goto(SLIDES.length - 1); }
      else if (/^[1-9]$/.test(e.key)) { goto(parseInt(e.key, 10) - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, goto]);

  const { C, label } = SLIDES[i];
  const variants = variantsByDir(dir);

  return (
    <Stage>
      <Progress i={i} n={SLIDES.length} onJump={goto} />

      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <AP mode="wait" custom={dir}>
          <m.div
            key={SLIDES[i].id}
            custom={dir}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <C />
          </m.div>
        </AP>
      </div>

      <NavBar i={i} n={SLIDES.length} label={label}
              onPrev={() => goto(i - 1)} onNext={() => goto(i + 1)} />
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
