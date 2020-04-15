import React, { Component } from 'react';
import './App.css';
import { TiDelete } from 'react-icons/ti';
import Modal from './Modal';

class CountryInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayModal: false,
        }
    }

    removeCountry =(event) => {
        this.props.removeCountry(this.props.name)
      };

    showModal = (event) => {
        event.preventDefault();
        this.setState({displayModal: !this.state.displayModal})
    }
    

    render(){
        const { name, capital, languages, population, area, currency, flag, timezone, region, subregion } = this.props
        return(
            <div className="card">
                {this.state.displayModal && <Modal removeCountry={this.removeCountry} showModal={this.showModal} name={name}/>}
                <TiDelete onClick={this.showModal} className='icon delete'/>
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