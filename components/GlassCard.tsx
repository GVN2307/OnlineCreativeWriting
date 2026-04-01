"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, borderColor: "rgba(222, 229, 255, 0.2)" } : {}}
      className={`glass-panel ${className}`}
      style={{
        padding: "30px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      {children}
    </motion.div>
  );
}
