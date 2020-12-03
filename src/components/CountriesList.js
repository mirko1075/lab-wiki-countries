import React, { Component } from 'react';
// import data from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    const data = this.props.countries;
    console.log('Props:', this);
    return (
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {data.map((country) => {
            return (
              <Link
                key={country.cca3}
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
              >
                {country.flag} {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
