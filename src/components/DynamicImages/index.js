/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import React from 'react';

const Image = ({ name, style, classes = '' }) => {
  try {
    // Import image on demand
    const image = require(`../../assets/${name}`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return <img className={classes} style={style} src={image} />;
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Image;
