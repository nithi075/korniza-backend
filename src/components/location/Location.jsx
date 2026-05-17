import "./Location.css"

export default function Location(){

  return(

    <section className="location">

      <span className="location-tag">
        VISIT OUR STUDIO
      </span>

      <h2>
        LOCATION
      </h2>

      <p className="location-text">
        The Wedding Craft Photography <br/>
        Thirumal Nagar, Vinayakapuram, Kolathur<br/>
        Chennai, Tamil Nadu <br/>
        India
      </p>

      <div className="map-container">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2972175799896!2d80.2076197!3d13.1436428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265fe06dba121%3A0x30a35782a131671e!2sThe%20Wedding%20Craft%20Photography!5e0!3m2!1sen!2sin!4v1776874859805!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location-map"
        ></iframe>

      </div>

    </section>

  )
}