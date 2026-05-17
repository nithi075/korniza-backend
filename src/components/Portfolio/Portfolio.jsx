import React, { useState, useEffect } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const projects = [
    {
      id: 1,
      title: "Southern Charm",
      type: "Wedding at The Orchard",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    },
    {
      id: 2,
      title: "The Greenhouse",
      type: "Romantic Ceremony",
      img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    },
    {
      id: 3,
      title: "Coastal Vows",
      type: "An Oceanfront Affair",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
  ];

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="portfolio">
      <span className="p-tag">SELECTED WORKS</span>
      <h2>PORTFOLIO</h2>

      <div className="portfolio-slider">
        {projects.map((project, index) => {
          const offset = index - activeIndex;

          return (
            <div
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`portfolio-card ${
                activeIndex === index ? "active" : ""
              }`}
              style={{
                transform: `translateX(${
                  offset * (isMobile ? 140 : 300)
                }px) scale(${
                  activeIndex === index ? 1 : isMobile ? 0.9 : 0.85
                })`,
                zIndex: activeIndex === index ? 5 : 1,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              <img src={project.img} alt={project.title} />

              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.type}</p>
                <span className="view-link">VIEW PROJECT —</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}