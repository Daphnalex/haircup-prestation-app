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

    }

    render() {
        return (
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
                                {this.tronc(article.title)} x  <input type="number" value={article.quantity} onChange={(event) => this.handleChangeQuantity(event, article)} />
                            </td>
                            <td>
                                {this.props.showViewPrice((article.price*article.quantity)/100)}
                            </td>
                            <td>
                                <span className="glyphicon glyphicon-trash"></span>
                            </td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colspan="3" className="totalShop">
                                <span className="bold uppercase space">Total :</span> {this.props.showViewPrice(this.props.total)} €
                            </th>
                        </tr>
                    </tfoot>
                </table>

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