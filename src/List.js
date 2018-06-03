import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import Character from './Character';

const List = props => (
  <div className="list">
    {_map(props.data, character => <Character key={`${character.characterName}-${character.actorName}`} {...character} />)}
  </div>
);

List.propTypes = {
  data: PropTypes.array
};

export default List;
