import React, {Component} from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }

    this.fetchFilters = this.fetchFilters.bind(this)
    this.changeFilter = this.changeFilter.bind(this)
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(result => result.json())
      .then(filters => this.setState({ filters }))
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(result => result.json)
      .then(fruit => this.setState({ fruit }))
  }

  changeFilter(e) {
    this.setState({ currentFilter: e.target.value})
  }

  render() {
    return(
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.changeFilter} />
    )
  }

}
