import { size } from "@constants/devices";
import { useLayoutEffect, useState } from "react";

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < Number(size.laptop.slice(0, -2))) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
