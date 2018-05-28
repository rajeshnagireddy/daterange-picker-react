import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';
import 'styles/app.scss';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <App />,
  MOUNT_NODE
);

document.getElementById('loader').remove();
