import "./floating.css";

export default function FloatingChat() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello Mithuna Photography, I'm looking for a premium photography session.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-chat-glass"
      >
        {/* The Icon (WhatsApp Logo SVG) */}
        <div className="icon-wrapper">
          <svg viewBox="0 0 24 24" className="whatsapp-svg">
            <path fill="currentColor" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.764-5.768zm3.391 8.221c-.154.433-.898.813-1.247.863-.343.049-.734.089-1.213-.066-.307-.098-1.392-.54-2.661-1.671-1.077-.962-1.802-2.151-2.012-2.512-.211-.361-.022-.557.159-.737.163-.163.361-.421.541-.631.18-.211.241-.361.361-.602.12-.241.06-.451-.03-.661-.09-.211-.813-1.956-1.114-2.682-.293-.707-.59-.611-.813-.622-.21-.011-.451-.013-.692-.013-.24 0-.631.09-1.019.511-.387.421-1.474 1.442-1.474 3.517 0 2.075 1.503 4.075 1.714 4.361.211.286 2.959 4.52 7.168 6.335 1.001.432 1.782.689 2.391.882 1.005.319 1.92.274 2.643.166.808-.121 2.485-.623 2.834-1.225.35-.602.35-1.115.244-1.224-.105-.11-.39-.176-.78-.371z"/>
          </svg>
        </div>
        
        {/* The Text (Only visible on hover) */}
        <span className="chat-label">Inquire Now</span>
      </a>
      
      {/* Soft Glow behind */}
      <div className="floating-glow"></div>
    </div>
  );
}