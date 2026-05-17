import React, { useState } from "react";
import "./Gallery.css";

import wedding from "../assets/img2.jpg";
import wedding2 from "../assets/img1.jpeg";
import couple from "../assets/img3.jpg";
import portrait from "../assets/img4.jpg";
import candid from "../assets/img5.jpg";

export default function Gallery() {
  const items = [
     {
      title: "Baby Shower",
      category: "Celebrations",
      img: wedding2
    },
    {
      title: "Wedding Photography",
      category: "Luxury Weddings",
      img: wedding
    },
   
    {
      title: "Couple Moments",
      category: "Love Stories",
      img: couple
    },
    {
      title: "Portrait Studio",
      category: "Portraits",
      img: portrait
    },
    {
      title: "Bride Photography",
      category: "Moments",
      img: candid
    }
  ];

  // 2nd image default center
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="portfolio">
      <span className="p-tag">
        Portfolio Collection
      </span>

      <h2>Timeless Visual Stories</h2>

      <div className="portfolio-slider">
        {items.map((item, index) => {
          let position = index - activeIndex;

          return (
            <div
              key={index}
              className={`portfolio-card ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                transform: `translateX(${position * 220}px) scale(${
                  index === activeIndex ? 1 : 0.85
                })`,
                zIndex: index === activeIndex ? 5 : 1
              }}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.img}
                alt={item.title}
              />

              <div className="overlay">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="pagination">
        {items.map((_, index) => (
          <div
            key={index}
            className={`dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}