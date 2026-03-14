'use client';

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const useScrollTrigger = (threshold = 0.1) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > threshold);
  });

  return isScrolled;
};
