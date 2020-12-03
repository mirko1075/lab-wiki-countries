import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }
  render() {
    return (
      <div className="container">
        <Navbar />

        <div className="row">
          <CountriesList countries={this.state.countries} />
          <Switch>
            <Route path="/:countryCode" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch('https://countries.tech-savvy.tech/countries ') // 2.
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        this.setState({ countries: data });
        console.log('state :>> ', this.state);
      });
  }
}

export default App;
