"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Editor() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("notes");
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const readability = "B+"; // Mock score

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "var(--background)", 
      color: "var(--foreground)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        style={{
          height: "60px",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--glass-border)",
          background: "rgba(15, 23, 42, 0.4)",
          backdropFilter: "blur(10px)",
          zIndex: 100
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link href="/dashboard" style={{ fontSize: "20px", opacity: 0.7 }}>←</Link>
          <span style={{ fontWeight: 600, fontSize: "16px" }}>The Silver Grimoire</span>
          <span style={{ fontSize: "12px", background: "rgba(222, 229, 255, 0.1)", padding: "4px 10px", borderRadius: "100px", opacity: 0.6 }}>Saved</span>
        </div>
        
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button style={{ background: "transparent", border: "none", color: "var(--foreground)", cursor: "pointer", opacity: 0.7 }}>Settings</button>
          <button className="btn-premium" style={{ padding: "8px 20px", fontSize: "14px" }}>Share</button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ 
              background: "rgba(222, 229, 255, 0.05)", 
              border: "1px solid var(--glass-border)", 
              color: "var(--foreground)", 
              padding: "8px 12px", 
              borderRadius: "8px", 
              cursor: "pointer" 
            }}
          >
            {sidebarOpen ? "→" : "←"}
          </button>
        </div>
      </motion.nav>

      <div style={{ display: "flex", flex: 1, position: "relative" }}>
        
        {/* Editor Area */}
        <motion.main
          animate={{ paddingRight: sidebarOpen ? "400px" : "0px" }}
          style={{ flex: 1, padding: "80px 0", overflowY: "auto", transition: "padding 0.3s ease" }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 40px" }}>
            <textarea
              autoFocus
              placeholder="Start writing your masterpiece..."
              onChange={(e) => setText(e.target.value)}
              style={{
                width: "100%",
                minHeight: "70vh",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--foreground)",
                fontSize: "20px",
                lineHeight: 1.6,
                fontFamily: "var(--font-manrope)",
                resize: "none"
              }}
            />
          </div>
        </motion.main>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass-panel"
              style={{
                position: "absolute", right: 20, top: 20, bottom: 20,
                width: "360px", zIndex: 50, padding: "30px",
                display: "flex", flexDirection: "column", gap: "20px"
              }}
            >
              <div style={{ display: "flex", gap: "15px", borderBottom: "1px solid var(--glass-border)", paddingBottom: "20px" }}>
                {["notes", "outline", "chars"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: "transparent", border: "none", cursor: "pointer",
                      fontSize: "14px", fontWeight: 600, textTransform: "capitalize",
                      color: activeTab === tab ? "var(--accent)" : "var(--foreground)",
                      opacity: activeTab === tab ? 1 : 0.5,
                      transition: "all 0.2s"
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div style={{ flex: 1, opacity: 0.8, fontSize: "15px", lineHeight: 1.6 }}>
                {activeTab === "notes" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ opacity: 0.5 }}>Quick notes for this chapter...</p>
                    <div style={{ background: "rgba(222, 229, 255, 0.05)", padding: "10px", borderRadius: "8px" }}>
                      Remember to foreshadow the secret in the cellar.
                    </div>
                  </div>
                )}
                {activeTab === "outline" && <p>Plot points and chapter breakdown...</p>}
                {activeTab === "chars" && <p>Character profiles and relationship map...</p>}
              </div>

              <div className="glass-panel" style={{ padding: "20px", background: "rgba(139, 92, 246, 0.1)" }}>
                <h4 style={{ fontSize: "14px", marginBottom: "10px", color: "var(--accent)" }}>AI Assistant</h4>
                <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "15px" }}>Stuck on the next sentence? I can help brainstorm ideas.</p>
                <button className="btn-premium" style={{ width: "100%", fontSize: "12px" }}>Brainstorm Ideas</button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Status Bar */}
        <div style={{
          position: "fixed", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: "20px", pointerEvents: "none", zIndex: 10
        }}>
          <div className="glass-panel" style={{ padding: "8px 20px", fontSize: "12px", opacity: 0.8, pointerEvents: "auto" }}>
            Words: <span style={{ color: "var(--accent)", fontWeight: 800 }}>{wordCount}</span>
          </div>
          <div className="glass-panel" style={{ padding: "8px 20px", fontSize: "12px", opacity: 0.8, pointerEvents: "auto" }}>
            Readability: <span style={{ color: "var(--primary)", fontWeight: 800 }}>{readability}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
