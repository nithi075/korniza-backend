import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Hero.css";
import logoimg from "../../assets/logo.png";

// hero images
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroImages = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  // auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // scroll to gallery section
  const handlePortfolioClick = () => {
    const gallerySection = document.getElementById("gallery");

    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // open whatsapp
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917092263880",
      "_blank"
    );
  };

  return (
    <section className="hero" id="home">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          <img src={logoimg} alt="logo" />
        </div>

        <div className="brand-title">
          The Wedding Craft
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <button className="nav-btn desktop-btn">
          Check Availability
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

      </nav>

      {/* Hero Background Slider */}
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            className={
              index === currentImage
                ? "active-slide"
                : ""
            }
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-overlay">

        <span className="sub-title">
          Luxury Wedding Photography
        </span>

        <h1>
          Capturing Love,
          <br />
          One Frame at a Time
        </h1>

        <p>
          From intimate moments to grand celebrations,
          we preserve every emotion beautifully so your
          memories last forever.
        </p>

        <div className="hero-btns">

          {/* Scroll to Gallery */}
          <button
            className="hero-btn"
            onClick={handlePortfolioClick}
          >
            View Portfolio
          </button>

          {/* Open WhatsApp */}
          <button
            className="hero-btn-outline"
            onClick={handleWhatsAppClick}
          >
            Book Consultation
          </button>

        </div>

      </div>
    </section>
  );
}