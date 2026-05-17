import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello MihtunaPhotography, I'm interested in booking a luxury session. Let's discuss!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-grain"></div>
      
      <div className="contact-container">
        
        {/* Header Section */}
        <div className="contact-header">
          <span className="contact-tag">Reservations</span>
          <h2 className="contact-title">
            Let’s Create <span className="italic-text">Art</span> Together
          </h2>
          <div className="contact-divider"></div>
        </div>

        <div className="contact-content-grid">
          
          {/* Left: Refined Info Blocks */}
          <div className="contact-info">
            <div className="info-block">
              <span className="info-label">Direct Inquiries</span>
              <a href="mailto:mithunaphotography@gmail.com" className="info-value email">
                mithunaphotography@gmail.com
              </a>
              <a href="tel:+919047098800" className="info-value phone">
                +91 96594 14250
              </a>
            </div>

            <div className="info-block">
              <span className="info-label">Main Atelier</span>
              <p className="info-value">Erode, Tamil Nadu</p>
            </div>

            <div className="info-block">
              <span className="info-label">Digital Presence</span>
              <div className="social-links-minimal">
                <a href="https://www.instagram.com/mithuna_photography" target="_blank" rel="noreferrer">Instagram</a>
                <span className="dot"></span>
                <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right: Premium Booking Card */}
          <div className="contact-action-card">
            <div className="card-inner">
              <div className="status-badge">
                <span className="pulse"></span>
                <span className="badge-text">Accepting 2026 Bookings</span>
              </div>
              
              <h3 className="card-heading">Ready to capture <br/> your story?</h3>
              <p className="card-subtext">
                Limited dates available for weddings and cinematic sessions. 
                Secure your consultation today.
              </p>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="premium-whatsapp-btn">
                <span>Check Availability</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="contact-footer">
          <div className="footer-line"></div>
          <div className="footer-flex">
            <div className="footer-brand">
             Mihtuna<span className="brand-sub">Photography</span>
            </div>
            <div className="footer-links">
              <span>&copy; 2026</span>
              <span className="separator">/</span>
              <a href="#">Privacy</a>
              <span className="separator">/</span>
              <a href="#">Studio Policy</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}