import React, { Component } from 'react';

function validate (name, capital, languages, population, area, currencies, timezones,flag, region, subregion) {
    return{
        name: name.length === 0,
        capital: capital.length === 0,
        languages: languages.length === 0,
        population: population.length === 0,
        area: area.length === 0,
        currencies: currencies.length === 0,
        timezones: timezones.length === 0,
        flag: flag.length === 0,
        region: region.length === 0,
        subregion: subregion.length === 0,
    };
};

class AddCountry extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            capital:'',
            languages:[{
                name:''
            }],
            population:'',
            area: '',
            currencies:[{
                name: ''
            }],
            flag:'',
            timezones: '',
            region:'',
            subregion: '',
            addCountryDisplay:true,
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
        }else if(name === 'timezones'){
            this.setState({
                timezones: [value]
            })
        }else{
            this.setState({
            [name]: value,
        })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            capital:'',
            languages:[{
                name:''
            }],
            population:'',
            area: '',
            currencies:[{
                name: ''
            }],
            flag:'',
            timezones: '',
            region:'',
            subregion: '',
            addCountryDisplay:true,
        })
        this.props.addCountry(this.state);
    }

    showAddCountry = (event) => {
        event.preventDefault();
        this.setState({addCountryDisplay: false})
    }

    render(){
        const { name, capital, languages, population, area, currencies, timezones,flag, region, subregion, addCountryDisplay } = this.state
        const errors = validate (name, capital, languages, population, area, currencies, timezones, flag, region, subregion)
        let isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
            <div className="add-country-container">
                {addCountryDisplay?
                <button className="show-add-country" onClick={this.showAddCountry}>Add New Country</button>
                :
                <form className="country-info-form" onSubmit={this.handleSubmit}>

                    <h2>Add New Country</h2>

                    <label htmlFor="flag">Flag:</label>
                    <input type="text" value={flag} onChange={this.handleChange} placeholder="Add country flag url" className="form-input" id="flag" name='flag' />

                    <label htmlFor="name">Name:</label>
                    <input type="text" value={name} onChange={this.handleChange} placeholder="Add country name" className="form-input" id="name" name='name' />
                
                    <label htmlFor="capital">Capital:</label>
                    <input type="text" value={capital} onChange={this.handleChange} placeholder="Add country capital" className="form-input" id="capital" name='capital' />

                    <label htmlFor="languages">Languages:</label>
                    <input type="text" value={languages[0].name} onChange={this.handleChange} placeholder="Add country languages" className="form-input" id="languages" name='languages' />

                    <label htmlFor="population">Population:</label>
                    <input type="text" value={population} onChange={this.handleChange} placeholder="Add country population" className="form-input" id="population" name='population' />

                    <label htmlFor="area">Area:</label>
                    <input type="text" value={area} onChange={this.handleChange} placeholder="Add country area" className="form-input" id="area" name='area' />

                    <label htmlFor="currency">Currency:</label>
                    <input type="text" value={currencies[0].name} onChange={this.handleChange} placeholder="Add country currency" className="form-input" id="currency" name='currencies' />

                    <label htmlFor="timezone">Timezone:</label>
                    <input type="text" value={timezones} onChange={this.handleChange} placeholder="Add country timezone" className="form-input"  id="timezone" name='timezones' />

                    <label htmlFor="region">Region:</label>
                    <input type="text" value={region} onChange={this.handleChange} placeholder="Add country region" className="form-input" id="region" name='region' />

                    <label htmlFor="subregion">Subregion:</label>
                    <input type="text" value={subregion} onChange={this.handleChange} placeholder="Add country subregion" className="form-input" id="subregion" name='subregion' />

                    <button type="submit" disabled={isDisabled} className={isDisabled? "btn-disabled": "btn-enabled"}>Update</button>
                </form>
                }
            </div>
            
        )

    }
}

export default AddCountry