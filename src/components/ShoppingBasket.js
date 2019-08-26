import React, { Component } from 'react';

import {connect} from "react-redux";

import {getArticles, getTotalShop} from "../reducers/shoppingReducer";

class ShoppingBasket extends Component {

    constructor(props){
        super(props);
    }

    tronc(article){
        if(article.length>25){
            return article.slice(0,25)+"...";
        } else {
            return article;
        }
    }

    handleChangeQuantity = (event, article) => {
        console.log('event.target.value',event.target.value);
        if (article.quantity < event.target.value){
            console.log('augmente la quantité de l article');
            this.props.addArticle(article);
        } else {
            console.log('on enlève un article');
            this.props.deleteArticle(article);
        }

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
                                    <span className="titleArticle">{this.tronc(article.title)}</span> x  <input className="quantityArticle" type="number" value={article.quantity} onChange={(event) => this.handleChangeQuantity(event, article)} />
                                </td>
                                <td>
                                    {this.props.showViewPrice((article.price*article.quantity)/100)}
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
                                    <span className="bold uppercase space">Total :</span> {this.props.showViewPrice(this.props.total)} €
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    <button type="button" className="btn btn-success" >
                        <span className="glyphicon glyphicon-shopping-cart">
                        </span> Finaliser la réservation
                    </button> 
                </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log('state.shoppingReduce in basket',state.shoppingReducer)
    return {
        articles: getArticles(state.shoppingReducer),
        total: getTotalShop(state.shoppingReducer)
    }
}

export default connect(mapStateToProps)(ShoppingBasket);