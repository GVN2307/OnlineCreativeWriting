"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Discovery() {
  const genres = ["Fantasy", "Mystery", "Sci-Fi", "Poetry", "Essay", "Historical", "Horror"];
  
  const stories = [
    { title: "The Weaver's Paradox", author: "Aria Vance", words: "2.5k", readTime: "12m", genre: "Fantasy", cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400" },
    { title: "Echoes of a Sunless Sea", author: "Julian Thorne", words: "5k", readTime: "25m", genre: "Sci-Fi", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400" },
    { title: "Terminal Velocity", author: "Markus Reed", words: "1.2k", readTime: "6m", genre: "Thriller", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" },
    { title: "The Last Alchemist", author: "Elena Rossi", words: "3.8k", readTime: "18m", genre: "Fantasy", cover: "https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      
      <main style={{ maxWidth: "1200px", margin: "120px auto 0", padding: "0 20px" }}>
        
        {/* Search & Genres */}
        <section style={{ marginBottom: "60px" }}>
          <div className="glass-panel" style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
            <span style={{ opacity: 0.5 }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search for stories, authors, or genres..." 
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--foreground)",
                fontSize: "18px",
                flex: 1,
                padding: "10px"
              }}
            />
          </div>
          
          <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "10px" }} className="hide-scrollbar">
            {genres.map((genre, i) => (
              <motion.button
                key={genre}
                whileHover={{ y: -2 }}
                style={{
                  background: "rgba(222, 229, 255, 0.05)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--foreground)",
                  padding: "8px 20px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                {genre}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Featured Story */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Featured of the Day</h2>
          <GlassCard hover={false} style={{ padding: 0, overflow: "hidden", flexDirection: "row", height: "400px" }}>
            <div style={{ flex: 1.2, position: "relative" }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `url(${stories[0].cover}) center/cover`
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(6, 14, 32, 0.8), transparent)"
              }} />
            </div>
            <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "12px", letterSpacing: "0.1em", marginBottom: "10px" }}>STAFF PICK</span>
              <h3 style={{ fontSize: "36px", marginBottom: "16px" }}>{stories[0].title}</h3>
              <p style={{ opacity: 0.7, marginBottom: "30px", lineHeight: 1.6 }}>By {stories[0].author} • {stories[0].words} words • {stories[0].readTime} read</p>
              <p style={{ opacity: 0.8, marginBottom: "30px", fontStyle: "italic" }}>
                "A mind-bending journey through the fabric of time, where every choice ripples across dimensions..."
              </p>
              <button className="btn-premium" style={{ width: "fit-content" }}>Read Now</button>
            </div>
          </GlassCard>
        </section>

        {/* Story Grid */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Recently Added</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {stories.slice(1).map((story, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div style={{
                  width: "100%",
                  height: "220px",
                  borderRadius: "8px",
                  background: `url(${story.cover}) center/cover`,
                  marginBottom: "20px"
                }} />
                <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{story.title}</h3>
                <p style={{ fontSize: "14px", opacity: 0.6, marginBottom: "16px" }}>By {story.author}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(222, 229, 255, 0.1)", paddingTop: "16px" }}>
                  <span style={{ fontSize: "12px", background: "var(--glass-border)", padding: "4px 10px", borderRadius: "100px" }}>{story.genre}</span>
                  <span style={{ fontSize: "12px", opacity: 0.5 }}>{story.readTime} read</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
