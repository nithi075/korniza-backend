import "./footer.css";

export default function Footer() {

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/theweddingcraft.in/",
      "_blank"
    );
  };

  const handleContactClick = () => {
    window.open(
      "https://wa.me/917092263880",
      "_blank"
    );
  };

  return (
    <footer className="footer">

      <div className="footer-curve">

        <div className="footer-content">

          {/* logo */}
          <div className="footer-logo">
            The Wedding Craft
          </div>

          {/* buttons */}
          <div className="footer-buttons">

            <button onClick={handleInstagramClick}>
              INSTAGRAM
            </button>

            <button onClick={handleContactClick}>
              CONTACT
            </button>

          </div>

          {/* copyright */}
          <p className="copyright">
            © 2026 The Wedding Craft Photography
          </p>

        </div>

      </div>

    </footer>
  );
}
