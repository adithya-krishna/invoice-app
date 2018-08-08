import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'components/root';

const rootDiv = document.createElement('div');
rootDiv.setAttribute('id', 'root');

ReactDOM.render(<Root />, document.body.appendChild(rootDiv));
