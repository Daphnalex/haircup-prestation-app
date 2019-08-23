import React, { Component } from 'react';
import ManSection from "./ManSection";
import WomanSection from "./WomanSection";
import ChildrenSection from "./ChildrenSection";

import {connect} from "react-redux";

import fetchPrestations from "../fetchAPI/fetchPrestations";
import { getPrestationsPending, getPrestations, getPrestationsError } from "../reducers/prestationsReducer";
import { bindActionCreators } from 'redux';

class PrestationList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchPrestations();
    }


    render() {
        console.log('prestations',this.props.prestations);
        console.log('pending',this.props.pending);
        return (
            <div>
                {this.props.pending ? <div>Loading...</div>
                : 
                <div>
                    <h1>Réservations</h1>
                    <h2>Coiffure à domicile</h2>
                    <ManSection prestations={this.props.prestations}/>
                </div>
                }
            </div>
        )
        
    };
};

const mapStateToProps = (state) => {
    console.log('state',state);
    return {
        pending: getPrestationsPending(state.prestationsReducer),
        prestations: getPrestations(state.prestationsReducer),
        error: getPrestationsError(state.prestationsReducer)
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPrestations: fetchPrestations
    }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PrestationList);