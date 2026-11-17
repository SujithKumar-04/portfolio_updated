import { useEffect } from 'react';

// Adds the "in" class to any .rv element when it scrolls into view.
// Re-runs when `dep` changes so content loaded from the API is observed too.
export default function useReveal(dep) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
