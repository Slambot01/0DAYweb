// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <section className="hero-section" id="hero">
//       <h1>Welcome to 0 DAY</h1>
//       <p>The cybersecurity club of IIIT GWALIOR</p>
//       <div className="hero-buttons">
//         <button className="btn neon">Join Us</button>
//         <button className="btn neon-outline">Learn More</button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    // Matrix rain animation
    const canvas = document.createElement("canvas");
    const matrix = document.getElementById("matrix");
    matrix.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = matrix.offsetWidth;
    canvas.height = matrix.offsetHeight;

    // Characters
    const chars = "01010101010101010101010001111000010010DAY";

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor((Math.random() * -canvas.height) / fontSize);
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff8c";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 60);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero">
      <div className="matrix-bg" id="matrix"></div>
      <div className="hero-content">
        <h1>Securing Tomorrow, Today</h1>
        <p>
          Join 0 DAY, the premier cybersecurity club dedicated to fostering
          knowledge, skills, and a community of ethical hackers and security
          enthusiasts.
        </p>
        <a href="#" className="btn">
          Join Our Club
        </a>
      </div>
    </section>
  );
};

export default Hero;
