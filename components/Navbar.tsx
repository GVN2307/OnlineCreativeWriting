"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-panel"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1200px",
        height: "70px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        margin: "0 auto"
      }}
    >
      <Link href="/" className="gradient-text" style={{ fontSize: "24px", fontWeight: 800 }}>
        Online Creative Writing
      </Link>
      
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link href="/discovery" style={{ fontWeight: 600 }}>Library</Link>
        <Link href="/challenges" style={{ fontWeight: 600 }}>Challenges</Link>
        <Link href="/dashboard" style={{ fontWeight: 600 }}>Dashboard</Link>
        <button className="btn-premium">Sign In</button>
      </div>
    </motion.nav>
  );
}
