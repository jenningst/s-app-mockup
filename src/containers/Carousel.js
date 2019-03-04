import React, { useState } from 'react';
import ImageSlide from '../components/ImageSlide';
import ArrowSlider from '../components/ArrowSlider';

const Carousel = ({ imgUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = imageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : imageIndex - 1;
    // set index
    setImageIndex(index);
  }

  function nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const shouldResetIndex = imageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : imageIndex + 1;
    // set index
    setImageIndex(index);
  };

  // TODO: imgUrls not rendering

  return (
    <div className="carousel">
      <ImageSlide
        url={ imgUrls[imageIndex] }
      />
      <div className="arrow-sliders">
        <ArrowSlider 
          direction="left"
          clickFunction={ previousSlide }
          glyph="&#9664;"
        />
        <ArrowSlider 
          direction="right"
          clickFunction={ nextSlide }
          glyph="&#9654;"
        />
      </div>
    </div>
  );
};

export default Carousel;