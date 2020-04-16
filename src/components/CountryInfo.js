import React, { Component } from 'react';
import { TiDelete } from 'react-icons/ti';
import Modal from './Modal';
import EditCountry from './EditCountry';
import { FaEdit } from 'react-icons/fa';

class CountryInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayModal: false,
            editMode: false,
            country: []
        }
    }

    removeCountry =(event) => {
        this.props.removeCountry(this.props.name)
      };

    showModal = (event) => {
        event.preventDefault();
        this.setState({displayModal: !this.state.displayModal})
    }

    showEditMode = (event) => {
        this.setState({editMode : !this.state.editMode})
    }

    updateCountry = (updatedCountry) => {
        this.props.updateCountry(updatedCountry)
    }
    

    render(){
        const { name, capital, languages, population, area, currencies, flag, timezones, region, subregion } = this.props
        return(
            <div>
                {!this.state.editMode?
                <div className="card">
                {this.state.displayModal && <Modal removeCountry={this.removeCountry} showModal={this.showModal} name={name}/>}
                <FaEdit onClick={this.showEditMode} className="icon edit"/>
                <TiDelete onClick={this.showModal} className='icon delete'/>
                <img src={flag} alt={`${name} flag`}/>
                <p><span>NAME:</span> {name}</p>
                <p><span>CAPITAL:</span> {capital !== ""? capital: "N/A"}</p>
                <p><span>LANGUAGE:</span> {languages !== ""? languages: "N/A"}</p>
                <p><span>POPULATION:</span> {population !== ""? population: "N/A"}</p>
                <p><span>AREA:</span> {area !== ""? `${area} square metres` : "N/A"}</p>
                <p><span>CURRENCY:</span> {currencies !== ""? currencies: "N/A"}</p>
                <p><span>TIMEZONE:</span> {timezones.length >1 ? timezones.join("/ "): timezones}</p>
                <p><span>REGION:</span> {region !== ""? region: "N/A"}</p>
                <p><span>SUBREGION:</span> {subregion !== ""? subregion: "N/A"}</p>
            </div>
            :
            <EditCountry 
                    name={name}
                    capital={capital}
                    languages={languages}
                    population={population}
                    area={area}
                    currencies={currencies}
                    flag={flag}
                    timezones={timezones}
                    region={region}
                    subregion={subregion}
                    showEditMode={this.showEditMode}
                    updateCountry={this.updateCountry}/>
                }
            </div>
            

        )
    }

}

export default CountryInfo