import React, { Component } from 'react';

import {connect} from "react-redux";

import {getArticles} from "../reducers/shoppingReducer";

class ShoppingBasket extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Prestation</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix (en euros)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.articles.map((article,i)=>
                        <tr key={i}>
                            <td>
                                {article.title}
                            </td>
                            <td>
                                {article.duration}
                            </td>
                            <td>
                                {article.quantity}
                            </td>
                            <td>
                                {((article.price*article.quantity)/100)}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('state.shoppingReduce in basket',state.shoppingReducer)
    return {
        articles: getArticles(state.shoppingReducer)
    }
}

export default connect(mapStateToProps)(ShoppingBasket);