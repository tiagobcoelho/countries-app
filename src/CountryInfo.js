import React, { Component } from 'react';
import './App.css';

class CountryInfo extends Component{
    

    render(){
        const { name, capital, languages, population, area, currency, flag, timezone, region, subregion } = this.props
        return(
            <div className="card">
                <img src={flag} alt={`${name} flag`}/>
                <p><span>NAME:</span> {name}</p>
                <p><span>CAPITAL:</span> {capital !== ""? capital: "N/A"}</p>
                <p><span>LANGUAGE:</span> {languages}</p>
                <p><span>POPULATION:</span> {population}</p>
                <p><span>AREA:</span> {area} square metres</p>
                <p><span>CURRENCY:</span> {currency}</p>
                <p><span>TIMEZONE:</span> {timezone.length >1 ? timezone.join("/ "): timezone}</p>
                <p><span>REGION:</span> {region}</p>
                <p><span>SUBREGION:</span> {subregion}</p>
            </div>

        )
    }

}

export default CountryInfo