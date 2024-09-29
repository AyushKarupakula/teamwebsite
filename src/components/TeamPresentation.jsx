import React from 'react';

const TeamPresentation = () => {
  const teamMembers = [
    {
      name: "Ayush",
      role: "Lead Front-End Developer & GitHub Manager",
      contributions: "Spearheaded the development of the user interface, ensuring a seamless and intuitive user experience. Managed the GitHub repository, facilitating smooth collaboration and version control."
    },
    {
      name: "Daniel",
      role: "Scrum Master & Documentation Specialist",
      contributions: "Orchestrated sprint planning and retrospectives, ensuring adherence to Agile methodologies. Maintained comprehensive documentation of our development process and team progress."
    },
    {
      name: "Veer",
      role: "Back-End Architect",
      contributions: "Designed and implemented the server-side logic, database schemas, and API integrations, forming the backbone of our application."
    },
    {
      name: "Dhruv",
      role: "Full-Stack Developer",
      contributions: "Bridged the gap between front-end and back-end, contributing to both sides of the application and ensuring seamless integration."
    },
    {
      name: "Suyash",
      role: "UX Researcher & Quality Assurance Specialist",
      contributions: "Conducted user research to inform design decisions, and rigorously tested the application to ensure a bug-free, user-friendly experience."
    }
  ];

  return (
    <section className="team-presentation">
      <h1>Meet the Culinary Code Crafters</h1>
      <p>We're a diverse team of passionate developers who came together to revolutionize the way people discover local eateries in Atlanta. Each member brings unique skills and perspectives to the table, resulting in a robust and user-centric application.</p>
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <h2>{member.name}</h2>
          <h3>{member.role}</h3>
          <p>{member.contributions}</p>
        </div>
      ))}
    </section>
  );
};

export default TeamPresentation;