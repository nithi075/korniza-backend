import "./Packages.css";

const packagesData = [
  {
    title: "Basic",
    subtitle: "ONE PHOTOGRAPHER",
    price: "₹49,999",
    features: [
      "1 Photographer",
      "4 Hours of Photo Coverage",
      "250 Edited Images",
      "Photo Print Release"
    ]
  },
  {
    title: "Plus",
    subtitle: "TWO PHOTOGRAPHERS + VIDEOGRAPHY",
    price: "₹89,999",
    badge: "Most Popular",
    features: [
      "2 Photographers",
      "1 Cinematographer",
      "6 Hours of Photo & Video Coverage",
      "500 Edited Images",
      "Photo Print Release",
      "1 Teaser Video",
      "Full Event Video"
    ]
  },
  {
    title: "Premium",
    subtitle: "PHOTO + VIDEO + DRONE COVERAGE",
    price: "₹1,29,999",
    features: [
      "2 Photographers",
      "2 Cinematographers",
      "8 Hours of Photo & Video Coverage",
      "900 Edited Images",
      "Photo Print Release",
      "1 Teaser Video",
      "Full Event Video"
    ]
  }
];

export default function Packages() {
  return (
    <section className="packages" id="packages">
      
      {/* Header */}
      <div className="packages-header">
        <p>PRICING</p>
        <h2>Event Packages</h2>
      </div>

      {/* Cards */}
      <div className="packages-container">
        {packagesData.map((item, index) => (
          <div
            className={`package-card ${
              item.badge ? "featured" : ""
            }`}
            key={index}
          >
            {/* Badge */}
            {item.badge && (
              <div className="badge">
                {item.badge}
              </div>
            )}

            {/* Title */}
            <h3>{item.title}</h3>
            <p className="subtitle">
              {item.subtitle}
            </p>

            {/* Price */}
            <div className="price-box">
              <h1>{item.price}</h1>
              <span className="event-text">
                /event
              </span>
            </div>

            {/* Features */}
            <div className="features">
              {item.features.map(
                (feature, i) => (
                  <p key={i}>
                    {feature}
                  </p>
                )
              )}
            </div>

            {/* Fixed Button */}
            <button className="package-btn">
              Book Now ↗
            </button>
          </div>
        ))}
      </div>
      
    </section>
  );
}