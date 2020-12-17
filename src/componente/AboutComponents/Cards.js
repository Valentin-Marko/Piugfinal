import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/564x/a8/63/6b/a8636b39b8e850488a7a46b41b4a56bd.jpg" />
        </div>
        <div className="content">
          <div className="header">Matt Giampietro</div>
          <div className="meta">
            <a>Skier</a>
          </div>
          <div className="description">
            One of the best agencies, call with confidence!
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined in 2017</span>
          <span>
            <i className="calendar check icon"></i>
            15 Trips
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/564x/72/7d/7e/727d7e43cedb587675a3c7c587242af4.jpg" />
        </div>
        <div className="content">
          <div className="header">Alexander James</div>
          <div className="meta">
            <span className="date">Climber</span>
          </div>
          <div className="description">
            The biggest challenges and the best views are offered to you, do not
            hesitate to contact them!
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined in 2018</span>
          <span>
            <i className="calendar check icon"></i>5 Trips
          </span>
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://i.pinimg.com/564x/41/50/f8/4150f808600b72b05fcf8836be5d76fb.jpg" />
        </div>
        <div className="content">
          <div className="header">Elyse Travolta</div>
          <div className="meta">
            <a>Professional skater</a>
          </div>
          <div className="description">
            The challenges you are exposed to by these resorts doesn't compare
            with absolutely nothing in the world, the biggest trampolines and
            long slopes I have encountered in my life as a professional skater.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">Joined in 2019</span>
          <span>
            <i className="calendar check icon"></i>
            25 Trips
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
