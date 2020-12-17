import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const images = props.images.map((element) => {
    return <ImageCard key={element.id} image={element} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
