import _castArray from 'lodash/castArray';
import _orderBy from 'lodash/orderBy';
import _take from 'lodash/take';

import { houses, characters, characterByHouse } from '../data/parsedData';

const TOP_KILLERS_COUNT = 10;

export const FILTERS = {
  HOUSE: {
    id: 'HOUSE',
    label: 'Houses',
    getSubFilters: () => houses.map(house => ({
      id: house,
      label: house
    })),
    getData: house => characterByHouse[house]
  },
  ROYALS: {
    id: 'ROYALS',
    label: 'Royals',
    getData: () => characters.filter(character => character.royal)
  },
  TOP_KILLERS: {
    id: 'TOP_KILLERS',
    label: `Top ${TOP_KILLERS_COUNT} Killers`,
    getData: () => {
      const groupedByKilledCount = _orderBy(characters, character => _castArray(character.killed).length, 'desc');
      return _take(groupedByKilledCount, TOP_KILLERS_COUNT);
    }
  }
};
