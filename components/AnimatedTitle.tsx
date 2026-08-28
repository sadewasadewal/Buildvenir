'use client';

import type { ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedTitleProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function AnimatedTitle({ as: Component = 'h1', className = '', children }: AnimatedTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.96 }}
      animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="block"
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}
