import React, { Component } from 'react';

import { connect } from "react-redux";

import GooglePlacesAutocompleteComponent from './functionalComponent/GooglePlacesAutocomplete';

import BreadCrumb from "./functionalComponent/BreadCrumbs";
import ButtonIcon from "./functionalComponent/ButtonIcon";
import { bindActionCreators } from 'redux';

import { selectAddress } from "../actions/addressSelectionAction";
import { getAddress } from "../reducers/addressReducer";

class AdressReservationPage extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        console.log("new address", this.props.address);
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
                    <GooglePlacesAutocompleteComponent id="googlePlace" address={this.props.address} selectAddress={this.props.selectAddress}/>
                    <div className="form-group">
                        <label htmlFor="inputNumber">Numéro</label>
                        <input type="text" className="form-control" id="inputNumber" disabled={true} placeholder={this.props.address !== "" ? this.props.address.terms[0].value : ""}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputStreet">Rue</label>
                        <input type="text" className="form-control" id="inputStreet" disabled={true} placeholder={this.props.address !== "" ? this.props.address.terms[1].value : ""}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="inputCity">Ville</label>
                            <input type="text" className="form-control" id="inputCity" disabled={true} placeholder={this.props.address !== "" ? this.props.address.terms[2].value : ""}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Pays</label>
                            <input type="text" className="form-control" id="inputState" disabled={true} placeholder={this.props.address !== "" ? this.props.address.terms[3].value : ""}/>
                        </div>
                    </div>
                    {(this.props.address !== "" &&
                        <ButtonIcon action={()=> window.location.replace('/date-reservation')} title="Réserver votre date" icon=""/>
                    )}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        address: getAddress(state.addressReducer)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectAddress: selectAddress
}, dispatch) ;

export default connect(mapStateToProps, mapDispatchToProps)(AdressReservationPage);