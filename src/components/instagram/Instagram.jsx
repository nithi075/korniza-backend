import "./Instagram.css";

// import your own images
import insta1 from "../../assets/instagram/img1.jpg";
import insta2 from "../../assets/instagram/img2.jpg";
import insta3 from "../../assets/instagram/img3.jpg";
import insta4 from "../../assets/instagram/img4.jpg";
import insta5 from "../../assets/instagram/img5.jpg";
import insta6 from "../../assets/instagram/img6.jpg";

export default function Instagram() {

  const images = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6
  ];

  return (
    <section className="instagram">

      <span className="tag">
        FOLLOW OUR JOURNEY
      </span>

      <h2>
        INSTAGRAM
      </h2>

      <div className="insta-strip">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`instagram-${i}`}
          />
        ))}

      </div>

    </section>
  );
}