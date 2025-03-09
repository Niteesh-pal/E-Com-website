import { useState } from 'react';
import { Image } from '../Image';

type imageData = {
  name: string;
  title?: string;
  description?: string;
}[];

interface imageType {
  imageData: imageData;
}

const CarouselImage = ({ imageData }: imageType) => {
  const [showDesc, setShowDesc] = useState(false);

  const showDescRequest = () => {
    setShowDesc((prevState) => !prevState);
  };

  return (
    <div className="image-carousel-container">
      {imageData.map((item) => (
        <div className="image-carousel-inner">
          {Image(item.name, 'img-carousel')}
          {(item.title || item.description) && (
            <div
              className={
                showDesc
                  ? 'img-carousel-detail showDesc'
                  : 'img-carousel-detail'
              }
            >
              {item.title && <h2>{item.title}</h2>}
              {item.description && (
                <p className="img-carousel-desc" onClick={showDescRequest}>
                  {item.description}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export { CarouselImage };
export type { imageData };
