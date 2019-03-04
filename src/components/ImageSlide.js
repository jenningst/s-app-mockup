import React from 'react';

const ImageSlide = ({ url }) => {
  // TODO: determine if we're using css-in-js or modules
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}/>
  );
};

export default ImageSlide;