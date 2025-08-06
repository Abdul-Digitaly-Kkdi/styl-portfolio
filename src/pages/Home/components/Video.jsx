import React from "react";
import video from "../../../assets/video.mov";

const ResponsiveVideo = ({poster, title = "Video" }) => {
  return (
    <div className="w-full aspect-auto overflow-hidden shadow-lg">
      <video
        className="w-full h-full object-cover"
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        title={title}
      />
    </div>
  );
};

export default ResponsiveVideo;
