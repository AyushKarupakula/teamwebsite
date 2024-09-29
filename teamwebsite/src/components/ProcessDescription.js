import React from 'react';

function ProcessDescription() {
  return (
    <section className="process-description">
      <h2>Our Agile Journey: Scrum in Action</h2>
      <p>
        Our team embraced the Scrum framework, allowing us to deliver value 
        iteratively and respond to changing requirements efficiently. Here's 
        how we implemented Scrum and made key design decisions:
      </p>
      <h3>Scrum Practices:</h3>
      <ul>
        <li>Sprint Planning: Bi-weekly sprints with clear goals and deliverables</li>
        <li>Daily Stand-ups: 15-minute sync-ups to discuss progress and roadblocks</li>
        <li>Sprint Reviews: Demonstrations of completed features to stakeholders</li>
        <li>Sprint Retrospectives: Team reflections on process improvements</li>
        <li>Backlog Refinement: Regular grooming sessions to prioritize and clarify user stories</li>
      </ul>
      <h3>Design Principles and Patterns:</h3>
      <ul>
        <li>Responsive Design: Utilized CSS Grid and Flexbox for a fluid layout across devices</li>
        <li>Component-Based Architecture: Leveraged React's modular structure for reusable UI elements</li>
        <li>Singleton Pattern: Implemented for managing the global state of user preferences</li>
        <li>Observer Pattern: Used for real-time updates of restaurant data and user interactions</li>
        <li>Facade Pattern: Applied to simplify the complex Google Maps API interactions</li>
      </ul>
      <p>
        By adhering to these practices and principles, we created a robust, 
        scalable, and user-friendly application that meets the diverse needs 
        of Atlanta's food enthusiasts.
      </p>
    </section>
  );
}

export default ProcessDescription;