import React, { Component } from 'react';
import axios from 'axios';
import CountryInfo from './CountryInfo';
import AddCountry from './AddCountry';

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const countryA = a.name.toUpperCase();
  const countryB = b.name.toUpperCase();

  let comparison = 0;
  if (countryA > countryB) {
    comparison = 1;
  } else if (countryA < countryB) {
    comparison = -1;
  }
  return comparison;
}


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
        this.setState({countries : [{name: "Please choose a country", numericCode:"default"},...initialCountries] })
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

  updateCountry = (country) => {
    const newCountries = [...this.state.countries];
    const i = newCountries.findIndex(cntr => country.name === cntr.name);
    newCountries.splice(i,1,country);
    this.setState({ countries : newCountries})
  }

  addCountry = (country) => {
    const currentCountries = [...this.state.countries]
    const first = currentCountries.filter(country => country.name === "Please choose a country");
    const newCountries = [country,...currentCountries.filter(country => country.name !== "Please choose a country")];
    newCountries.sort(compare)
    this.setState({ 
      countries : [first[0],...newCountries],
      selectedCountry: country.name})
  }

  render(){
    const { countries, selectedCountry } = this.state
    const optionItems = countries.map( country => 
    <option key={country.name} value={country.name}>{country.name}</option>
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
                key={country.numericCode}
                name={country.name}
                capital={country.capital}
                languages={country.languages[0].name}
                population={country.population}
                area={country.area}
                currencies={country.currencies[0].name}
                flag ={country.flag}
                timezones={country.timezones}
                region={country.region}
                subregion={country.subregion}
                removeCountry={this.removeCountry}
                updateCountry={this.updateCountry}/>
            ))
            :
            <div className="select"><h2>select a country</h2></div>
            }
          <AddCountry 
            addCountry={this.addCountry}/>  
          
            
        </div>
    )
}
  
}



export default Country

