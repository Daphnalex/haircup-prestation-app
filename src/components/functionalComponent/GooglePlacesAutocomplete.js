import React, { Component } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GooglePlacesAutocompleteComponent = (props) => {
    console.log('props autocompletion',props.address.description);
    return (
        <div>
            <GooglePlacesAutocomplete
                placeholder={props.address.description !== "" ? props.address.description : "Indiquer l'adresse"}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: ['fr'],
                    }
                }}
                onSelect={(description) => props.selectAddress(description)}
            />
        </div>
    )
}
export default GooglePlacesAutocompleteComponent;

