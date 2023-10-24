import React from "react";
import "./Coins.css";

const CoinItem = (props) => {
  if (!props.coins) {
    return null; // or you can render an error message or loading indicator
  }

  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hide-mobile">
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hide-mobile">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
