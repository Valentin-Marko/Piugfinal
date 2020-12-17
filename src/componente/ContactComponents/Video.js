import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      <ReactPlayer
        width="480px"
        height="240px"
        controls
        url="https://www.youtube.com/watch?v=VQKa11nFy_E"
      />
    </div>
  );
};

export default Video;
