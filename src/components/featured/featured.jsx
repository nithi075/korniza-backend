import "./featured.css";

// your gallery images
import img1 from "../../assets/featured/img1.jpg";
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";
import img6 from "../../assets/featured/img6.jpg";
import img7 from "../../assets/featured/img7.jpg";
import img8 from "../../assets/featured/img8.jpg";

// your video
import weddingVideo from "../../assets/featured/wedding-video.mp4";

export default function Featured() {

  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ];

  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/theweddingcraft.in/",
      "_blank"
    );
  };

  return (
    <section className="featured">

      <span className="tag">
        OUR FAVORITE MOMENTS
      </span>

      <h2>
        FEATURED WEDDING
      </h2>

      {/* video section */}
      <div className="featured-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="featured-video"
        >
          <source src={weddingVideo} type="video/mp4" />
        </video>
      </div>

      {/* collage */}
      <div className="featuredGrid">

        {galleryImages.slice(0,3).map((img,index)=>(
          <img key={index} src={img} alt="" />
        ))}

        <div className="quote-box">
          MEMORIES
          <br/>
          THAT LAST
          <br/>
          FOREVER
        </div>

        {galleryImages.slice(3).map((img,index)=>(
          <img key={index} src={img} alt="" />
        ))}

      </div>

      <button 
        className="featured-btn"
        onClick={handleInstagramRedirect}
      >
        View More ↗
      </button>

    </section>
  );
}
