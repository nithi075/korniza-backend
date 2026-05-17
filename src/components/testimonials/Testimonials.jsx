import "./Testimonials.css"
import testimonialImg from "../../assets/testimonial.png"

export default function Testimonials() {
  return (
    <section className="testimonials">

      <span className="tag">
        WHAT CLIENTS SAY
      </span>

      <h2>
        TESTIMONIALS
      </h2>

      <div className="testimonial-banner">

        <img
          src={testimonialImg}
          alt="couple"
        />

        <div className="testimonial-overlay">

          <h3>
            Iszmail & Susisumaiya
          </h3>

          <p>
            Our wedding memories were captured so beautifully.
            Every image feels timeless and emotional.
            Truly a wonderful experience.
          </p>

          {/* <button>
            READ MORE
          </button> */}

        </div>

      </div>

    </section>
  )
}