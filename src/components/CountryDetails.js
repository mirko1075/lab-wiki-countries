import React, { Component } from 'react';
import data from '../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  render() {
    // console.log('CCode :>> ', this.props.match.params.countryCode);
    const foundCountry = data.find(
      (element) => element.cca3 === this.props.match.params.countryCode
    );
    const bordersCca3 = [...foundCountry.borders];
    let bordersCountries = data.filter((country) => {
      if (bordersCca3.indexOf(country.cca3) > -1) {
        return true;
      } else {
        return false;
      }
    });
    // console.log('BordersArr :>> ', bordersCountries);
    // console.log('foundCountry :>> ', foundCountry);
    return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {bordersCountries.map((country) => {
                    return (
                      <li key={country.cca3}>
                        <Link to={'/' + country.cca3}>
                          {country.name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
