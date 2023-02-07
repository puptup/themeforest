import { useLayoutEffect, useRef } from "react";

export const useLatest = <T>(handler: T) => {
  const ref = useRef(handler);

  useLayoutEffect(() => {
    ref.current = handler;
  }, [handler]);

  return ref;
};
