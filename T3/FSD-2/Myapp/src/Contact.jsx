import React, { useEffect, useRef, useState } from "react";

function Contact() {
  const canvasRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const contactMethods = [
    {
      icon: "✉️",
      label: "Email Us",
      value: "hello@digitalsuccess.studio",
      href: "mailto:hello@digitalsuccess.studio",
      color: "rgba(244, 63, 94, 0.2)",
      accentColor: "#f43f5e",
    },
    {
      icon: "📞",
      label: "Call Us",
      value: "+91 12345 67890",
      href: "tel:+911234567890",
      color: "rgba(56, 189, 248, 0.2)",
      accentColor: "#38bdf8",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          }}
        >
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              marginBottom: 12,
              background: "linear-gradient(135deg, #f43f5e, #8b5cf6, #38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 12px 0",
              lineHeight: 1.1,
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(248,250,252,0.78)",
              marginBottom: 32,
            }}
          >
            Built for teams who want a sharper online presence and measurable
            growth. Let's talk about your next project.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 32,
            }}
          >
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: 20,
                  background: "rgba(2, 6, 23, 0.35)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 18,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  transform:
                    hoveredItem === idx ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:
                    hoveredItem === idx
                      ? `0 12px 24px ${method.color}`
                      : "none",
                  borderColor:
                    hoveredItem === idx
                      ? method.accentColor
                      : "rgba(255,255,255,0.05)",
                }}
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: method.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    transition: "transform 0.3s ease",
                    transform: hoveredItem === idx ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {method.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: method.accentColor,
                      marginBottom: 4,
                    }}
                  >
                    {method.label}
                  </div>
                  <div
                    style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc" }}
                  >
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              height: 1,
              width: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              margin: "32px 0",
            }}
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted:", formState);
              setFormState({ name: "", email: "", message: "" });
            }}
            style={{
              display: "grid",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 14,
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                style={{
                  padding: "12px 16px",
                  background: "rgba(2, 6, 23, 0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  color: "#f8fafc",
                  fontSize: 15,
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.2)";
                  e.target.style.background = "rgba(2, 6, 23, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.08)";
                  e.target.style.background = "rgba(2, 6, 23, 0.35)";
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                style={{
                  padding: "12px 16px",
                  background: "rgba(2, 6, 23, 0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  color: "#f8fafc",
                  fontSize: 15,
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.2)";
                  e.target.style.background = "rgba(2, 6, 23, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.08)";
                  e.target.style.background = "rgba(2, 6, 23, 0.35)";
                }}
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              style={{
                padding: "12px 16px",
                background: "rgba(2, 6, 23, 0.35)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                color: "#f8fafc",
                fontSize: 15,
                fontFamily: "inherit",
                outline: "none",
                resize: "vertical",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.2)";
                e.target.style.background = "rgba(2, 6, 23, 0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.background = "rgba(2, 6, 23, 0.35)";
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px 22px",
                background: "linear-gradient(135deg, #f43f5e, #fb7185)",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                fontWeight: 800,
                cursor: "pointer",
                fontSize: 16,
                transition: "all 0.3s ease",
                boxShadow: "0 18px 40px rgba(244, 63, 94, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 24px 48px rgba(244, 63, 94, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(244, 63, 94, 0.3)";
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
