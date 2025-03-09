// import Card from '../../../utils/common/Card.tsx';
import { Card, cardtype } from '../../../utils/common/Card.tsx';
import Carousel from '../../../utils/common/Carousel/Carousel.tsx';
import { Image } from '../../../utils/common/Image.tsx';

const imageData = [
  {
    name: 'nature.jpg',
    title: 'Nature',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          voluptatum non. Necessitatibus, facilis blanditiis vitae facere saepe
          temporibus non ex sequi quis accusamus architecto quas reprehenderit
          recusandae vero error ab! Saepe, minima fugit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed
          commodi aliquid aspernatur velit explicabo quo nulla pariatur
          provident nobis qui recusandae suscipit vitae, iusto, nostrum voluptas
          reprehenderit sapiente neque totam doloribus! Porro totam eveniet
          nulla eum tenetur harum odit nihil, cupiditate animi non labore?`,
  },
  {
    name: 'nature2.jpg',
    title: 'Nature2',
    description: 'this is what i wanted to make it',
  },
  {
    name: 'nature3.jpg',
    title: 'Natur4',
    description: 'this is what i wanted to make it',
  },
];

const cardData: cardtype[] = [
  {
    // title: 'title 1',
    name: 'name 1',
    image: {
      imageName: 'cardImage1.webp',
      className: 'card_image',
    },
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          voluptatum non. Necessitatibus, facilis blanditiis vitae facere saepe
          temporibus non ex sequi quis accusamus architecto quas reprehenderit
          recusandae vero error ab! Saepe, minima fugit!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          voluptatum non. Necessitatibus, facilis blanditiis vitae facere saepe
          temporibus non ex sequi quis accusamus architecto quas reprehenderit
          recusandae vero error ab! Saepe, minima fugit!
          `,
  },
  {
    title: 'title 2',
    name: 'name 2',
    image: {
      imageName: 'cardImage2.jpg',
      className: 'card_image',
    },
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          voluptatum non. Necessitatibus, facilis blanditiis vitae facere saepe
          temporibus non ex sequi quis accusamus architecto quas reprehenderit
          recusandae vero error ab! Saepe, minima fugit!`,
  },
];
export default function About() {
  return (
    <div className="container">
      <div className="gridItem heading">
        <div className="heading-large">About Us</div>
        <div className="right">
          <div className="image-holder">
            {Image('building1.jpg', '', '100%', '100%', '0.3rem')}
          </div>
        </div>
      </div>
      <div className="margin-side-1">
        <h3>Our Story</h3>

        <div className=" par-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          voluptatum non. Necessitatibus, facilis blanditiis vitae facere saepe
          temporibus non ex sequi quis accusamus architecto quas reprehenderit
          recusandae vero error ab! Saepe, minima fugit!
        </div>
      </div>
      <div className="margin-side-1">
        <h3>Mission</h3>

        <div className=" par-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed
          commodi aliquid aspernatur velit explicabo quo nulla pariatur
          provident nobis qui recusandae suscipit vitae, iusto, nostrum voluptas
          reprehenderit sapiente neque totam doloribus! Porro totam eveniet
          nulla eum tenetur harum odit nihil, cupiditate animi non labore?
        </div>
      </div>
      <div className="margin-side-1">
        <div>
          <Carousel
            isInterval={true}
            duration={0}
            isImage={true}
            imageData={imageData}
            // isCard={true}
            // itemNumber={1}
            title={'New Article'}
          ></Carousel>
        </div>
      </div>
      <div className="margin-side-1">
        <h3>Leaders</h3>
        <div className="leaders_container">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
