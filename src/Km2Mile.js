import React from "react";
import Kilometers from "./Kilometers";
import Miles from "./Miles";
import Buttons from "./Buttons";

function Km2Mile() {
  const [distance, setDistance] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => setDistance(event.target.value);
  const onReset = () => setDistance(0);
  const onFlip = () => {
    onReset();
    setFlipped((flipped) => !flipped);
  } 

  return (
    <div>
      <h3>Kilometers to Miles</h3>
      <Kilometers flipped={flipped} onChange={onChange} distance={distance} />

      { flipped ? (
        <h4>You want to convert from {distance} miles to kilometers.</h4>
      ) : (
        <h4>You want to convert from {distance} kilometers to miles.</h4>
      ) }

      <Miles flipped={flipped} onChange={onChange} distance={distance} />

      <br />

      <Buttons onReset={onReset} onFlip={onFlip} />
    </div>
  )
}

export default Km2Mile;