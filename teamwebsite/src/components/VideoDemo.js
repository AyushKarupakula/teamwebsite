import React from 'react';

function VideoDemo({ videoId }) {
  // Updated function to use the specific Google Drive URL
  const getGoogleDriveEmbedUrl = () => {
    return "https://drive.google.com/file/d/1o0aQuKTr06qESIHc65pxn_Rf8RqETO_m/preview";
  };

  return (
    <section className="video-demo">
      <h2>See Atlanta Food Finder in Action</h2>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src={getGoogleDriveEmbedUrl()}
          title="Atlanta Food Finder Demo" 
          frameBorder="0" 
          allow="autoplay"
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