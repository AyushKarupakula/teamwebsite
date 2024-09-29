import React from 'react';

const ProcessDescription = () => {
  return (
    <section className="process-description">
      <h1>Our Development Journey: Agile in Action</h1>
      <p>The creation of Atlanta Food Finder was a testament to the power of Agile methodologies, specifically Scrum. Our approach not only streamlined our development process but also allowed us to adapt quickly to user feedback and changing requirements.</p>

      <h2>Scrum Implementation:</h2>
      <ul>
        <li><strong>Sprint Planning:</strong> We conducted bi-weekly sprint planning sessions, breaking down our product backlog into manageable tasks and setting clear sprint goals.</li>
        <li><strong>Daily Stand-ups:</strong> Quick, 15-minute daily meetings kept the team aligned and addressed any blockers promptly.</li>
        <li><strong>Sprint Reviews and Retrospectives:</strong> At the end of each sprint, we demonstrated our progress to stakeholders and reflected on our processes, continuously improving our workflow.</li>
      </ul>

      <h2>Design Principles and Patterns:</h2>
      <ul>
        <li><strong>Component-Based Architecture:</strong> We leveraged React's component model to create reusable UI elements, enhancing maintainability and consistency across the application.</li>
        <li><strong>Responsive Design:</strong> Utilizing CSS Flexbox and Grid, we ensured our application looks great on devices of all sizes.</li>
        <li><strong>State Management:</strong> We implemented Redux for global state management, particularly useful for handling user authentication and favorites across components.</li>
        <li><strong>API Integration Pattern:</strong> We created a custom hook for handling API calls to the Google Maps service, encapsulating the logic for data fetching and error handling.</li>
        <li><strong>Lazy Loading:</strong> To optimize performance, we implemented lazy loading for images and components, improving initial load times.</li>
      </ul>

      <h2>Specific Examples:</h2>
      <ul>
        <li>When building the restaurant filtering feature, we applied the Strategy pattern, allowing us to easily add or modify filtering criteria without changing the core filtering logic.</li>
        <li>For the favorites functionality, we used the Observer pattern to update the UI in real-time when a user adds or removes a restaurant from their favorites list.</li>
        <li>Our map integration utilized the Facade pattern, simplifying the complex Google Maps API into a more manageable interface for our application's needs.</li>
      </ul>

      <p>By adhering to these principles and patterns, we created a robust, scalable, and user-friendly application that meets the needs of Atlanta's food enthusiasts while maintaining clean, maintainable code.</p>
    </section>
  );
};

export default ProcessDescription;