import React from "react";

const Panel = ({number, textOne, textTwo, textThree }) => (
  <div className={`panel-${number}`}>
    <p className="text-1 up-text">{textOne}</p>
    <p className="text-2">{textTwo}</p>
    <p className="tex-3 down-text">{textThree}</p>
  </div>
);

export default Panel;