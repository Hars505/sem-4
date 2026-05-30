import React, { useEffect, useRef } from "react";

function About() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(15, 15, 35, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(100, 150, 255, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#020617",
        color: "#f8fafc",
        fontFamily: "Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 24px",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a4d 50%, #2d3561 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(2,6,23,0.88), rgba(15,23,42,0.65), rgba(59,130,246,0.2))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            padding: "40px 36px",
            backdropFilter: "blur(18px)",
            boxShadow: "0 28px 80px rgba(15, 23, 42, 0.45)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              marginBottom: 24,
              background: "linear-gradient(135deg, #38bdf8, #34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
            }}
          >
            About Our Studio
          </h1>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.7,
              color: "rgba(248,250,252,0.88)",
              marginBottom: 28,
            }}
          >
            We design bold web experiences, launch high-performing campaigns,
            and build the content systems that keep your growth moving long
            after the first click.
          </p>

          <div
            style={{
              height: 1,
              width: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              margin: "28px 0",
            }}
          />

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "rgba(248,250,252,0.78)",
              marginTop: 28,
            }}
          >
            From concept to conversion, we align your brand story, campaign
            assets, and funnel performance so your next launch feels effortless.
            Our calm strategy, sharp creative, and fast execution are why teams
            choose us.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
              marginTop: 32,
            }}
          >
            {[
              { label: "Projects Completed", value: "200+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Team Members", value: "15+" },
              { label: "Years Experience", value: "8" },
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(2, 6, 23, 0.35)",
                  borderRadius: 18,
                  padding: 14,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(2, 6, 23, 0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(2, 6, 23, 0.35)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                }}
              >
                <div
                  style={{ fontSize: 24, fontWeight: 800, color: "#38bdf8" }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(248,250,252,0.78)",
                    fontSize: 13,
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
