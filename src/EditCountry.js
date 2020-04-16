import React, { Component } from 'react';
import './App.css';

function validate (name, capital, languages, population, area, currencies, timezones, region, subregion) {
    return{
        name: name.length === 0,
        capital: capital.length === 0,
        languages: languages.length === 0,
        population: population.length === 0,
        area: area.length === 0,
        currencies: currencies.length === 0,
        timezones: timezones.length === 0,
        region: region.length === 0,
        subregion: subregion.length === 0,
    };
};

class EditCountry extends Component{
    constructor(props){
        super(props);
        this.state = {
            numericCode:this.props.numericCode,
            id: this.props.id,
            name: this.props.name,
            capital:this.props.capital,
            languages:[{
                name:this.props.languages
            }],
            population:this.props.population,
            area: this.props.area,
            currencies:[{
                name: this.props.currencies
            }],
            flag:this.props.flag,
            timezones: this.props.timezones,
            region:this.props.region,
            subregion: this.props.subregion,

        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if(name === 'languages'){
            this.setState({
                languages :[ {
                    name: value,
                }]
            })
        }else if(name === 'currencies' ){
            this.setState({
                currencies :[ {
                    name: value,
                }]
            })
        }else{
            this.setState({
            [name]: value,
        })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateCountry(this.state);
        this.props.showEditMode()
    }


    render(){
        const { name, capital, languages, population, area, currencies, timezones,flag, region, subregion } = this.state
        const errors = validate (name, capital, languages, population, area, currencies, timezones, region, subregion)
        let isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
            <form className="country-info-form" onSubmit={this.handleSubmit}>
                <img src={flag} alt={`${name} flag`}/>
                <p><span>NAME:</span> {name}</p>
                
                <label for="capital">Capital:</label>
                <input type="text" value={capital} onChange={this.handleChange} placeholder="Capital" className="form-input" id="capital" name='capital' />

                <label for="languages">Languages:</label>
                <input type="text" value={languages[0].name} onChange={this.handleChange} placeholder="Languages" className="form-input" id="languages" name='languages' />

                <label for="population">Population:</label>
                <input type="text" value={population} onChange={this.handleChange} placeholder="Population" className="form-input" id="population" name='population' />

                <label for="area">Area:</label>
                <input type="text" value={area} onChange={this.handleChange} placeholder="Area" className="form-input" id="area" name='area' />

                <label for="currency">Currency:</label>
                <input type="text" value={currencies[0].name} onChange={this.handleChange} placeholder="Currency" className="form-input" id="currency" name='currency' />

                <label for="timezone">Timezone:</label>
                <input type="text" value={timezones} onChange={this.handleChange} placeholder="Timezone" className="form-input"  id="timezone" name='timezone' />

                <label for="region">Region:</label>
                <input type="text" value={region} onChange={this.handleChange} placeholder="Region" className="form-input" id="region" name='region' />

                <label for="subregion">Subregion:</label>
                <input type="text" value={subregion} onChange={this.handleChange} placeholder="Subregion" className="form-input" id="subregion" name='subregion' />

                <button type="submit" disabled={isDisabled} className={isDisabled? "btn-disabled": "btn-enabled"}>Update</button>
            </form>

        )
    }
}

export default EditCountry