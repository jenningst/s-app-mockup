import React from 'react';

const ArrowSlider = ({ direction, clickFunction, glyph }) => {
  return (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }
    >
      { glyph }
    </div>
  );
};

export default ArrowSlider;