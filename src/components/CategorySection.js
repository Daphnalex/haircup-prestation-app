import React, { Component } from 'react';

import BlocPrestation from "./functionalComponent/BlocPrestation";

export default class CategorySection extends Component {

    addArticle = (article) => {
        this.props.addArticle(article);
        this.props.showShopBasket(true);
    }

    render() {
        
        return (
            <div>
                <h3>{this.props.prestations.title}</h3>
                <div className="row">
                    {this.props.prestations.prestations.map((prestation) => (
                        <BlocPrestation key={prestation.reference} prestation={prestation} addArticle={this.addArticle} transformPrice={this.props.transformPrice}/>
                    ))}
                </div>
            </div>
        )
    }
}
