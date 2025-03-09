import { Image } from './Image';
import '../../assets/MainCss/card.css';
import { ReactNode } from 'react';
type cardtype = {
  name: string;
  title?: string;
  image?: {
    imageName: string;
    className?: string;
  };
  description?: string;
};

interface cardProps {
  card?: cardtype;
  children?: ReactNode;
}

const Card = ({ card, children }: cardProps) => {
  return (
    <div className="card_container">
      {card && (
        <div>
          {card.title && <div className="card_title">{card.title}</div>}
          {card.image && (
            <div className="card_image">
              {Image(
                card.image.imageName,
                card.image.className ? card.image.className : 'card_image',
              )}
            </div>
          )}
          <h3 className="card_name">{card.name}</h3>
          {card.description && (
            <div className="card_description">
              <p>{card.description}</p>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export { Card };
export type { cardtype };
