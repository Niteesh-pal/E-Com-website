import { Card, cardtype } from '../Card';

interface cardTypeProps {
  cardData: cardtype[];
}

const CaraouselCard = ({ cardData }: cardTypeProps) => {
  return (
    <div className="card_carousel_container">
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CaraouselCard;
