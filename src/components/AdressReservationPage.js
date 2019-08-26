import React, { Component } from 'react';

import GooglePlacesAutocompleteComponent from './functionalComponent/GooglePlacesAutocomplete';

import BreadCrumb from "./functionalComponent/BreadCrumbs";
import ButtonIcon from "./functionalComponent/ButtonIcon";

export default class AdressReservationPage extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            address: "",
            inputNumber: "",
            inputStreet: "",
            inputState: ""
        }  
    }

    selectAddress = (description) => {
        this.setState({
            address: description
        }, () => {
            console.log('adress before split',this.state.address);
            let addressArray = this.state.address.terms;
            console.log('tableau adresse',addressArray);
            this.setState({
                inputNumber: addressArray[0].value,
                inputStreet: addressArray[1].value,
                inputCity: addressArray[2].value,
                inputState: addressArray[3].value
            })
        });
        
    }
    
    render() {
        console.log("new address", this.state.address);
        return (
            <div className="container">
                <BreadCrumb page={"AdressReservationPage"} />
                <form>
                    <div className="form-row">
                        <label htmlFor="name">Nom</label>
                        <input type="text" className="form-control" id="name" placeholder="Indiquer votre nom" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Indiquer votre prénom" />
                    </div>
                    <hr/>
                    <GooglePlacesAutocompleteComponent id="googlePlace" address={this.state.address} selectAddress={this.selectAddress}/>
                    <div className="form-group">
                        <label htmlFor="inputNumber">Numéro</label>
                        <input type="text" className="form-control" id="inputNumber" disabled={true} placeholder={this.state.inputNumber}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputStreet">Rue</label>
                        <input type="text" className="form-control" id="inputStreet" disabled={true} placeholder={this.state.inputStreet}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="inputCity">Ville</label>
                            <input type="text" className="form-control" id="inputCity" disabled={true} placeholder={this.state.inputCity}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Pays</label>
                            <input type="text" className="form-control" id="inputState" disabled={true} placeholder={this.state.inputState}/>
                        </div>
                    </div>
                    <ButtonIcon action={()=> window.location.replace('/date-reservation')} title="Réserver votre date" icon=""/>
                </form>
            </div>
        )
    }
}
