import React from "react";
import Panel from "./Panel";

const Panels = () => {
  const texts = [
    ['hey', 'Let\'s', 'dance'],
    ['Give', 'Take', 'Recive'],
    ['Experiance', 'IT', 'Today'],
    ['Give', 'All', 'You can'],
    ['Life', 'In', 'Motions']
  ];

  return (
    <div className="panels">
      {texts.map((arr, index) => {
       return (<Panel
          number={index + 1} 
          textOne={arr[0]}
          textTwo={arr[1]}
          textThree={arr[2]}
        />)
      })}
    </div>
  );
};

export default Panels;