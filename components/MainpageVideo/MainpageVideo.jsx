'use client';
import React, { useRef } from 'react';
import './MainpageVideo.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const MainpageVideo = () => {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <section className="mainpage-video">
      <div className="mainpage-video__container">
        <motion.video
          ref={videoRef}
          className="mainpage-video__video"
          playsInline
          autoPlay
          muted
          onEnded={handleVideoEnded}
          controls=""
          style={{ scale }}
        >
          <source src="/video_hero.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </section>
  );
};

export default MainpageVideo;