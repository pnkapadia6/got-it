import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _isFunction from 'lodash/isFunction';
import _map from 'lodash/map';

import { FILTERS } from './utils/filters';

class FilterSection extends React.PureComponent {
  onClickFilter = e => {
    const { id } = e.currentTarget.dataset;
    if (FILTERS[id].getSubFilters) {
      return;
    }
    this.props.onChangeFilter([id]);
  }

  onClickSubFilter = e => {
    e.stopPropagation();
    const { id, filterId } = e.currentTarget.dataset;
    this.props.onChangeFilter([filterId, id]);
  }

  renderSubFilters(filter, selectedFilter) {
    return _isFunction(filter.getSubFilters) && (
        <div className="sub-filters">
          {filter.getSubFilters().map(subFilter => (
            <div className={classnames('sub-filter', {
              'sub-filter--selected': subFilter.id === selectedFilter
            })}
               key={subFilter.id}
               data-id={subFilter.id}
               data-filter-id={filter.id}
               onClick={this.onClickSubFilter}>
              <div className="sub-filter-name">{subFilter.label}</div>
            </div>
          ))}
        </div>
      )
  }

  render() {
    const { selectedFilters = [] } = this.props;
    return (
      <div className="filters">
        {_map(FILTERS, filter => (
          <div className={classnames('filter', {
            'filter--selected': filter.id === selectedFilters[0]
          })}
               key={filter.id} data-id={filter.id} onClick={this.onClickFilter}>
            <div className="filter-name">{filter.label}</div>
            {this.renderSubFilters(filter, selectedFilters[1])}
          </div>
        ))}
      </div>
    )
  }
}

FilterSection.propTypes = {
  selectedFilters: PropTypes.array,
  onChangeFilter: PropTypes.func,
};

export default FilterSection;
