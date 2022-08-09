import React from "react";

import { Tile } from "./Tile";

export const TileList = ( { tiles } ) => {
  return (
    <div className="tile">
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
