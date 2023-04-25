import React from "react";
import video from "./../public/TSP XR.mp4";

const AboutUs = () => {
  return (
    <div>
      <video width="100%" autoPlay muted loop playsInline>
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default AboutUs;
