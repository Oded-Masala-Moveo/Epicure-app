import React, { useEffect } from "react";
import "./card.scss";
import { CardItem } from "../../models/index.model";

import CardDish from "../cardDish/CardDish";
import { EmptyStar, FullStar } from "../../assets/icons";
import { Link } from "react-router-dom";
export const Card: React.FC<{
  card: CardItem;
  week?: boolean;
  hidePrice?: boolean;
  restPage?: boolean;
}> = ({ card, week, hidePrice, restPage }) => {
  const displayStars = (rate: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(
          <div key={`full-star ${i}`} className="star">
            <FullStar />
          </div>
        );
      } else {
        stars.push(
          <div key={`empty-start ${i}`} className="star">
            <EmptyStar />
          </div>
        );
      }
    }
    return stars;
  };

  if ("name" in card && "chef" in card)
    return (
      <>
        <Link to={`/restaurants/:${card.id}`}>
          <div
            className={
              (week && "card-restaurant-container card-chef-week") ||
              (restPage &&
                "card-restaurant-container card-restaurant-page-container") ||
              "card-restaurant-container"
            }
          >
            <div className="card-image-container">
              <img src={card.image} alt={`${card.name} ${card.id}`} />
            </div>
            <div className="card-text-container">
              <h3>{card.name}</h3>
              {!week && <p>{card.chef}</p>}
            </div>
            {!week && (
              <div className="star-rating">{displayStars(card.rate)}</div>
            )}
          </div>
        </Link>
      </>
    );
  if ("fullName" in card && "newChef" in card)
    return (
      <>
        <div className="card-chef-container">
          <div
            className={week ? "chef-header chef-of-the-week" : "chef-header"}
          >
            <div
              className="chef-image"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="chef-name">
                <h3>{card.fullName}</h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return <CardDish hidePrice={hidePrice} card={card} />;
};

export default Card;