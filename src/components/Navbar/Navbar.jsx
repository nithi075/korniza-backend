import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Scroll detection for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  // 3. Close menu handler
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const navLinks = [
    { id: "01", name: "Home", href: "#hero" },
    { id: "02", name: "About", href: "#about" },
    { id: "03", name: "Portfolio", href: "#work" },
  ];

  return (
    <nav className={`nav ${scrolled ? "nav-scroll" : ""} ${menuOpen ? "nav-active" : ""}`}>
      <div className="nav-container">
        <div className="logo-wrapper">
          <h2 className="logo">
           Mihtuna<span>Photography</span>
          </h2>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className="link-item">
              {link.name}
            </a>
          ))}
          <a href="#gallery" className="nav-btn-premium">View Gallery</a>
        </div>

        {/* Hamburger to X Toggle Button */}
        <button 
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Full Screen Mobile Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="overlay-inner">
          <nav className="mobile-links">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={closeMenu}>
                <small>{link.id}</small> {link.name}
              </a>
            ))}
            <a href="#gallery" onClick={closeMenu}>
              <small>04</small> Gallery
            </a>
          </nav>
          
          <div className="menu-footer">
            <p>Based in Tamil Nadu</p>
            <div className="social-mini">
              <a href="#instagram">Instagram</a>
              <a href="#behance">Behance</a>
              <a href="#mail">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}