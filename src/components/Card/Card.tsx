import player from "../../images/player.png";
import player2 from "../../images/player-1.png";

import "./Card.css";

const Card = () => {
  return (
    <section>
      <div className="card">
        <p>Most picked player</p>
        <img src={player} alt="player" />
      </div>

      <div className="card">
        <p>Less picked player</p>
        <img src={player2} alt="player" />
      </div>
    </section>
  );
};

export default Card;
