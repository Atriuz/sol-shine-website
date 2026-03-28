import { useEffect, useMemo, useState } from "react";
import logo from "./assets/logo.png";

const COLORS = {
  primary: "#2FA7A0",
  primaryLight: "#eefcfb",
  primarySoft: "#dff7f4",
  dark: "#0f172a",
  text: "#475569",
  border: "#dcefee",
  white: "#ffffff",
  offWhite: "#f8fcfc",
};

const sectionTitleStyle = {
  color: COLORS.primary,
  fontWeight: 700,
  letterSpacing: "3px",
  textTransform: "uppercase",
  fontSize: "13px",
};

const mainTitleStyle = {
  fontSize: "clamp(30px, 4vw, 54px)",
  marginTop: "16px",
  color: COLORS.dark,
  lineHeight: 1.15,
};

const cardStyle = {
  background: COLORS.white,
  borderRadius: "28px",
  padding: "28px",
  boxShadow: "0 14px 35px rgba(15,23,42,0.06)",
  border: "1px solid #eff5f4",
};

const inputStyle = {
  padding: "14px 16px",
  borderRadius: "16px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  background: COLORS.white,
  color: COLORS.dark,
  outline: "none",
};

const buttonPrimary = {
  background: COLORS.primary,
  color: COLORS.white,
  padding: "14px 22px",
  borderRadius: "16px",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const buttonSecondary = {
  background: COLORS.white,
  color: COLORS.primary,
  padding: "14px 22px",
  borderRadius: "16px",
  border: "1px solid #b8e2de",
  fontWeight: 700,
  cursor: "pointer",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 980 : false
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
        title: "Residential Cleaning",
        description:
          "Routine or one-time cleaning for houses, apartments, and condos with detailed care.",
      },
      {
        title: "Deep Cleaning",
        description:
          "A more detailed cleaning service for kitchens, bathrooms, buildup, dust, and neglected spaces.",
      },
      {
        title: "Move-In / Move-Out",
        description:
          "Perfect for preparing a home before moving in or leaving it spotless before move-out.",
      },
      {
        title: "Office Cleaning",
        description:
          "Professional cleaning for offices and workspaces to keep everything fresh and presentation-ready.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        number: "01",
        title: "Request a Quote",
        text: "Send us a quick message with your cleaning needs and location.",
      },
      {
        number: "02",
        title: "Choose a Time",
        text: "We schedule a day and time that works best for your home or business.",
      },
      {
        number: "03",
        title: "Enjoy the Results",
        text: "We leave your space fresh, polished, and beautifully cared for.",
      },
    ],
    []
  );

  const areas = useMemo(
    () => ["Port St. Lucie", "Fort Pierce", "Stuart", "Palm City"],
    []
  );

  const reviews = useMemo(
    () => [
      {
        text: "Amazing service. My home looked spotless, fresh, and beautifully cared for.",
        name: "Maria R.",
      },
      {
        text: "Professional, punctual, and very detailed. I would absolutely book again.",
        name: "Jessica M.",
      },
      {
        text: "They made the whole place look move-in ready. Excellent work and very kind people.",
        name: "Daniel T.",
      },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      "Reliable and professional service",
      "Attention to detail",
      "Flexible scheduling",
      "Affordable prices",
      "100% satisfaction guaranteed",
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

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const openFormRequest = () => {
    const fullMessage = `Hi! I would like more information and a personalized cleaning quote.

Name: ${formData.name || "-"}
Phone: ${formData.phone || "-"}
Email: ${formData.email || "-"}

Details:
${formData.message || "-"}`;

    openSMS(fullMessage);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: COLORS.white,
        color: COLORS.dark,
      }}
    >
      <div
        style={{
          background: COLORS.dark,
          color: COLORS.white,
          padding: "10px 16px",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <span>Text Us: 754-284-4398</span>
            <span>solshinecleaningpsl@outlook.com</span>
          </div>
          <div>English & Spanish</div>
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
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <a href="#home" style={{ textDecoration: "none", display: "block" }}>
            <img
              src={logo}
              alt="Sol & Shine logo"
              style={{
                height: isMobile ? "84px" : "96px",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </a>

          {!isMobile && (
            <>
              <nav
                style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      color: COLORS.dark,
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button onClick={openQuote} style={buttonPrimary}>
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
              <span
                style={{
                  width: "28px",
                  height: "3px",
                  background: COLORS.dark,
                  borderRadius: "999px",
                }}
              />
              <span
                style={{
                  width: "28px",
                  height: "3px",
                  background: COLORS.dark,
                  borderRadius: "999px",
                }}
              />
              <span
                style={{
                  width: "28px",
                  height: "3px",
                  background: COLORS.dark,
                  borderRadius: "999px",
                }}
              />
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
              transition: "opacity 0.25s ease",
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
              transition: "transform 0.28s ease",
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
                style={{
                  height: "66px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />

              <button
                onClick={closeMenu}
                aria-label="Close menu"
                style={{
                  border: "none",
                  background: "#f1f5f9",
                  width: "40px",
                  height: "40px",
                  borderRadius: "999px",
                  fontSize: "24px",
                  lineHeight: 1,
                  cursor: "pointer",
                  color: COLORS.dark,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: "grid", gap: "10px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  style={{
                    textDecoration: "none",
                    color: COLORS.dark,
                    fontWeight: 600,
                    fontSize: "18px",
                    padding: "14px 12px",
                    borderRadius: "14px",
                    background: "#f8fafc",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                closeMenu();
                openQuote();
              }}
              style={{
                marginTop: "20px",
                ...buttonPrimary,
                fontSize: "16px",
              }}
            >
              Text for a Quote
            </button>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "24px",
                display: "grid",
                gap: "10px",
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              <span>754-284-4398</span>
              <span>solshinecleaningpsl@outlook.com</span>
              <span>English & Spanish</span>
            </div>
          </div>
        </>
      )}

      <section
        id="home"
        style={{
          background: "linear-gradient(135deg, #eefcfb, #ffffff, #f6fffe)",
          padding: "72px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={sectionTitleStyle}>Professional Cleaning Services</p>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.1,
                margin: "18px 0 0 0",
                fontWeight: 800,
                color: COLORS.dark,
                maxWidth: "720px",
              }}
            >
              Professional Cleaning Services in Port St. Lucie
            </h1>

            <p
              style={{
                marginTop: "16px",
                fontSize: "18px",
                color: COLORS.text,
                lineHeight: 1.8,
                fontWeight: 600,
              }}
            >
              ✨ Reliable • Detailed • Stress-Free Cleaning
            </p>

            <p
              style={{
                marginTop: "16px",
                fontSize: "17px",
                color: COLORS.text,
                lineHeight: 1.8,
                maxWidth: "650px",
              }}
            >
              We provide high-quality residential and commercial cleaning services
              designed to make your space spotless and fresh.
            </p>

            <p
              style={{
                marginTop: "16px",
                fontSize: "17px",
                color: COLORS.text,
                lineHeight: 1.8,
                maxWidth: "650px",
              }}
            >
              Whether you need regular cleaning, deep cleaning, or move-out
              services — we’ve got you covered.
            </p>

            <p
              style={{
                marginTop: "18px",
                fontWeight: 600,
                color: COLORS.dark,
                fontSize: "17px",
              }}
            >
              👉 Call or text today for a FREE estimate
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "28px",
              }}
            >
              <button onClick={openQuote} style={buttonPrimary}>
                Request a Quote
              </button>

              <button onClick={openQuote} style={buttonSecondary}>
                Text Us Now
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "12px",
                marginTop: "28px",
                maxWidth: "760px",
              }}
            >
              {[
                "Licensed & insured",
                "Trusted local professionals",
                "Flexible scheduling",
                "Bilingual support",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: COLORS.white,
                    border: "1px solid #dbeeed",
                    borderRadius: "16px",
                    padding: "14px 16px",
                    color: "#334155",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                background: COLORS.white,
                borderRadius: "30px",
                padding: "24px",
                boxShadow: "0 20px 50px rgba(47,167,160,0.10)",
                border: "1px solid #e7f3f2",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #2FA7A0, #3fd4ca)",
                  borderRadius: "24px",
                  padding: "34px",
                  color: COLORS.white,
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    opacity: 0.9,
                  }}
                >
                  Sol and Shine PSL LLC
                </p>

                <h2
                  style={{
                    fontSize: "clamp(28px, 3vw, 42px)",
                    margin: "14px 0 0 0",
                    lineHeight: 1.2,
                  }}
                >
                  Spotless spaces, elevated care.
                </h2>

                <p
                  style={{
                    marginTop: "14px",
                    lineHeight: 1.8,
                    fontSize: "17px",
                    opacity: 0.96,
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    background: COLORS.primaryLight,
                    padding: "22px",
                    borderRadius: "22px",
                  }}
                >
                  <p
                    style={{
                      color: "#0f766e",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    Home Cleaning
                  </p>
                  <p style={{ marginTop: "8px", color: COLORS.text }}>
                    Clean, comfortable spaces for everyday living.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f3fffe",
                    padding: "22px",
                    borderRadius: "22px",
                  }}
                >
                  <p
                    style={{
                      color: "#0f766e",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    English & Spanish
                  </p>
                  <p style={{ marginTop: "8px", color: COLORS.text }}>
                    Professional support in both languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 16px" }}
      >
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>Our Services</p>
          <h2 style={mainTitleStyle}>
            Cleaning services designed around your needs.
          </h2>
          <p
            style={{
              marginTop: "18px",
              color: COLORS.text,
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Every property is different, so we provide personalized quotes based on
            the size and condition of the space.
          </p>
        </div>

        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {services.map((service) => (
            <div key={service.title} style={cardStyle}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "18px",
                  background: COLORS.primarySoft,
                  marginBottom: "18px",
                }}
              />
              <h3 style={{ fontSize: "24px", margin: 0, color: COLORS.dark }}>
                {service.title}
              </h3>
              <p style={{ color: COLORS.text, lineHeight: 1.8, marginTop: "12px" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="process"
        style={{ background: COLORS.offWhite, padding: "72px 16px" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
            <p style={sectionTitleStyle}>How It Works</p>
            <h2 style={mainTitleStyle}>Book your cleaning in three easy steps.</h2>
          </div>

          <div
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            {process.map((item) => (
              <div
                key={item.number}
                style={{
                  ...cardStyle,
                  boxShadow: "none",
                  border: "1px solid #e7f2f1",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "999px",
                    background: COLORS.primary,
                    color: COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "18px",
                  }}
                >
                  {item.number}
                </div>

                <h3 style={{ marginTop: "18px", fontSize: "24px", color: COLORS.dark }}>
                  {item.title}
                </h3>

                <p style={{ marginTop: "12px", color: COLORS.text, lineHeight: 1.8 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 16px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "26px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              boxShadow: "0 14px 35px rgba(15,23,42,0.05)",
              border: "1px solid #eef4f4",
            }}
          >
            <p style={sectionTitleStyle}>About Us / Sobre Nosotros</p>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                marginTop: "16px",
                color: COLORS.dark,
                lineHeight: 1.15,
              }}
            >
              Premium cleaning with a personal touch.
            </h2>

            <p
              style={{
                marginTop: "18px",
                color: COLORS.text,
                fontSize: "18px",
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
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Brindamos un servicio de limpieza confiable, detallado y profesional,
              cuidando cada espacio como si fuera nuestro.
            </p>
          </div>
        </div>
      </section>

      <section id="areas" style={{ background: COLORS.offWhite, padding: "72px 16px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
            <p style={sectionTitleStyle}>Service Areas</p>
            <h2 style={mainTitleStyle}>Proudly serving the Treasure Coast.</h2>
          </div>

          <div
            style={{
              marginTop: "34px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {areas.map((area) => (
              <div
                key={area}
                style={{
                  background: COLORS.primaryLight,
                  border: "1px solid #d7efec",
                  borderRadius: "22px",
                  padding: "22px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: COLORS.dark,
                  fontSize: "18px",
                }}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 16px" }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={sectionTitleStyle}>Client Reviews / Reseñas</p>
          <h2 style={mainTitleStyle}>
            Trusted by clients who love a spotless finish.
          </h2>
        </div>

        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {reviews.map((item) => (
            <div key={item.name} style={cardStyle}>
              <p style={{ color: COLORS.text, lineHeight: 1.9, fontSize: "18px" }}>
                “{item.text}”
              </p>
              <p style={{ marginTop: "18px", fontWeight: 700, color: COLORS.dark }}>
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "linear-gradient(135deg, #eefcfb, #ffffff, #f5ffff)",
          padding: "72px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              boxShadow: "0 14px 35px rgba(47,167,160,0.09)",
            }}
          >
            <p style={sectionTitleStyle}>Contact / Contacto</p>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                marginTop: "16px",
                color: COLORS.dark,
                lineHeight: 1.15,
              }}
            >
              Get your home professionally cleaned today.
            </h2>

            <p
              style={{
                marginTop: "18px",
                color: COLORS.text,
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              Ready for a clean, elegant, worry-free space? Contact us today for
              more information and personalized pricing.
            </p>

            <div
              style={{
                marginTop: "26px",
                display: "grid",
                gap: "12px",
                color: "#334155",
                fontSize: "17px",
              }}
            >
              <p>
                <strong>Owner:</strong> Andrea Del Sol
              </p>
              <p>
                <strong>Location:</strong> Port St. Lucie, FL
              </p>
              <p>
                <strong>Text Us:</strong> 754-284-4398
              </p>
              <p>
                <strong>Email:</strong> solshinecleaningpsl@outlook.com
              </p>
              <p>
                <strong>Languages:</strong> English & Spanish
              </p>
            </div>

            <button onClick={openQuote} style={{ ...buttonPrimary, marginTop: "24px" }}>
              Text Us Now
            </button>
          </div>

          <div
            style={{
              ...cardStyle,
              boxShadow: "0 14px 35px rgba(47,167,160,0.09)",
              border: "1px solid #eef7f7",
            }}
          >
            <p style={sectionTitleStyle}>Quick Form / Formulario</p>

            <div style={{ marginTop: "22px", display: "grid", gap: "14px" }}>
              <input
                value={formData.name}
                onChange={handleInputChange("name")}
                placeholder="Name / Nombre"
                style={inputStyle}
              />
              <input
                value={formData.phone}
                onChange={handleInputChange("phone")}
                placeholder="Phone / Teléfono"
                style={inputStyle}
              />
              <input
                value={formData.email}
                onChange={handleInputChange("email")}
                placeholder="Email / Correo"
                style={inputStyle}
              />
              <textarea
                value={formData.message}
                onChange={handleInputChange("message")}
                placeholder="Tell us what type of cleaning you need / Cuéntanos qué tipo de limpieza necesitas"
                style={{
                  ...inputStyle,
                  minHeight: "140px",
                  resize: "vertical",
                }}
              />
              <button
                onClick={openFormRequest}
                style={{ ...buttonPrimary, background: COLORS.dark }}
              >
                Send Request / Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: COLORS.offWhite,
          padding: "72px 16px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #2FA7A0, #3fd4ca)",
              color: COLORS.white,
              borderRadius: "30px",
              padding: "34px",
              boxShadow: "0 20px 50px rgba(47,167,160,0.15)",
            }}
          >
            <p
              style={{
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "13px",
                opacity: 0.9,
                textAlign: "center",
              }}
            >
              Why Choose Us?
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gap: "12px",
              }}
            >
              {reasons.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    borderRadius: "18px",
                    padding: "14px 16px",
                    fontWeight: 600,
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  {item}
                </div>
              ))}
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
          padding: isMobile ? "14px 18px" : "14px 20px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 16px 36px rgba(47,167,160,0.25)",
          zIndex: menuOpen ? 30 : 40,
          border: "none",
          cursor: "pointer",
          opacity: menuOpen ? 0 : 1,
          pointerEvents: menuOpen ? "none" : "auto",
          transition: "opacity 0.2s ease",
        }}
      >
        Text for a Quote
      </button>

      <footer style={{ background: COLORS.dark, color: COLORS.white, padding: "34px 16px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          <div>
            <img
              src={logo}
              alt="Sol & Shine logo footer"
              style={{
                height: "78px",
                width: "auto",
                display: "block",
                objectFit: "contain",
                marginBottom: "12px",
                background: COLORS.white,
                borderRadius: "14px",
                padding: "4px",
              }}
            />
            <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
              Premium bilingual cleaning service for homes, offices, and move-out
              cleanings in Port St. Lucie and nearby areas.
            </p>
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Quick Links</h3>
            <div style={{ display: "grid", gap: "10px", marginTop: "14px" }}>
              <a href="#home" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Home
              </a>
              <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Services
              </a>
              <a href="#process" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                How It Works
              </a>
              <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0 }}>Contact</h3>
            <div
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "14px",
                color: "#cbd5e1",
              }}
            >
              <span>Andrea Del Sol</span>
              <span>754-284-4398</span>
              <span>solshinecleaningpsl@outlook.com</span>
              <span>Port St. Lucie, FL</span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "24px auto 0 auto",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "#94a3b8",
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <p>© 2026 Sol and Shine PSL LLC. All rights reserved.</p>
          <p>Professional cleaning with premium care.</p>
        </div>
      </footer>
    </div>
  );
}