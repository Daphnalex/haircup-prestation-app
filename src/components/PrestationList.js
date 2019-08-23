import React, { Component } from 'react';
import CategorySection from "./CategorySection";

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

    getPrestation(category){
        console.log("test category",category);
        let prestationsByCategory = {};
        this.props.prestations.categories.map((element)=>{
            console.log('element',element);
            if (element.reference === category){
                prestationsByCategory = element;
                console.log('element',element);
                return element;
            }
        })
        return prestationsByCategory;
    }

    render() {
        console.log('prestations',this.props.prestations);
        console.log('pending',this.props.pending);
        return (
            <div>
                {(this.props.pending || this.props.prestations.length === 0) ? <div>Loading...</div>
                : 
                <div>
                    <h1>Réservations</h1>
                    <h2>{this.props.prestations.title} à domicile</h2>
                    <hr/>
                    <CategorySection prestations={this.getPrestation("man")} />
                    <hr/>
                    <CategorySection prestations={this.getPrestation("woman")}/>
                    <hr/>
                    <CategorySection prestations={this.getPrestation("child")}/>
                </div>
                }
                <div className="shop">
                    <h1>Panier</h1>
                </div>
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