import { size } from "@constants/devices";
import { useEffect, useState } from "react";

export const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < Number(size.laptop.slice(0, -2)));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < Number(size.laptop.slice(0, -2)));

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
