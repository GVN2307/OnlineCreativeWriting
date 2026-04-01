"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Challenges() {
  const activeContests = [
    { title: "The Midnight Mystery", prize: "$500", timeRemaining: "4d 12h", participants: 124, cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600" },
    { title: "Neon Dreams (Cyberpunk)", prize: "Featured Status", timeRemaining: "2d 6h", participants: 85, cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600" },
    { title: "Sonnet of the Sea", prize: "E-book Publication", timeRemaining: "12h 30m", participants: 210, cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600" }
  ];

  const dailyPrompts = [
    { day: "Today", text: '"The clock struck thirteen."', date: "July 24" },
    { day: "Yesterday", text: '"A shadow with no owner."', date: "July 23" },
    { day: "Tuesday", text: '"The silence of the deep."', date: "July 22" }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      
      <main style={{ maxWidth: "1200px", margin: "120px auto 0", padding: "0 20px" }}>
        
        {/* Header */}
        <section style={{ marginBottom: "60px", textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}><span className="gradient-text">Global Challenges</span></h1>
          <p style={{ fontSize: "18px", opacity: 0.6 }}>Explore active writing contests and spark your creativity with daily prompts.</p>
        </section>

        {/* Active Contests */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Active Global Contests</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px"
          }}>
            {activeContests.map((contest, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div style={{
                  width: "100%", height: "200px", borderRadius: "12px",
                  background: `url(${contest.cover}) center/cover`, marginBottom: "20px"
                }} />
                <div>
                  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{contest.title}</h3>
                  <div style={{ display: "flex", gap: "20px", marginBottom: "20px", opacity: 0.7, fontSize: "14px" }}>
                    <span>Prize: <b style={{ color: "var(--accent)" }}>{contest.prize}</b></span>
                    <span>Ends: <b style={{ color: "var(--primary)" }}>{contest.timeRemaining}</b></span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", opacity: 0.5 }}>{contest.participants} writers joined</span>
                    <button className="btn-premium">Join Challenge</button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Daily Prompts */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>Daily Writing Prompts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {dailyPrompts.map((prompt, i) => (
              <GlassCard key={i} delay={0.4 + (i * 0.1)} style={{ padding: "30px", textAlign: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--accent)", marginBottom: "10px", display: "block" }}>{prompt.day}</span>
                <p style={{ fontSize: "20px", fontStyle: "italic", marginBottom: "20px", opacity: 0.8 }}>{prompt.text}</p>
                <div style={{ fontSize: "12px", opacity: 0.5 }}>{prompt.date}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section style={{ marginBottom: "100px" }}>
          <GlassCard hover={false} style={{ padding: "60px 40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Hall of Fame</h2>
              <p style={{ marginBottom: "40px", opacity: 0.6 }}>Celebrating the winners of our recent challenges.</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
                {[1, 2, 3].map((_, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{
                      width: "80px", height: "80px", borderRadius: "50%", background: "var(--primary)",
                      margin: "0 auto 16px", border: "2px solid var(--accent)", boxShadow: "0 0 20px var(--accent)"
                    }} />
                    <h4 style={{ fontSize: "18px" }}>Winner #{i + 1}</h4>
                    <p style={{ fontSize: "12px", opacity: 0.5 }}>Challenge: Neon Echoes</p>
                  </div>
                ))}
              </div>
          </GlassCard>
        </section>

      </main>

      <Footer />
    </div>
  );
}
