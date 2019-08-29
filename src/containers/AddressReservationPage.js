import React, { Component } from 'react';
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import GooglePlacesAutocompleteComponent from '../components/functionalComponent/GooglePlacesAutocomplete';

import BreadCrumb from "../components/functionalComponent/BreadCrumbs";
import ButtonIcon from "../components/functionalComponent/ButtonIcon";


import {addAddress} from "../actions/addressAction";
import { getAddress } from "../reducers/addressReducer";

class AddressReservationPage extends Component {

    saveAddress = () => {
        localStorage.address = JSON.stringify(this.props.address);
        window.location.replace('/date-reservation');
    }
    
    render() {
        return (
            <div>
                <BreadCrumb page={"AddressReservationPage"} />
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
                    <GooglePlacesAutocompleteComponent id="googlePlace" address={this.props.address} addAddress={this.props.addAddress}/>
                    <div className="form-group">
                        <label htmlFor="inputNumber">Numéro</label>
                        <input type="text" className="form-control" id="inputNumber" disabled={true} placeholder={this.props.address !== null ? this.props.address.terms[0].value : ""}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputStreet">Rue</label>
                        <input type="text" className="form-control" id="inputStreet" disabled={true} placeholder={this.props.address !== null ? this.props.address.terms[1].value : ""}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="inputCity">Ville</label>
                            <input type="text" className="form-control" id="inputCity" disabled={true} placeholder={this.props.address !== null ? this.props.address.terms[2].value : ""}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Pays</label>
                            <input type="text" className="form-control" id="inputState" disabled={true} placeholder={this.props.address !== null ? this.props.address.terms[3].value : ""}/>
                        </div>
                    </div>
                    {(this.props.address !== "" &&
                        <ButtonIcon action={() => this.saveAddress()} title="Réserver votre date" icon=""/>
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
    addAddress: addAddress
}, dispatch) ;

AddressReservationPage.propTypes = {
    address: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressReservationPage);