import React, { useEffect, useRef, useState } from "react";
function Services() {
  const canvasRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId;n
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

  const servicesList = [
    {
      title: "Brand systems",
      icon: "🎨",
      description:
        "Conversion-first identity design, landing pages, and launch kits built to scale.",
      gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    },
    {
      title: "Growth campaigns",
      icon: "🚀",
      description:
        "Paid media, email journeys, and social content that turns attention into action.",
      gradient: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
    },
    {
      title: "Retention funnels",
      icon: "🔄",
      description:
        "Customer journeys and automation flows that keep campaigns performing after launch.",
      gradient: "linear-gradient(135deg, #34d399, #10b981)",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#020617",
        color: "#f8fafc",
        fontFamily: "Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        padding: "40px 24px",
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
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              marginBottom: 24,
              background: "linear-gradient(135deg, #38bdf8, #8b5cf6, #f43f5e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(248,250,252,0.78)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            End-to-end digital solutions designed to elevate your brand and
            drive sustainable growth.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(15, 23, 42, 0.72)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 22,
                padding: 24,
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                transform:
                  hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === index
                    ? "0 20px 40px rgba(56, 189, 248, 0.15)"
                    : "none",
                borderColor:
                  hoveredCard === index
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: service.gradient,
                  opacity: hoveredCard === index ? 0.2 : 0.08,
                  filter: "blur(60px)",
                  transition: "opacity 0.4s ease",
                }}
              />

              <div
                style={{
                  fontSize: 48,
                  marginBottom: 16,
                  transform:
                    hoveredCard === index
                      ? "scale(1.2) rotate(-6deg)"
                      : "scale(1) rotate(0deg)",
                  transition: "transform 0.3s ease",
                  display: "inline-block",
                }}
              >
                {service.icon}
              </div>

              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  marginBottom: 12,
                  color: "#f8fafc",
                  transition: "color 0.3s ease",
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  color: "rgba(248,250,252,0.78)",
                  lineHeight: 1.7,
                  fontSize: 16,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
