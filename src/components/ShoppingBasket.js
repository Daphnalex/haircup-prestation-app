import React, { Component } from 'react';
import PropTypes from "prop-types";

import {connect} from "react-redux";

import {getArticles, getTotalShop} from "../reducers/shoppingReducer";

import ButtonIcon from "./functionalComponent/ButtonIcon";

class ShoppingBasket extends Component {

    truncateTitle(article){
        if(article.length>25){
            return article.slice(0,25)+"...";
        } else {
            return article;
        }
    }

    handleChangeQuantity = (event, article) => {
        if (article.quantity < event.target.value){
            this.props.addArticle(article);
        } else {
            this.props.deleteArticle(article);
        }

    }

    saveBasketShop = () => {
        let prestations = [];
        localStorage.setItem('articles',JSON.stringify(this.props.articles));
        this.props.articles.map((article) => {
            prestations = [...prestations, article.reference];
        });
        localStorage.setItem("prestations", prestations);
        window.location.replace('/address-reservation');
    }

    render() {
        return (
            <div>
                {this.props.articles.length === 0 ?
                    <div className="italic">Aucun article dans le panier</div>
                    :
                    <div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Prestation</th>
                                <th scope="col">Prix (en euros)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.articles.map((article,i)=>
                            <tr key={i}>
                                <td>
                                    <span className="titleArticle">{this.truncateTitle(article.title)}</span> x  <input className="quantityArticle" type="number" value={article.quantity} onChange={(event) => this.handleChangeQuantity(event, article)} />
                                </td>
                                <td>
                                    {this.props.transformPrice((article.price*article.quantity)/100)}
                                </td>
                                <td>
                                    <div onClick={()=>this.props.deleteReferenceArticle(article)}><span className="glyphicon glyphicon-trash"></span></div>
                                </td>
                            </tr>
                        )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row" colSpan="3" className="totalShop">
                                    <span className="bold uppercase space">Total :</span> {this.props.transformPrice(this.props.total)} €
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    <ButtonIcon title="Finaliser la réservation" action={()=>this.saveBasketShop()} icon="glyphicon-shopping-cart"/>
                </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.shoppingReducer),
        total: getTotalShop(state.shoppingReducer)
    }
}

ShoppingBasket.propTypes = {
    articles: PropTypes.array,
    total: PropTypes.number
}

export default connect(mapStateToProps)(ShoppingBasket);