"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  const features = [
    {
      title: "Immersive Editor",
      description: "A distraction-free workspace designed to keep you in the flow. Zen Mode, character tracking, and automatic drafting.",
      icon: "✍️"
    },
    {
      title: "Global Challenges",
      description: "Join thematic writing contests, win prizes, and earn featured placement in our hall of fame.",
      icon: "🏆"
    },
    {
      title: "AI Story Assistant",
      description: "Intelligent tools for plotting, world-building, and high-fidelity brainstorming without losing your voice.",
      icon: "🧠"
    },
    {
      title: "Community Critiques",
      description: "Get high-quality feedback from a curated community of professional and aspiring writers.",
      icon: "💬"
    }
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{
        padding: "180px 20px 100px",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: "clamp(48px, 8vw, 84px)", 
            lineHeight: 1.1,
            marginBottom: "24px"
          }}>
            Unleash Your <span className="gradient-text">Imagination</span>
          </h1>
          <p style={{ 
            fontSize: "20px", 
            maxWidth: "700px", 
            margin: "0 auto 40px", 
            opacity: 0.8,
            lineHeight: 1.6
          }}>
            The premier destination for writers to craft stories, receive expert feedback, and join global challenges. Discover your legacy in every word.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link href="/dashboard">
              <button className="btn-premium" style={{ fontSize: "18px", padding: "16px 40px" }}>Start Your Story</button>
            </Link>
            <Link href="/challenges">
              <button className="btn-outline" style={{ fontSize: "18px", padding: "16px 40px" }}>Explore Challenges</button>
            </Link>
          </div>
        </motion.div>
        
        {/* Background Visual Element */}
        <div style={{
          position: "absolute",
          top: "100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.2,
          zIndex: -1,
          animation: "pulse 10s infinite"
        }} />
      </section>

      {/* Features Section */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "42px", textAlign: "center", marginBottom: "60px" }}>
          Crafted for <span className="gradient-text">Modern Storytellers</span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}>
          {features.map((feature, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div style={{ fontSize: "40px" }}>{feature.icon}</div>
              <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{feature.title}</h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <GlassCard className="glass-panel" hover={false} style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden"
        }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Ready to write your next masterpiece?</h2>
          <p style={{ marginBottom: "40px", opacity: 0.8, fontSize: "18px" }}>Join 50,000+ writers who are already building their worlds with us.</p>
          <Link href="/dashboard">
            <button className="btn-premium" style={{ padding: "16px 48px", fontSize: "18px" }}>Try for Free</button>
          </Link>
        </GlassCard>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
