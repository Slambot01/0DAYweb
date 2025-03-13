import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Club President",
      bio: "Cybersecurity enthusiast with a focus on network security and CTF competitions. Three-time finalist in national hacking competitions.",
      skills: ["Penetration Testing", "Network Security", "CTF"],
      photo: "/api/placeholder/400/400",
    },
    {
      name: "Jamie Harper",
      role: "Technical Lead",
      bio: "Specialized in reverse engineering and malware analysis. Published researcher in the field of secure systems design.",
      skills: ["Reverse Engineering", "Malware Analysis", "System Security"],
      photo: "/api/placeholder/400/400",
    },
    {
      name: "Morgan Davis",
      role: "Web Security Specialist",
      bio: "Full-stack developer with expertise in application security. Bug bounty hunter with over 50 verified vulnerabilities.",
      skills: ["Web Security", "Bug Bounty", "OWASP"],
      photo: "/api/placeholder/400/400",
    },
    {
      name: "Taylor Kim",
      role: "Cryptography Expert",
      bio: "Mathematics and Computer Science double major with a passion for cryptographic systems and blockchain security.",
      skills: ["Cryptography", "Blockchain", "Secure Protocols"],
      photo: "/api/placeholder/400/400",
    },
  ];

  return (
    <section className="team" id="team">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="binary-overlay" style={{ top: "20%", left: "5%" }}>
        01001001 01010100 00100000 01010011 01000101 01000011 01010101 01010010
        01001001 01010100 01011001
      </div>
      <div className="binary-overlay" style={{ bottom: "30%", right: "5%" }}>
        01000011 01011001 01000010 01000101 01010010 00100000 01010011 01000101
        01000011 01010101 01010010 01001001 01010100 01011001
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p className="member-bio">{member.bio}</p>
              <div className="member-skills">
                {member.skills.map((skill, skillIndex) => (
                  <span className="skill-tag" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="member-contact">
                <a href="#" className="member-social">
                  in
                </a>
                <a href="#" className="member-social">
                  gh
                </a>
                <a href="#" className="member-social">
                  @
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
