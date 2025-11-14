// app/(or src)/components/HeroSlider.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// IMPORTANT: load LightRays client-side only
const LightRays = dynamic(() => import("../components/LightRays"), {
  ssr: false,
  // fallback keeps layout stable
  loading: () => <div className="absolute inset-0" aria-hidden />,
});


const PURPLE = "#6c1898";

const BLACK = "#000000";

export default function HeroSlider() {
  const [showIntro, setShowIntro] = useState(true);
  const [introOpacity, setIntroOpacity] = useState(0);     // logo opacity
  const [veilOpacity, setVeilOpacity] = useState(0.75);    // dark/blur overlay

  useEffect(() => {
    // Smooth, premium timings:
    // 1) fade IN logo + dark veil
    const t1 = setTimeout(() => setIntroOpacity(1), 50);       // ~50ms delay for mount
    // 2) HOLD for a beat
    const t2 = setTimeout(() => {
      // 3) fade OUT both slowly
      setIntroOpacity(0);
      setVeilOpacity(0);
    }, 1800); // hold until 1.8s
    // 4) remove intro from DOM after fade-out completes
    const t3 = setTimeout(() => setShowIntro(false), 3200); // total ~3.2s

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
   <section className="relative w-full overflow-hidden flex items-center min-h-screen lg:min-h-screen" style={{ backgroundColor: PURPLE }}>
  {/* Rays layer (behind content, above background) */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <LightRays
      raysOrigin="top-center"
      raysColor="#ffffff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={2.5}
      pulsating
      fadeDistance={2.0}
      saturation={1.2}
      followMouse
      mouseInfluence={0.12}
      noiseAmount={0.0}
      distortion={0.0}
      className="absolute inset-0 h-full w-full"
    />
  </div>

  {/* Intro overlay stays above */}
  {showIntro && (
    <div className="absolute inset-0 z-30 flex items-center justify-center transition-[opacity,backdrop-filter] duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
         style={{ backgroundColor: `rgba(0,0,0,${veilOpacity})`, backdropFilter: `blur(${Math.max(0, veilOpacity * 24)}px)` }}>
      <div className="text-white text-center font-extrabold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_12px_48px_rgba(0,0,0,0.45)] transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
           style={{ fontFamily: '"Zalando Sans Expanded", sans-serif', opacity: introOpacity }}>
        zynor.ai
      </div>
    </div>
  )}

  {/* Main content (z-20 is fine) */}
  <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-center text-white/95 leading-[1.05] font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
        style={{ fontFamily: '"Zalando Sans Expanded", sans-serif' }}>
      We Build Software That <span className="text-white">Actually Ships</span>
    </h1>
  </div>
</section>

  );
}
