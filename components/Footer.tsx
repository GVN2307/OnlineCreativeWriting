import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--glass-border)",
      padding: "80px 20px 40px",
      marginTop: "100px",
      background: "linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.4))"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px"
      }}>
        <div>
          <h3 className="gradient-text" style={{ fontSize: "24px", marginBottom: "20px" }}>Online Creative Writing</h3>
          <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Where your imagination becomes your legacy. Craft stories that matter.</p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: "20px" }}>Connect</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: 0.7 }}>
            <Link href="#">Community</Link>
            <Link href="#">Discord</Link>
            <Link href="#">Twitter / X</Link>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: "20px" }}>Explore</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: 0.7 }}>
            <Link href="/discovery">Library</Link>
            <Link href="/challenges">Challenges</Link>
            <Link href="/dashboard">Editor</Link>
          </div>
        </div>
        
        <div>
          <h4 style={{ marginBottom: "20px" }}>Support</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", opacity: 0.7 }}>
            <Link href="#">Help Center</Link>
            <Link href="#">Writing Tips</Link>
            <Link href="#">Feedback</Link>
          </div>
        </div>
      </div>
      
      <div style={{
        maxWidth: "1200px",
        margin: "60px auto 0",
        paddingTop: "20px",
        borderTop: "1px solid rgba(222, 229, 255, 0.05)",
        textAlign: "center",
        opacity: 0.5,
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} Online Creative Writing. All rights reserved.
      </div>
    </footer>
  );
}
