import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import Header from '../components/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
