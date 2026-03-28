import { useEffect, useMemo, useState } from "react";
import logo from "./assets/logo.png";
import aboutCleaning from "./assets/about-cleaning.jpeg";

const COLORS = {
  primary: "#2FA7A0",
  primaryDark: "#1d8a83",
  primaryLight: "#eefcfb",
  primarySoft: "#dff7f4",
  dark: "#0f172a",
  text: "#475569",
  border: "#dcefee",
  white: "#ffffff",
  offWhite: "#f8fcfc",
  star: "#f59e0b",
};

const FONT = "'Plus Jakarta Sans', Arial, sans-serif";

const eyebrow = {
  color: COLORS.primary,
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontSize: "12px",
  fontFamily: FONT,
};

const mainTitle = (size = "clamp(30px,4vw,52px)") => ({
  fontSize: size,
  marginTop: "14px",
  color: COLORS.dark,
  lineHeight: 1.15,
  fontFamily: FONT,
  fontWeight: 800,
});

const card = {
  background: COLORS.white,
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 8px 32px rgba(15,23,42,0.07)",
  border: "1px solid #eff5f4",
  fontFamily: FONT,
};

const input = {
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  background: COLORS.white,
  color: COLORS.dark,
  outline: "none",
  fontFamily: FONT,
  width: "100%",
  boxSizing: "border-box",
};

const btnPrimary = {
  background: COLORS.primary,
  color: COLORS.white,
  padding: "14px 24px",
  borderRadius: "14px",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "15px",
  fontFamily: FONT,
};

const btnSecondary = {
  background: COLORS.white,
  color: COLORS.primary,
  padding: "14px 24px",
  borderRadius: "14px",
  border: `1.5px solid ${COLORS.primary}`,
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "15px",
  fontFamily: FONT,
};

function Stars({ n = 5 }) {
  return (
    <span style={{ color: COLORS.star, fontSize: "18px", letterSpacing: "1px" }}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 980 : false
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 980;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = useMemo(
    () => [
      {
        icon: "🏠",
        title: "Residential Cleaning",
        description:
          "Routine or one-time cleaning for houses, apartments, and condos with detailed care.",
      },
      {
        icon: "✨",
        title: "Deep Cleaning",
        description:
          "A thorough cleaning of kitchens, bathrooms, buildup, dust, and neglected spaces.",
      },
      {
        icon: "📦",
        title: "Move-In / Move-Out",
        description:
          "Perfect for preparing a home before moving in or leaving it spotless before move-out.",
      },
      {
        icon: "🏢",
        title: "Office Cleaning",
        description:
          "Professional cleaning for offices and workspaces to keep everything fresh and presentation-ready.",
      },
    ],
    []
  );

  const highlights = useMemo(
    () => [
      { value: "Free", label: "Estimates" },
      { value: "Local", label: "Port St. Lucie service" },
      { value: "Bilingual", label: "English & Spanish" },
      { value: "Flexible", label: "Scheduling options" },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        number: "01",
        icon: "💬",
        title: "Request a Quote",
        text: "Send us a quick message with your cleaning needs and location.",
      },
      {
        number: "02",
        icon: "📅",
        title: "Choose a Time",
        text: "We schedule a day and time that works best for your home or business.",
      },
      {
        number: "03",
        icon: "🌟",
        title: "Enjoy the Results",
        text: "We leave your space fresh, polished, and beautifully cared for.",
      },
    ],
    []
  );

  const areas = useMemo(
    () => [
      { name: "Port St. Lucie", icon: "📍" },
      { name: "Fort Pierce", icon: "📍" },
      { name: "Stuart", icon: "📍" },
      { name: "Palm City", icon: "📍" },
    ],
    []
  );

  const reviews = useMemo(
    () => [
      {
        text: "Amazing service. My home looked spotless, fresh, and beautifully cared for.",
        name: "Maria R.",
        stars: 5,
        initials: "MR",
      },
      {
        text: "Professional, punctual, and very detailed. I would absolutely book again.",
        name: "Jessica M.",
        stars: 5,
        initials: "JM",
      },
      {
        text: "They made the whole place look move-in ready. Excellent work and very kind.",
        name: "Daniel T.",
        stars: 5,
        initials: "DT",
      },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      {
        icon: "✅",
        label: "Reliable and professional service",
        detail: "Dependable service, clear communication, and consistent results you can trust.",
      },
      {
        icon: "🔍",
        label: "Attention to detail",
        detail: "We focus on the finishing touches that make a space feel truly fresh and polished.",
      },
      {
        icon: "🗓️",
        label: "Flexible scheduling",
        detail: "Convenient appointments for homes, apartments, and move-in or move-out needs.",
      },
      {
        icon: "💬",
        label: "Personalized quotes",
        detail: "Every property is different, so we provide quotes based on the size and condition of the space.",
      },
      {
        icon: "🌟",
        label: "Satisfaction-focused service",
        detail: "Our goal is to leave every space clean, cared for, and ready to enjoy.",
      },
    ],
    []
  );

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Areas", href: "#areas" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const serviceTypes = [
    "Residential Cleaning",
    "Deep Cleaning",
    "Move-In / Move-Out",
    "Office Cleaning",
    "Other / Not sure",
  ];

  const openSMS = (text) => {
    const phone = "7542844398";
    const isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const smsLink = isApple
      ? `sms:${phone}&body=${encodeURIComponent(text)}`
      : `sms:${phone}?body=${encodeURIComponent(text)}`;

    window.location.href = smsLink;
  };

  const openQuote = () => {
    openSMS(
      "Hi! I would like a quote for cleaning services from Sol and Shine PSL LLC."
    );
  };

  const handleInput = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const openFormRequest = () => {
    const msg = `Hi! I'd like a personalized cleaning quote.

Name: ${formData.name || "-"}
Phone: ${formData.phone || "-"}
Email: ${formData.email || "-"}
Service type: ${formData.serviceType || "-"}

Details:
${formData.message || "-"}`;

    openSMS(msg);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div style={{ fontFamily: FONT, background: COLORS.white, color: COLORS.dark }}>
      <div
        style={{
          background: COLORS.dark,
          color: COLORS.white,
          padding: "10px 16px",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="sms:7542844398"
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              📱 754-284-4398
            </a>
            <a
              href="mailto:solshinecleaningpsl@outlook.com"
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              ✉️ solshinecleaningpsl@outlook.com
            </a>
          </div>
          <span style={{ color: "#94a3b8" }}>🌐 English & Spanish</span>
        </div>
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(255,255,255,0.97)",
          borderBottom: `1px solid ${COLORS.border}`,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <a href="#home" style={{ textDecoration: "none" }}>
            <img
              src={logo}
              alt="Sol & Shine logo"
              style={{
                height: isMobile ? "72px" : "80px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          {!isMobile && (
            <>
              <nav
                style={{
                  display: "flex",
                  gap: "22px",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{ color: COLORS.text, textDecoration: "none" }}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <button onClick={openQuote} style={btnPrimary}>
                Text for a Quote
              </button>
            </>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                border: "none",
                background: "transparent",
                padding: "8px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "26px",
                    height: "2.5px",
                    background: COLORS.dark,
                    borderRadius: "999px",
                    display: "block",
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <>
          <div
            onClick={closeMenu}
            style={{
              position: "fixed",
              inset: 0,
              background: menuOpen ? "rgba(15,23,42,0.45)" : "transparent",
              pointerEvents: menuOpen ? "auto" : "none",
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.25s",
              zIndex: 70,
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "82%",
              maxWidth: "340px",
              height: "100vh",
              background: COLORS.white,
              boxShadow: "-10px 0 30px rgba(15,23,42,0.12)",
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.28s",
              zIndex: 80,
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src={logo}
                alt="Sol & Shine logo"
                style={{ height: "60px", width: "auto", objectFit: "contain" }}
              />
              <button
                onClick={closeMenu}
                style={{
                  border: "none",
                  background: "#f1f5f9",
                  width: "38px",
                  height: "38px",
                  borderRadius: "999px",
                  fontSize: "22px",
                  cursor: "pointer",
                  color: COLORS.dark,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: "grid", gap: "8px" }}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={closeMenu}
                  style={{
                    textDecoration: "none",
                    color: COLORS.dark,
                    fontWeight: 600,
                    fontSize: "17px",
                    padding: "13px 12px",
                    borderRadius: "12px",
                    background: "#f8fafc",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                closeMenu();
                openQuote();
              }}
              style={{ marginTop: "20px", ...btnPrimary }}
            >
              Text for a Quote
            </button>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "24px",
                color: "#64748b",
                fontSize: "13px",
                display: "grid",
                gap: "8px",
              }}
            >
              <span>📱 754-284-4398</span>
              <span>✉️ solshinecleaningpsl@outlook.com</span>
              <span>🌐 English & Spanish</span>
            </div>
          </div>
        </>
      )}

      <section
        id="home"
        style={{
          background: "linear-gradient(135deg, #e8faf9 0%, #f0fffe 50%, #ffffff 100%)",
          padding: "80px 16px 72px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={eyebrow}>Professional Cleaning Services · Port St. Lucie</p>
            <h1
              style={{
                ...mainTitle("clamp(34px,5vw,58px)"),
                margin: "16px 0 0 0",
                maxWidth: "640px",
              }}
            >
              A Spotless Home, <span style={{ color: COLORS.primary }}>Every Time.</span>
            </h1>
            <p
              style={{
                marginTop: "20px",
                fontSize: "17px",
                color: COLORS.text,
                lineHeight: 1.8,
                maxWidth: "540px",
              }}
            >
              Professional residential and commercial cleaning in Port St. Lucie —
              reliable, detailed, and stress-free. In English and Spanish.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              <button
                onClick={openQuote}
                style={{ ...btnPrimary, padding: "15px 28px", fontSize: "16px" }}
              >
                Request a Free Quote
              </button>
              <button
                onClick={openQuote}
                style={{ ...btnSecondary, padding: "15px 28px", fontSize: "16px" }}
              >
                📱 Text Us Now
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              {[
                "✅ Licensed & insured",
                "🏆 Trusted locals",
                "🗓️ Flexible scheduling",
                "🌐 Bilingual support",
              ].map((b) => (
                <span
                  key={b}
                  style={{
                    background: COLORS.white,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: "30px",
                    padding: "7px 14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#334155",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                background: COLORS.white,
                borderRadius: "28px",
                padding: "24px",
                boxShadow: "0 24px 60px rgba(47,167,160,0.12)",
                border: "1px solid #e0f4f2",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #2FA7A0, #27c4bc)",
                  borderRadius: "20px",
                  padding: "32px",
                  color: COLORS.white,
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    opacity: 0.85,
                  }}
                >
                  Sol and Shine PSL LLC
                </p>
                <h2
                  style={{
                    fontSize: "clamp(26px,3vw,38px)",
                    margin: "12px 0 0",
                    lineHeight: 1.2,
                    fontWeight: 800,
                  }}
                >
                  Spotless spaces,
                  <br />
                  elevated care.
                </h2>
                <p
                  style={{
                    marginTop: "14px",
                    lineHeight: 1.75,
                    fontSize: "16px",
                    opacity: 0.9,
                  }}
                >
                  We deliver clean, fresh, welcoming spaces with premium attention
                  to detail and service you can trust.
                </p>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {highlights.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: COLORS.primaryLight,
                      borderRadius: "16px",
                      padding: "18px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: COLORS.primaryDark,
                        margin: 0,
                      }}
                    >
                      {s.value}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: COLORS.text,
                        margin: "4px 0 0",
                      }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 16px" }}
      >
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <p style={eyebrow}>Our Services</p>
          <h2 style={mainTitle()}>Cleaning services designed around your needs.</h2>
          <p
            style={{
              marginTop: "16px",
              color: COLORS.text,
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            Every property is different, so we provide personalized quotes based on
            the size and condition of the space.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "22px",
          }}
        >
          {services.map((s) => (
            <div key={s.title} style={card}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "18px",
                  background: COLORS.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "18px",
                }}
              >
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  margin: 0,
                  color: COLORS.dark,
                  fontWeight: 700,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  color: COLORS.text,
                  lineHeight: 1.8,
                  marginTop: "10px",
                  fontSize: "15px",
                }}
              >
                {s.description}
              </p>
              <button
                onClick={openQuote}
                style={{
                  marginTop: "20px",
                  background: "transparent",
                  border: `1.5px solid ${COLORS.primary}`,
                  color: COLORS.primary,
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "14px",
                  fontFamily: FONT,
                }}
              >
                Get a Quote →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="process" style={{ background: COLORS.offWhite, padding: "80px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <p style={eyebrow}>How It Works</p>
            <h2 style={mainTitle()}>Book your cleaning in three easy steps.</h2>
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "22px",
            }}
          >
            {process.map((item) => (
              <div
                key={item.number}
                style={{
                  ...card,
                  boxShadow: "none",
                  border: "1px solid #e0f1f0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "999px",
                    background: COLORS.primary,
                    color: COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                    margin: "0 auto",
                  }}
                >
                  {item.number}
                </div>
                <div style={{ fontSize: "28px", margin: "14px 0 0" }}>{item.icon}</div>
                <h3
                  style={{
                    marginTop: "12px",
                    fontSize: "20px",
                    color: COLORS.dark,
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: "10px",
                    color: COLORS.text,
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={openQuote}
              style={{ ...btnPrimary, padding: "16px 36px", fontSize: "16px" }}
            >
              Book Now — It's Free to Ask
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 16px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <div style={{ ...card, border: "1px solid #eef4f4" }}>
            <p style={eyebrow}>About Us / Sobre Nosotros</p>
            <h2 style={mainTitle("clamp(28px,3.5vw,44px)")}>
              Premium cleaning with a personal touch.
            </h2>
            <p
              style={{
                marginTop: "18px",
                color: COLORS.text,
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              We provide elegant, dependable cleaning services with a focus on
              quality, trust, and attention to detail. Our goal is simple: to
              leave every space fresh, polished, and cared for.
            </p>
            <p
              style={{
                marginTop: "14px",
                color: COLORS.text,
                fontSize: "17px",
                lineHeight: 1.8,
                borderLeft: `3px solid ${COLORS.primary}`,
                paddingLeft: "16px",
              }}
            >
              Brindamos un servicio de limpieza confiable, detallado y profesional,
              cuidando cada espacio como si fuera nuestro.
            </p>
          </div>

          <div
            style={{
              ...card,
              padding: "0",
              overflow: "hidden",
              minHeight: "100%",
            }}
          >
            <img
              src={aboutCleaning}
              alt="Professional cleaning service"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "420px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "28px" }}>
          <p style={{ ...eyebrow, marginBottom: "20px" }}>Why Choose Us?</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "14px",
            }}
          >
            {reasons.map((r) => (
              <div
                key={r.label}
                style={{
                  background: COLORS.offWhite,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "16px",
                  padding: "16px 20px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: COLORS.dark,
                      margin: 0,
                      fontSize: "15px",
                    }}
                  >
                    {r.label}
                  </p>
                  <p
                    style={{
                      color: COLORS.text,
                      margin: "4px 0 0",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    {r.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" style={{ background: COLORS.offWhite, padding: "80px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <p style={eyebrow}>Service Areas</p>
            <h2 style={mainTitle()}>Proudly serving the Treasure Coast.</h2>
            <p style={{ color: COLORS.text, marginTop: "14px", fontSize: "16px" }}>
              Based in Port St. Lucie, FL — serving surrounding cities with the
              same quality and care.
            </p>
          </div>

          <div
            style={{
              marginTop: "36px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: "16px",
            }}
          >
            {areas.map((a) => (
              <div
                key={a.name}
                style={{
                  background: COLORS.white,
                  border: `1.5px solid ${COLORS.border}`,
                  borderRadius: "20px",
                  padding: "24px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: COLORS.dark,
                  fontSize: "17px",
                }}
              >
                <span style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}>
                  {a.icon}
                </span>
                {a.name}
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "12px",
                    color: COLORS.text,
                    fontWeight: 400,
                  }}
                >
                  Serving this area
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 16px" }}
      >
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <p style={eyebrow}>Client Reviews / Reseñas</p>
          <h2 style={mainTitle()}>Trusted by clients who love a spotless finish.</h2>
          <p style={{ marginTop: "14px", color: COLORS.text, fontSize: "16px" }}>
            Real reviews from real clients in Port St. Lucie and the Treasure Coast.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "22px",
          }}
        >
          {reviews.map((r) => (
            <div key={r.name} style={card}>
              <Stars n={r.stars} />
              <p
                style={{
                  color: COLORS.text,
                  lineHeight: 1.85,
                  fontSize: "16px",
                  marginTop: "14px",
                  fontStyle: "italic",
                }}
              >
                "{r.text}"
              </p>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderTop: `1px solid #f1f5f4`,
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "999px",
                    background: COLORS.primarySoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: COLORS.primaryDark,
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: COLORS.dark,
                      margin: 0,
                      fontSize: "15px",
                    }}
                  >
                    {r.name}
                  </p>
                  <p
                    style={{
                      color: COLORS.text,
                      margin: "2px 0 0",
                      fontSize: "12px",
                    }}
                  >
                    Verified client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "linear-gradient(135deg, #eefcfb, #f5ffff)",
          padding: "80px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              ...card,
              boxShadow: "0 14px 40px rgba(47,167,160,0.10)",
            }}
          >
            <p style={eyebrow}>Contact / Contacto</p>
            <h2 style={mainTitle("clamp(28px,3.5vw,42px)")}>
              Get your home professionally cleaned today.
            </h2>
            <p
              style={{
                marginTop: "16px",
                color: COLORS.text,
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              Ready for a clean, elegant, worry-free space? Contact us for
              personalized pricing.
            </p>

            <div style={{ marginTop: "24px", display: "grid", gap: "14px", fontSize: "16px" }}>
              <a
                href="sms:7542844398"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: COLORS.dark,
                }}
              >
                <span style={{ fontSize: "22px" }}>📱</span>
                <div>
                  <strong>Text Us:</strong> 754-284-4398
                </div>
              </a>
              <a
                href="mailto:solshinecleaningpsl@outlook.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: COLORS.dark,
                }}
              >
                <span style={{ fontSize: "22px" }}>✉️</span>
                <div>
                  <strong>Email:</strong> solshinecleaningpsl@outlook.com
                </div>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "22px" }}>📍</span>
                <div>
                  <strong>Location:</strong> Port St. Lucie, FL
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "22px" }}>👤</span>
                <div>
                  <strong>Owner:</strong> Andrea Del Sol
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "22px" }}>🌐</span>
                <div>
                  <strong>Languages:</strong> English & Spanish
                </div>
              </div>
            </div>

            <button
              onClick={openQuote}
              style={{ ...btnPrimary, marginTop: "28px", width: "100%", fontSize: "16px" }}
            >
              📱 Text Us Now
            </button>
          </div>

          <div
            style={{
              ...card,
              boxShadow: "0 14px 40px rgba(47,167,160,0.10)",
              border: "1px solid #eef7f7",
            }}
          >
            <p style={eyebrow}>Quick Form / Formulario</p>
            <div style={{ marginTop: "22px", display: "grid", gap: "14px" }}>
              <input
                value={formData.name}
                onChange={handleInput("name")}
                placeholder="Name / Nombre"
                style={input}
              />
              <input
                value={formData.phone}
                onChange={handleInput("phone")}
                placeholder="Phone / Teléfono"
                type="tel"
                style={input}
              />
              <input
                value={formData.email}
                onChange={handleInput("email")}
                placeholder="Email / Correo"
                type="email"
                style={input}
              />

              <select
                value={formData.serviceType}
                onChange={handleInput("serviceType")}
                style={{
                  ...input,
                  color: formData.serviceType ? COLORS.dark : "#94a3b8",
                  appearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  paddingRight: "36px",
                }}
              >
                <option value="" disabled>
                  Type of service / Tipo de servicio
                </option>
                {serviceTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <textarea
                value={formData.message}
                onChange={handleInput("message")}
                placeholder="Additional details / Detalles adicionales"
                style={{ ...input, minHeight: "120px", resize: "vertical" }}
              />
              <button
                onClick={openFormRequest}
                style={{
                  ...btnPrimary,
                  background: COLORS.dark,
                  fontSize: "15px",
                  padding: "15px",
                }}
              >
                Send Request / Enviar Solicitud →
              </button>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={openQuote}
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          background: COLORS.primary,
          color: COLORS.white,
          padding: isMobile ? "13px 18px" : "14px 22px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 8px 28px rgba(47,167,160,0.30)",
          zIndex: menuOpen ? 30 : 40,
          border: "none",
          cursor: "pointer",
          opacity: menuOpen ? 0 : 1,
          pointerEvents: menuOpen ? "none" : "auto",
          transition: "opacity 0.2s",
          fontFamily: FONT,
          fontSize: "14px",
        }}
      >
        Text for a Quote
      </button>

      <footer style={{ background: COLORS.dark, color: COLORS.white, padding: "48px 16px 28px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "32px",
          }}
        >
          <div>
            <img
              src={logo}
              alt="Sol & Shine footer logo"
              style={{
                height: "72px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                marginBottom: "14px",
                background: COLORS.white,
                borderRadius: "12px",
                padding: "4px",
              }}
            />
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "14px" }}>
              Premium bilingual cleaning service for homes, offices, and move-out
              cleanings in Port St. Lucie and nearby areas.
            </p>
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: "15px", fontWeight: 700 }}>
              Quick Links
            </h3>
            <div style={{ display: "grid", gap: "10px", marginTop: "14px" }}>
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: "15px", fontWeight: 700 }}>
              Contact
            </h3>
            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "14px",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              <span>Andrea Del Sol</span>
              <a
                href="sms:7542844398"
                style={{ color: "#94a3b8", textDecoration: "none" }}
              >
                📱 754-284-4398
              </a>
              <a
                href="mailto:solshinecleaningpsl@outlook.com"
                style={{ color: "#94a3b8", textDecoration: "none" }}
              >
                ✉️ solshinecleaningpsl@outlook.com
              </a>
              <span>📍 Port St. Lucie, FL</span>
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: "15px", fontWeight: 700 }}>
              Services
            </h3>
            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "14px",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              {services.map((s) => (
                <span key={s.title}>
                  {s.icon} {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "28px auto 0",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            color: "#64748b",
            fontSize: "13px",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0 }}>© 2026 Sol and Shine PSL LLC. All rights reserved.</p>
          <p style={{ margin: 0 }}>Professional cleaning with premium care.</p>
        </div>
      </footer>
    </div>
  );
}