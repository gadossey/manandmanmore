// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import 'prismjs/themes/prism.css';
import 'katex/dist/katex.min.css';

import React from 'react';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
    </>
  );
};