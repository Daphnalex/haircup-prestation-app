import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import CategorySection from "../components/CategorySection";
import ShoppingBasket from "../components/ShoppingBasket";
import BreadCrumb from "../components/functionalComponent/BreadCrumbs";

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
        //call API : get all prestations
        this.props.fetchPrestations();
    }

    //transform decimal price - 5.5€ -> 5,50€
    transformPrice = (price) => {
        return price.toFixed(2).toString().replace('.',',');
    }

    //display of hide the basket shop bloc
    showShopBasket = (bool) => {
        this.setState({
            showBasket: bool
        });
    }

    render() {
        return (
            <div>
                <BreadCrumb page={"PrestationListPage"} />
                {(this.props.pending || this.props.prestations === null) ? <div>Loading...</div>
                : 
                <div>
                    <h1>Réservations</h1>
                    <h2>{this.props.prestations.title} à domicile</h2>
                    {
                        this.props.prestations.categories.map((element) => (
                            <div key={element.reference}>
                                <hr/>
                                <CategorySection prestations={element} articles={this.props.articles} addArticle={this.props.addArticle} transformPrice={this.transformPrice} showShopBasket={this.showShopBasket}/>
                            </div>
                        ))
                    }
                </div>
                }
                {
                  this.state.showBasket ?
                    <div className="shop row">
                        <div className="col-xs-offset-10 col-xs-2"> <span onClick={()=>this.showShopBasket(false)} className="glyphicon glyphicon-remove"></span></div>
                        <h1>Panier</h1> 
                        <ShoppingBasket transformPrice={this.transformPrice} addArticle={this.props.addArticle} deleteArticle={this.props.deleteArticle} deleteReferenceArticle={this.props.deleteReferenceArticle}/>
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

PrestationListPage.propTypes = {
    pending: PropTypes.bool,
    prestations: PropTypes.object,
    error: PropTypes.string,
    totalArticles: PropTypes.number
}

export default connect(mapStateToProps,mapDispatchToProps)(PrestationListPage);