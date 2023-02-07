/* eslint-disable consistent-return */
import { useEffect } from "react";

import { useLatest } from "./useLatest";

export const useIntersectionObserver = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (isIntersecting: boolean) => void
) => {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entries]) => {
      latestHandler.current(entries.isIntersecting);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
};
