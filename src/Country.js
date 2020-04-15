import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CountryInfo from './CountryInfo';


class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries:[],
      selectedCountry:"Please choose a country",
    }
  }

  componentDidMount(){
    let initialCountries = [];
    const url = "https://restcountries.eu/rest/v2/all"
    axios.get(url)
      .then(response => response.data)
      .then(countryData =>{
        initialCountries = countryData.map(country => {
          return country
        });
        this.setState({countries : [{name: "Please choose a country", alpha3Code:"default"},...initialCountries] })
      }) 
  }

  handleChange = (event) => {
      const value = event.target.value;
      this.setState({selectedCountry : value})
  }

  removeCountry =(name) => {
    const cntr = this.state.countries.filter( country => 
      country.name !== name
    )
    this.setState({ 
        countries: cntr,
        selectedCountry: "Please choose a country"  });
  };

  render(){
    const { countries, selectedCountry } = this.state
    const optionItems = countries.map( country => 
    <option key={country.alpha3Code} value={country.name}>{country.name}</option>
    )
    return(
        <div>
          <select onChange={this.handleChange}>
              {optionItems}
          </select>
        
          {selectedCountry !== "Please choose a country"? 
          countries.filter(country => country.name === selectedCountry)
            .map(country => (
              <CountryInfo
                key={country.alpha3Code}
                name={country.name}
                capital={country.capital}
                languages={country.languages[0].name}
                population={country.population}
                area={country.area}
                currency={country.currencies[0].name}
                flag ={country.flag}
                timezone={country.timezones}
                region={country.region}
                subregion={country.subregion}
                removeCountry={this.removeCountry}/>
            ))
            :
            <div className="select"><h2>select a country</h2></div>
            }
          
            
        </div>
    )
}
  
}



export default Country

