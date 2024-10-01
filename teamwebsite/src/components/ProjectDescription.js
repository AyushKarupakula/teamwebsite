import React from 'react';

function ProjectDescription() {
  return (
    <section className="project-description">
      <h2>Atlanta Food Finder: Your Culinary Compass</h2>
      <p>
        Atlanta Food Finder is a cutting-edge web application that revolutionizes 
        the way food enthusiasts discover and explore the vibrant culinary scene 
        of Atlanta. Leveraging the power of Google Maps API and built with a robust 
        Django backend, our platform offers a seamless and interactive experience 
        for users to uncover hidden gems and popular eateries alike.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Advanced filtering by price range and cuisine type</li>
        <li>Detailed restaurant profiles with address, contact info, ratings, and reviews</li>
        <li>Interactive Google Maps integration for visual location reference</li>
        <li>Personalized user accounts with favorite restaurant saving functionality</li>
        <li>Responsive design for optimal viewing on any device</li>
      </ul>
      <h3>Technology Stack:</h3>
      <ul>
        <li>Frontend: React.js for a dynamic and responsive user interface</li>
        <li>Backend: Django framework for a powerful and scalable server-side architecture</li>
        <li>Database: SQLite for efficient data management</li>
        <li>API Integration: Google Maps API for location services</li>
      </ul>
      <p>
        Whether you're a local foodie or a visitor exploring Atlanta's culinary 
        landscape, Atlanta Food Finder is your trusted companion in discovering 
        your next unforgettable dining experience. Our Django-powered backend 
        ensures robust performance, security, and scalability as you explore 
        the city's diverse food scene.
      </p>
    </section>
  );
}

export default ProjectDescription;