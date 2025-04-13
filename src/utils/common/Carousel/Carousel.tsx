import React, { useState } from 'react';
import Icon from '../Icon';
import { cardtype } from '../Card';
import { CarouselImage, imageData } from './CarouselImage';
import CaraouselCard from './CaraouselCard';

interface CarouselProps {
  isInterval?: boolean;
  duration?: number;
  isImage?: boolean;
  imageData?: imageData;
  isCard?: boolean;
  cardData?: cardtype[];
  itemNumber?: number | null;
  title?: string | null;
}

const Carousel: React.FC<CarouselProps> = ({
  isInterval: _isInterval = 0,
  duration: _duration = 0,
  isImage = false,
  imageData,
  isCard = false,
  cardData,
  itemNumber: _itemNumber = 1,
  title = '',
}) => {
  const [, setIndex] = useState(0);

  const previousRequest = () => {
    setIndex((prevState) => prevState - 1);
  };
  const forwardRequest = () => {
    setIndex((prevState) => prevState + 1);
  };

  return (
    <div className="carousel">
      {title !== '' ? (
        <div className="carousel-title">
          <h3>{title}</h3>
        </div>
      ) : (
        ''
      )}
      <div className="carousel-container">
        <div className="carousel-item">
          {isImage && imageData && <CarouselImage imageData={imageData} />}
          {isCard && cardData && <CaraouselCard cardData={cardData} />}
        </div>
        <div className="carousel-button flexItem justify-space-between">
          <div>
            <button title="previous" onClick={previousRequest}>
              {Icon('left_arrow', '')}
            </button>
          </div>
          <div className="carousel-indicator">
            <div>{Icon('dot_small', '', `#FFFF`)}</div>
            <div>{Icon('dot_big', '', `#FFFF`)}</div>
            <div>{Icon('dot_small', '', `#FFFF`)}</div>
          </div>
          <div>
            <button title="forward" onClick={forwardRequest}>
              {' '}
              {Icon('right_arrow', '', '#FFFF')}
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          blanditiis quis ea!
        </p>
      </div>
    </div>
  );
};

export default Carousel;
