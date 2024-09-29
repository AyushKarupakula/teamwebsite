import React from 'react';

const VideoDemo = () => {
  return (
    <section className="video-demo">
      <h1>See Atlanta Food Finder in Action</h1>
      <p>Experience the seamless functionality and intuitive design of Atlanta Food Finder through our comprehensive video demonstration. Watch as we guide you through the app's key features and showcase how it can enhance your dining experiences in Atlanta.</p>
      
      <div className="video-container">
        {/* Replace 'VIDEO_ID' with your actual YouTube video ID */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/VIDEO_ID" 
          title="Atlanta Food Finder Demo" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      <h2>Highlights of the Demo:</h2>
      <ul>
        <li>User registration and login process</li>
        <li>Searching for restaurants with custom filters</li>
        <li>Exploring detailed restaurant information</li>
        <li>Interacting with the integrated Google Map</li>
        <li>Saving and managing favorite restaurants</li>
        <li>Mobile responsiveness showcase</li>
      </ul>

      <p>This demo illustrates how Atlanta Food Finder simplifies the process of discovering great dining options, helping users make informed decisions about where to eat in Atlanta's diverse culinary landscape.</p>
    </section>
  );
};

export default VideoDemo;