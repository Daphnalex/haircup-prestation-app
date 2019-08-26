import React, { Component } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const GooglePlacesAutocompleteComponent = (props) => {
    return (
        <div>
            <GooglePlacesAutocomplete
                placeholder="Indiquer l'adresse"
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

