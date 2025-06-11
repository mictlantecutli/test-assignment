import React from 'react';
import HeroTitle from './HeroTitle';
import HeroTitleTwo from './HeroTitleTwo';
import HeroButton from './HeroButton';

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
        <HeroButton />
        <HeroTitleTwo />
    </>
  );
};

export default HeroImage;
