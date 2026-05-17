import "./Services.css"

export default function Services(){
  return (
    <section className="services">
      <div className="services-container">
        
        <div className="service-item">
          <span className="service-icon">✦</span>
          <div className="service-text">
            <h4>BRAND</h4>
            <p>Elegant identity photography</p>
          </div>
        </div>

        <div className="service-item">
          <span className="service-icon">✦</span>
          <div className="service-text">
            <h4>WEDDING</h4>
            <p>Luxury wedding coverage</p>
          </div>
        </div>

        <div className="service-item">
          <span className="service-icon">✦</span>
          <div className="service-text">
            <h4>EDITORIAL</h4>
            <p>Magazine style shoots</p>
          </div>
        </div>

      </div>
    </section>
  )
}