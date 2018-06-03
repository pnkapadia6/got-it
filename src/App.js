import React from 'react';
import _get from 'lodash/get';
import _noop from 'lodash/noop';

import FilterSection from './FilterSection';
import List from './List';
import { FILTERS } from './utils/filters';

import './App.css';

class App extends React.PureComponent {
  state = {}

  onChangeFilter = filters => this.setState({ filters })

  renderList() {
    const { filters = [] } = this.state;
    const listData = _get(FILTERS, [filters[0], 'getData'], _noop)(filters[1]);
    return <List data={listData} />;
  }

  render() {
    return (
      <div className="app">
        <FilterSection selectedFilters={this.state.filters} onChangeFilter={this.onChangeFilter}/>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
