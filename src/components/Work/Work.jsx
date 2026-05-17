import "./Work.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/wedding1.jpeg";
import img2 from "../../assets/portrait.jpeg";
import img3 from "../../assets/mithula3.jpeg";
import img4 from "../../assets/mithula4.jpeg";
import img5 from "../../assets/mithula5.jpeg";
import img6 from "../../assets/mithula6.jpeg";

export default function Work() {

  const navigate = useNavigate();

  const works = [
    {
      id: 1,
      title: "Eternal Union",
      size: "tall",
      image: img1
    },
    {
      id: 2,
      title: "Golden Hour",
      size: "wide",
      image: img2
    },
    {
      id: 3,
      title: "The Heritage",
      size: "slim",
      image: img3
    },
    {
      id: 4,
      title: "Velvet Nights",
      size: "tall",
      image: img4
    },
    {
      id: 5,
      title: "Soulful Eyes",
      size: "wide",
      image: img5
    },
    {
      id: 6,
      title: "Vows in Silence",
      size: "large",
      image: img6
    },
  ];

  return (

    <section className="work" id="work">

      <div className="work-grain"></div>

      <header className="work-header">

        <span className="work-tag">
          Our Curated Gallery
        </span>

        <h2 className="work-title">
          Featured <span className="italic-text">Stories</span>
        </h2>

        <div className="title-underline"></div>

      </header>


      <div className="editorial-grid">

        {works.map((item) => (

          <div
            key={item.id}
            className={`work-item ${item.size}`}
          >

            <div className="img-container">

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="work-overlay">

               

                <h3 className="work-name">
                  {item.title}
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>


      <button
        className="view-more-btn"
        onClick={() => navigate("/gallery")}
      >
        <span>
          View Full Portfolio
        </span>
      </button>

    </section>

  );

}