import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Card = ({ children, title, image }) => {
  return (
    <div className="flex flex-col bg-background shadow-lg rounded-lg h-full">
      <GatsbyImage
        image={getImage(image)}
        className="rounded-t-lg"
        objectFit="cover"
        objectPosition="center"
        alt={title}
      />
      {children}
    </div>
  );
};

export default Card;
