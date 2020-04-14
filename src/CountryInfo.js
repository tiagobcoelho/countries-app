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
                <p><span>LANGUAGE:</span> {languages !== ""? languages: "N/A"}</p>
                <p><span>POPULATION:</span> {population !== ""? population: "N/A"}</p>
                <p><span>AREA:</span> {area !== ""? `${area} square metres` : "N/A"}</p>
                <p><span>CURRENCY:</span> {currency !== ""? currency: "N/A"}</p>
                <p><span>TIMEZONE:</span> {timezone !== ""? timezone.length >1 ? timezone.join("/ "): timezone : "N/A"}</p>
                <p><span>REGION:</span> {region !== ""? region: "N/A"}</p>
                <p><span>SUBREGION:</span> {subregion !== ""? subregion: "N/A"}</p>
            </div>

        )
    }

}

export default CountryInfo