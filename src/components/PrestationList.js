import React, { Component } from 'react';
import CategorySection from "./CategorySection";
import ShoppingBasket from "./ShoppingBasket";

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import {fetchPrestations} from "../actions/prestationsAction";
import {addArticle} from "../actions/shoppingAction";
import { getPrestationsPending, getPrestations, getPrestationsError } from "../reducers/prestationsReducer";



class PrestationList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchPrestations();
    }

    getPrestationsByCategory(category){
        let prestationsByCategory = {};
        this.props.prestations.categories.map((element)=>{
            if (element.reference === category){
                prestationsByCategory = element;
                return element;
            }
        })
        return prestationsByCategory;
    }

    showViewPrice = (price) => {
        return price.toString().replace('.',',');
    }

    render() {
        return (
            <div>
                {(this.props.pending || this.props.prestations.length === 0) ? <div>Loading...</div>
                : 
                <div>
                    <h1>Réservations</h1>
                    <h2>{this.props.prestations.title} à domicile</h2>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("man")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice}/>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("woman")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice}/>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("child")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice}/>
                </div>
                }
                <div className="shop">
                    <h1>Panier</h1>
                    <ShoppingBasket showViewPrice={this.showViewPrice}/>
                </div>
            </div>
        )
        
    };
};

const mapStateToProps = (state) => {
    return {
        pending: getPrestationsPending(state.prestationsReducer),
        prestations: getPrestations(state.prestationsReducer),
        error: getPrestationsError(state.prestationsReducer),
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPrestations: fetchPrestations,
    addArticle: addArticle
    }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PrestationList);