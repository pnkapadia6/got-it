import _castArray from 'lodash/castArray';
import _compact from 'lodash/compact';
import _keys from 'lodash/keys';
import _last from 'lodash/last';
import _reduce from 'lodash/reduce';
import _sortBy from 'lodash/sortBy';

import data from './data';

const NO_HOUSE_NAME = '[No house]';
export const characters = data.characters;

export const characterByHouse = _reduce(characters, (houseMap, character) => {
  const houseNames = _castArray(character.houseName);
  houseNames.forEach(houseName => {
    if (!houseName) {
      houseName = NO_HOUSE_NAME;
    }
    if (!houseMap[houseName]) {
      houseMap[houseName] = [];
    }
    houseMap[houseName].push(character);
  });
  return houseMap;
}, {});

const getCharacterId = character => _last(_compact((character.characterLink || '').split('/')));

export const characterMap = _reduce(characters, (charMap, character) => {
  const characterId = getCharacterId(character);
  if (!characterId) {
    return charMap;
  }
  if (!charMap[characterId]) {
    charMap[characterId] = [];
  }
  charMap[characterId].push(character);
  return charMap;
}, {});

export const houses = _sortBy(_keys(characterByHouse), house => house === NO_HOUSE_NAME);
