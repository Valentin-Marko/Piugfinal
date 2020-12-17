import React from "react";

const ResortsCard = ({ resort }) => {
  return (
    <div className="images">
      {resort.map((element) => {
        return (
          <div className="grow card" key={`${element.key}`}>
            <img className="imagini" src={`${element.src}`} alt="imagini" />
            <h1>{`${element.name}`} </h1>
            <h1>{`${element.price}`} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ResortsCard;
