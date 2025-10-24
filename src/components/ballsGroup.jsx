import Balls from "./balls";

function BallsGroup({ pattern = [4, 4, 3] }) {
  const types = ["clair", "fonce"];
  const boules = [];

  pattern.forEach((count, index) => {
    const type = types[index % 2]; // alterne clair / foncé / clair
    for (let i = 0; i < count; i++) {
      boules.push(<Balls key={`${index}-${i}`} type={type} />);
    }
  });

  return <div>{boules}</div>;
};

export default BallsGroup;
