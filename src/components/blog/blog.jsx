import "./blog.css"

export default function Blog(){

  return(

    <section className="blog">

      <span className="tag">
        FROM THE JOURNAL
      </span>

      <h2>
        BLOG
      </h2>

      <div className="blogGrid">

        {/* card 1 */}
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552"/>

          <p>
            Elegant Wedding Moments
          </p>
        </div>

        {/* center gold card */}
        <div className="blog-card gold-card">

          <div>
            BEST WEDDING
            IDEAS &
            INSPIRATION
          </div>

        </div>

        {/* card 3 */}
        <div className="blog-card">
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"/>

          <p>
            Styling & Decor Guide
          </p>
        </div>

      </div>

      <button className="blog-btn">
        VIEW BLOG
      </button>

    </section>

  )
}
