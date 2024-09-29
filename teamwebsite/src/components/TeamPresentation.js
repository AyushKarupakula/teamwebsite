import React from 'react';

function TeamPresentation() {
  const teamMembers = [
    {
      name: "Ayush",
      role: "GitHub Repository Manager & Lead Front-End Developer",
      contributions: "Managed the project repository and spearheaded the development of the user interface, ensuring a seamless and intuitive user experience."
    },
    {
      name: "Daniel",
      role: "Scrum Master & Documentation Specialist",
      contributions: "Orchestrated sprint planning, facilitated daily stand-ups, and maintained comprehensive documentation to ensure adherence to Agile methodologies."
    },
    {
      name: "Veer",
      role: "Back-End Architect",
      contributions: "Designed and implemented the server-side logic, database schema, and API integrations, forming the backbone of our application."
    },
    {
      name: "Dhruv",
      role: "Full-Stack Developer",
      contributions: "Bridged the gap between front-end and back-end, contributing to both sides of development and ensuring smooth integration."
    },
    {
      name: "Suyash",
      role: "UX/UI Designer & Quality Assurance Specialist",
      contributions: "Crafted the user experience design, created wireframes, and conducted thorough testing to ensure product quality and user satisfaction."
    }
  ];

  return (
    <section className="team-presentation">
      <h2>Meet Our Exceptional Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.contributions}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamPresentation;