import React from 'react';
import CardItem from './Cardsitom';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1> Check these EPIC destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the iland of bali through privet cruise"
              label="adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/img-1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Travel through the iland of bali through privet cruise"
              label="adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Travel through the iland of bali through privet cruise"
              label="adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
