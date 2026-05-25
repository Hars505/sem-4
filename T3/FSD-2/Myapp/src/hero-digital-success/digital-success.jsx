"use client";

import { useMediaQuery } from "../hooks/use-media-query.jsx";
import MotionDrawer from "../components/ui/motion-drawer.jsx";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const metrics = [
  { label: "Campaigns launched", value: "120+" },
  { label: "Average lift", value: "38%" },
  { label: "Response time", value: "24h" },
  { label: "Client retention", value: "96%" },
];

const serviceCards = [
  {
    title: "Brand systems",
    description:
      "Conversion-first identity design, landing pages, and launch kits built to scale.",
  },
  {
    title: "Growth campaigns",
    description:
      "Paid media, email journeys, and social content that turns attention into action.",
  },
  {
    title: "Retention funnels",
    description:
      "Customer journeys and automation flows that keep campaigns performing after launch.",
  },
];

export const HeroDigitalSuccess = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      }}
    >
      <canvas
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0f0f23 0%, #1a1a4d 50%, #2d3561 100%)",
        }}
        ref={canvasRef}
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
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #f43f5e, #38bdf8)",
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              DS
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>
                Digital Success
              </div>
              <div style={{ fontSize: 12, color: "rgba(248,250,252,0.8)" }}>
                brand, growth, and creative systems
              </div>
            </div>
          </div>

          {!isMobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
              {navItems.map((item) => (
                <Link
                  to={item.href}
                  key={item.label}
                  style={{
                    color: "rgba(248,250,252,0.88)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {!isMobile && (
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#020617",
                  background: "#f8fafc",
                  padding: "12px 18px",
                  borderRadius: 999,
                  fontWeight: 800,
                }}
              >
                Book a call
              </Link>
            )}

            {isMobile && (
              <MotionDrawer
                direction="left"
                width={300}
                backgroundColor="#020617"
                contentClassName="bg-slate-950 text-white"
                clsBtnClassName="bg-white text-slate-950"
                btnClassName="bg-white text-slate-950 border border-white/80"
                buttonOpeningVariants="stay"
              >
                <div style={{ padding: "20px 18px", display: "grid", gap: 18 }}>
                  <div style={{ fontWeight: 800, fontSize: 20 }}>Navigate</div>
                  {navItems.map((item) => (
                    <Link
                      to={item.href}
                      key={item.label}
                      style={{
                        textDecoration: "none",
                        color: "#f8fafc",
                        fontSize: 16,
                        fontWeight: 700,
                        padding: "10px 0",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      background: "linear-gradient(135deg, #f43f5e, #38bdf8)",
                      color: "#fff",
                      borderRadius: 999,
                      padding: "12px 16px",
                      textAlign: "center",
                      fontWeight: 800,
                    }}
                  >
                    Book a call
                  </Link>
                </div>
              </MotionDrawer>
            )}
          </div>
        </header>

        <main
          style={{
            flex: 1,
            display: "grid",
            alignItems: "center",
            padding: "20px 24px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.3fr 0.9fr",
              gap: 28,
              alignItems: "end",
            }}
          >
            <div
              style={{
                padding: isMobile ? "24px 0 12px" : "32px 0 24px",
                maxWidth: 860,
              }}
            >
              <p
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 18,
                  padding: "6px 12px",
                  background: "rgba(15, 23, 42, 0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  color: "#cbd5e1",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#34d399",
                    display: "inline-block",
                  }}
                />
                New campaigns live this week
              </p>

              <h1
                style={{
                  fontSize: isMobile ? 42 : 64,
                  lineHeight: 0.98,
                  margin: 0,
                  letterSpacing: "-0.06em",
                }}
              >
                Turn attention into
                <span
                  style={{
                    display: "block",
                    background:
                      "linear-gradient(135deg, #f8fafc, #f43f5e 55%, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginTop: 10,
                  }}
                >
                  digital success.
                </span>
              </h1>

              <p
                style={{
                  fontSize: isMobile ? 18 : 20,
                  lineHeight: 1.7,
                  color: "rgba(248,250,252,0.88)",
                  maxWidth: 700,
                  margin: "22px 0 28px",
                }}
              >
                We design bold web experiences, launch high-performing
                campaigns, and build the content systems that keep your growth
                moving long after the first click.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    background: "linear-gradient(135deg, #f43f5e, #fb7185)",
                    color: "#fff",
                    padding: "14px 22px",
                    borderRadius: 999,
                    fontWeight: 800,
                    boxShadow: "0 18px 40px rgba(244, 63, 94, 0.3)",
                  }}
                >
                  Start your campaign
                </Link>
                <Link
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: "#f8fafc",
                    padding: "14px 22px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.18)",
                    background: "rgba(15,23,42,0.4)",
                    fontWeight: 800,
                  }}
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div
              id="about"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 28,
                padding: "24px",
                backdropFilter: "blur(18px)",
                boxShadow: "0 28px 80px rgba(15, 23, 42, 0.45)",
              }}
            >
              <p style={{ color: "#93c5fd", fontWeight: 800, marginBottom: 8 }}>
                Why teams choose us
              </p>
              <h2 style={{ margin: "0 0 12px", fontSize: 28 }}>
                Calm strategy. Sharp creative. Fast execution.
              </h2>
              <p style={{ color: "rgba(248,250,252,0.86)", lineHeight: 1.8 }}>
                From concept to conversion, we align your brand story, campaign
                assets, and funnel performance so your next launch feels
                effortless.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 14,
                  marginTop: 20,
                }}
              >
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "14px",
                      borderRadius: 18,
                      background: "rgba(2, 6, 23, 0.35)",
                    }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 800 }}>
                      {item.value}
                    </div>
                    <div
                      style={{ color: "rgba(248,250,252,0.78)", fontSize: 13 }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <section
          id="services"
          style={{
            padding: "0 24px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(3, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {serviceCards.map((card) => (
              <article
                key={card.title}
                style={{
                  background: "rgba(15, 23, 42, 0.72)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 22,
                  padding: 20,
                  backdropFilter: "blur(12px)",
                }}
              >
                <p
                  style={{ color: "#93c5fd", fontWeight: 800, marginBottom: 8 }}
                >
                  {card.title}
                </p>
                <p
                  style={{
                    color: "rgba(248,250,252,0.88)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer
          id="contact"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            padding: "0 24px 24px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ color: "rgba(248,250,252,0.82)", fontSize: 14 }}>
            Built for teams who want a sharper online presence and measurable
            growth.
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="mailto:hello@digitalsuccess.studio"
              style={{
                textDecoration: "none",
                color: "#f8fafc",
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(15, 23, 42, 0.65)",
              }}
            >
              hello@digitalsuccess.studio
            </a>
            <a
              href="tel:+911234567890"
              style={{
                textDecoration: "none",
                color: "#f8fafc",
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(15, 23, 42, 0.65)",
              }}
            >
              +91 12345 67890
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
