"use client";
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
};

export default function Reveal({ children, delay = 0, direction = 'up' }: Props) {
  const prefersReducedMotion = useReducedMotion();

  const getInitial = () => {
    if (prefersReducedMotion) return { opacity: 0 };
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 16 };
      case 'down':
        return { opacity: 0, y: -16 };
      case 'left':
        return { opacity: 0, x: 16 };
      case 'right':
        return { opacity: 0, x: -16 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => ({ opacity: 1, x: 0, y: 0 });

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
