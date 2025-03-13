import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Hands-on Workshops",
      description:
        "Learn practical skills through interactive workshops on penetration testing, digital forensics, and more.",
    },
    {
      icon: "🏆",
      title: "CTF Competitions",
      description:
        "Participate in Capture The Flag competitions to test your skills and compete with other cybersecurity enthusiasts.",
    },
    {
      icon: "👥",
      title: "Networking",
      description:
        "Connect with industry professionals, alumni, and fellow students interested in cybersecurity.",
    },
    {
      icon: "💻",
      title: "Vulnerability Research",
      description:
        "Learn to identify, analyze, and responsibly disclose security vulnerabilities in real-world systems.",
    },
  ];

  return (
    <section className="features" id="about">
      <h2 className="section-title">What We Offer</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-content">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
