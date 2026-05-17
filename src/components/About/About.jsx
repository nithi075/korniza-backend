import "./About.css";

import mainImg from "../../assets/about1.png";
import smallImg from "../../assets/about2.jpg";

export default function About() {
  return (
    <section className="about">

      <div>
        <h2>ABOUT US</h2>

        <p>
          We specialize in capturing timeless love stories through elegant imagery.
        </p>

        <button>READ MORE</button>
      </div>

      {/* Updated image layout */}
      <div className="about-images">

        <img
          src={mainImg}
          alt="main"
          className="main-img"
        />

        <div className="experience-box">
          <h3>08</h3>
          <p>YEARS OF MASTERY</p>
        </div>

        <img
          src={smallImg}
          alt="small"
          className="small-img"
        />

      </div>

    </section>
  );
}