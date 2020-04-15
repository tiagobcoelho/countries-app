import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
    render(){
        const { name, removeCountry, showModal } = this.props
        return(
            <div className="modal">
                <p>Are you sure you want to delete {name}? </p>
                <div>
                    <button onClick={removeCountry}>Delete</button>
                    <button onClick={showModal}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Modal