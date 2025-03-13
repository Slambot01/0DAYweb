import React from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      image: "/api/placeholder/400/320",
      date: "APR 15",
      title: "Web App Penetration Testing",
      description:
        "Learn how to identify and exploit common web vulnerabilities in this hands-on workshop.",
    },
    {
      image: "/api/placeholder/400/320",
      date: "APR 22",
      title: "Social Engineering Defense",
      description:
        "Discover techniques to recognize and prevent social engineering attacks.",
    },
    {
      image: "/api/placeholder/400/320",
      date: "MAY 5",
      title: "Spring CTF Competition",
      description:
        "Test your skills in our semester-end Capture The Flag competition with prizes!",
    },
  ];

  return (
    <section className="events" id="events">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <div className="event-date">{event.date}</div>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <a href="#" className="btn">
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
