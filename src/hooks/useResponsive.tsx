import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return both the height and width
  return { isMobile };
};
