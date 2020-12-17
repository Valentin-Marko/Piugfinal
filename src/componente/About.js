import "../App.css";
import React from "react";
import Cards from "./AboutComponents/Cards";

function About() {
  return (
    <div>
      <div class="ui piled segment">
        <h4 class="ui header">
          Best ski resorts in Switzerland 2020-2021 & Covid-19 Sanitary measures
        </h4>
        <p>
          You have been more than 640,000 travellers from around the world to
          select your favourite ski resort in Europe. Europe is the leading ski
          holiday destination in the world and these 10 ski resorts are the best
          in their respective countries. For almost 10 years millions have voted
          for their favourite ski resorts in Europe but also the most beautiful
          ski resorts in France, the best ski resorts in Italy or the best ski
          resorts for families, for luxury holidays, the best ski resorts for
          New Year's Eve and the cheapest ski resorts in Europe.
        </p>
        <p>
          More than ever, after months of confinement you need to go out in
          nature. You are ready to travel less this year but favour unique trips
          to places recognized for their special tourist offers. You want to ski
          in the best ski resorts in Europe because this sport is part of your
          DNA and contributes to your well-being. It's time to have some fun!
          Here is a list of your favourite resorts, those popular with
          travellers from all over the world (the most visited ski resorts on
          our site during the last 12 months by travellers from 172 countries).
        </p>
        <p>
          Health rules impose social distancing which implies fewer places
          available in accommodation and fewer people in the cabins of ski
          lifts. We therefore recommend that you book your accommodation, ski
          passes and flights in advance.
        </p>
      </div>
      <Cards />
    </div>
  );
}

export default About;
