import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children,blueBtn,inverted, ...otherProps }) => (
  <button className={`${inverted?"inverted":""} ${blueBtn?"blue-btn":""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;