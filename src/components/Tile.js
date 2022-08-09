import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div  className="tile-container">
      {Object.values(tile).map((value, index) => (
        <p key={index} >
         {value}<br />

        </p>
      ))}
    </div>
  );
};
