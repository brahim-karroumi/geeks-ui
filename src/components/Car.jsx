function Car(props) {
  return (
    <div className="car">
      <h2>Car {props.name} </h2>
      <h3>Color: {props.color}</h3>
      <h4>Year: {props.year}</h4>
    </div>
  );
}


export { Car };
