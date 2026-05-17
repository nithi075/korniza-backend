import "./Video.css"

export default function Video(){

  return(

    <section className="video">

      <span className="tag">
        BEHIND THE SCENES
      </span>

      <h2>
        WATCH OUR VIDEO
      </h2>

      <div className="video-wrapper">

        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="video"
        />

        <div className="play-btn">
          ▶
        </div>

      </div>

    </section>

  )
}