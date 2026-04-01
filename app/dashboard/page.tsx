"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  const masterpieces = [
    {
      title: "The Silver Grimoire",
      progress: 75,
      lastEdited: "2 hours ago",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Neon Echoes",
      progress: 30,
      lastEdited: "1 day ago",
      cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Sonnets of the Sea",
      progress: 100,
      lastEdited: "3 days ago",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const feedback = [
    {
      user: "Aria Vance",
      initial: "A",
      text: "The pacing in Chapter 4 is excellent!",
      time: "10m ago"
    },
    {
      user: "Julian Thorne",
      initial: "J",
      text: "Love the character development here.",
      time: "2h ago"
    }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      
      <main style={{ maxWidth: "1200px", margin: "120px auto 0", padding: "0 20px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>Welcome Back, <span className="gradient-text">Writer</span></h1>
            <p style={{ opacity: 0.6 }}>Your imagination is waiting for the next chapter.</p>
          </div>
          <Link href="/editor">
            <button className="btn-premium">New Story</button>
          </Link>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "40px" }}>
          
          {/* Main Content: Your Masterpieces */}
          <section>
            <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Your Masterpieces</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px"
            }}>
              {masterpieces.map((story, i) => (
                <GlassCard key={i} delay={i * 0.1}>
                  <div style={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "8px",
                    background: `url(${story.cover}) center/cover`,
                    marginBottom: "16px"
                  }} />
                  <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{story.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <div style={{ flex: 1, height: "4px", background: "rgba(222, 229, 255, 0.1)", borderRadius: "2px" }}>
                      <div style={{ width: `${story.progress}%`, height: "100%", background: "var(--primary)", borderRadius: "2px" }} />
                    </div>
                    <span style={{ fontSize: "12px", opacity: 0.6 }}>{story.progress}%</span>
                  </div>
                  <p style={{ fontSize: "14px", opacity: 0.5 }}>Last edited: {story.lastEdited}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Sidebar: Widgets */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Streak Widget */}
            <GlassCard hover={false} delay={0.3} style={{ padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "32px" }}>🔥</span>
                <div>
                  <h3 style={{ fontSize: "20px" }}>14 Day Streak</h3>
                  <p style={{ fontSize: "14px", opacity: 0.6 }}>You're on fire!</p>
                </div>
              </div>
            </GlassCard>

            {/* Goals Widget */}
            <GlassCard hover={false} delay={0.4} style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>Writing Goals</h3>
              <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto" }}>
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(222, 229, 255, 0.05)" strokeWidth="8" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="var(--accent)" strokeWidth="8" strokeDasharray="314" strokeDashoffset="62" strokeLinecap="round" transform="rotate(-90 60 60)" />
                </svg>
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>80%</div>
                  <div style={{ fontSize: "10px", opacity: 0.6 }}>Words</div>
                </div>
              </div>
              <p style={{ textAlign: "center", fontSize: "14px", marginTop: "16px", opacity: 0.6 }}>12,500 / 15,000 words</p>
            </GlassCard>

            {/* Feedback Widget */}
            <GlassCard hover={false} delay={0.5} style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>Latest Feedback</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {feedback.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800
                    }}>
                      {f.initial}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "14px" }}>{f.user}</h4>
                      <p style={{ fontSize: "12px", opacity: 0.6, lineHeight: 1.4 }}>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
