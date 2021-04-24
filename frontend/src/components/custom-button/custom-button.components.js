import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children,blueBtn, ...otherProps }) => (
  <button className={`${blueBtn?"blue-btn":null} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;