// src/components/Team.jsx
import React from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Mr. Vineet Fatehpuria",
    phone: "+91 9831275519",
    image: "/images/VineetFatehpuria.png",
  },
  {
    name: "Mr. Suresh Aggarwal",
    phone: "+91 9830968432",
    image: "/images/SureshAggarwal.png",
  },
];

const Team = () => {
  return (
    <section className="team-section mobile-center-all" id="team">
      <h2 className="team-heading">
        <span className="maroon">Meet Our </span>
        <span className="gold">Board Of Directors</span>
      </h2>
      
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-phone">{member.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
