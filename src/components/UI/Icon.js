import React from 'react';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const Icon = ({ icon, width, height, color, onClick, iconClass }) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: color,
    },
  };

  const paths = icon.paths.map((path, index) => (
    <path
      key={shortid.generate()}
      d={path}
    />
  ));

  return (
    <svg
      style={styles.svg}
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox={icon.viewBox}
      onClick={onClick}
      className={iconClass}
    >
      {paths}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.shape({
    title: PropTypes.string.isRequired,
    viewBox: PropTypes.string,
    paths: PropTypes.array.isRequired,
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
  iconClass: PropTypes.string,
};

Icon.defaultProps = {
  color: '#18232b',
  onClick: undefined,
  width: 1.5,
  height: 1.5,
  iconClass: 'icon',
};

export default Icon;
