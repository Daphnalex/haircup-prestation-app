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
        const {prestations, error, pending} = this.props;
        if(pending === true) return <div>En cours de chargement...</div>
        
        return (
            <div>
                <h1>Réservations</h1>
                <h2>Coiffure à domicile</h2>
                <hr/>
                <div className="sectionCategory">
                    {error ? 
                        <div>
                            Une erreur a été détecté
                            <br/>
                            {error}
                        </div>
                        :
                        <div>
                            <ManSection prestations={prestations}/>
                            <hr/>
                            <WomanSection prestations={prestations}/>
                            <hr/>
                            <ChildrenSection prestations={prestations}/>
                        </div>
                    }
                    
                    
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        pending: getPrestationsPending(state),
        prestations: getPrestations(state),
        error: getPrestationsError(state)
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPrestations: fetchPrestations
    }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PrestationList);