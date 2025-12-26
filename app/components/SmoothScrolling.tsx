"use client";

import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      // duration: 2.5,
      smoothWheel: true,
      syncTouch: true
    }}>
      {children}
    </ReactLenis>

  );
}

export default SmoothScrolling;