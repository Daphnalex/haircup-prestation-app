import React, { Component } from 'react';
import CategorySection from "./CategorySection";
import ShoppingBasket from "./ShoppingBasket";

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import {fetchPrestations} from "../actions/prestationsAction";
import {addArticle, deleteArticle, deleteReferenceArticle} from "../actions/shoppingAction";
import { getPrestationsPending, getPrestations, getPrestationsError } from "../reducers/prestationsReducer"; 
import { getNumberArticle } from "../reducers/shoppingReducer";



class PrestationListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showBasket: false
        }
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

    //transform decimal price - 5.5€ -> 5,50€
    showViewPrice = (price) => {
        return price.toFixed(2).toString().replace('.',',');
    }

    showShopBasket = (bool) => {
        console.log("montre le panier ?",bool);
        this.setState({
            showBasket: bool
        });
    }

    render() {
        return (
            <div className="container">
                {(this.props.pending || this.props.prestations.length === 0) ? <div>Loading...</div>
                : 
                <div>
                    <h1>Réservations</h1>
                    <h2>{this.props.prestations.title} à domicile</h2>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("man")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice} showShopBasket={this.showShopBasket}/>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("woman")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice} showShopBasket={this.showShopBasket}/>
                    <hr/>
                    <CategorySection prestations={this.getPrestationsByCategory("child")} articles={this.props.articles} addArticle={this.props.addArticle} showViewPrice={this.showViewPrice} showShopBasket={this.showShopBasket}/>
                </div>
                }
                {
                  this.state.showBasket ?
                    <div className="shop row">
                        <div className="col-xs-offset-10 col-xs-2"> <span onClick={()=>this.showShopBasket(false)} className="glyphicon glyphicon-remove"></span></div>
                        <h1>Panier</h1> 
                        <ShoppingBasket showViewPrice={this.showViewPrice} addArticle={this.props.addArticle} deleteArticle={this.props.deleteArticle} deleteReferenceArticle={this.props.deleteReferenceArticle}/>
                    </div>
                  :
                  <div className="shopHidden" onClick={()=>this.showShopBasket(true)}>
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    <div>{this.props.totalArticles}</div>
                  </div>
                }
            </div>
        )
        
    };
};

const mapStateToProps = (state) => {
    return {
        pending: getPrestationsPending(state.prestationsReducer),
        prestations: getPrestations(state.prestationsReducer),
        error: getPrestationsError(state.prestationsReducer),
        totalArticles: getNumberArticle(state.shoppingReducer)
        
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPrestations: fetchPrestations,
    addArticle: addArticle,
    deleteArticle: deleteArticle,
    deleteReferenceArticle: deleteReferenceArticle
    }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(PrestationListPage);