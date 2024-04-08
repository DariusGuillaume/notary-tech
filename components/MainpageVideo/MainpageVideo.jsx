import React, { useRef } from 'react';
import './MainpageVideo.css';

const MainpageVideo = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <section className="mainpage-video">
      <div className="mainpage-video__container">
        <video
          ref={videoRef}
          className="mainpage-video__video"
          playsInline
          autoPlay
          muted
          onEnded={handleVideoEnded}
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default MainpageVideo;