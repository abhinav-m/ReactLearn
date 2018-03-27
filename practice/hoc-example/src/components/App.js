import React, { Component } from 'react';

import List from './List';
import withData from './withData';

/* Using the withData higher order component, we
can use define different ways of fetching the data,and use it
with different components to recieve the data!
(Here we use it against a List component) */

const DotaMatches = withData(
  List,
  fetch('https://api.opendota.com/api/publicMatches').then(data => data.json()),
  'Dota matches'
);

const MatchesDistribution = withData(
  List,
  fetch('https://api.opendota.com/api/distributions')
    .then(data => data.json())
    .then(data => data.ranks.rows),
  'Dota matches distribution'
);

const AnimeEpisodes = withData(
  List,
  fetch('http://api.jikan.me//anime/1/episodes')
    .then(data => data.json())
    .then(data => data.episode),
  'Some random anime data'
);

export default class App extends Component {
  render() {
    return (
      <div>
        <DotaMatches />;
        <MatchesDistribution />
        <AnimeEpisodes />
      </div>
    );
  }
}
