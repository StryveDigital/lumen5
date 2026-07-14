// Shared scroll-into-view hook for the Explainers page. Sets `inView` true the
// first time the element crosses the threshold, then disconnects. Used to
// trigger the section entrance + internal micro-animations (typing, shimmer,
// count-up). Motion-sensitive users get the end state immediately elsewhere.

import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(threshold = 0.25, rootMargin = '0px 0px -8% 0px') {
  const [inView, setInView] = useState(false);
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);
  return { inView, ref };
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
