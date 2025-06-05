import React from 'react';
import HeroTitle from './HeroTitle';
import HeroBtn from './HeroButton';

const HeroImage = ({ src, alt }) => {
  return (
    <>
        <HeroTitle />
        <div className="containerHeroImage">
            <img
            src={src}
            alt={alt}
            className="imageHero"
            />
        </div>
        <HeroBtn />
    </>
  );
};

export default HeroImage;
