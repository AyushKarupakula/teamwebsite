import React from 'react';

function VideoDemo() {
  return (
    <section className="video-demo">
      <h2>See Atlanta Food Finder in Action</h2>
      <div className="video-container">
        {/* Replace with actual video embed code */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Atlanta Food Finder Demo" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <p>
        Watch our comprehensive demo to see how Atlanta Food Finder 
        can transform your dining experience in the city!
      </p>
    </section>
  );
}

export default VideoDemo;