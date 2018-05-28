import React from 'react';

import GitHubRibbon from 'components/GitHubRibbon';
import Header from 'components/Header';
import MoreCalendars from 'components/Calendar/MoreCalendars';
import './app.scss';

const App = () => (
  <main>
    <GitHubRibbon className="black" />
    <Header />
    <MoreCalendars />
  </main>
);

export default App;
