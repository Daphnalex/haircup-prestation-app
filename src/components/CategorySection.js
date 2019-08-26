import React, { Component } from 'react';

import BlocPrestation from "./functionalComponent/BlocPrestation";

export default class CategorySection extends Component {
    constructor(props){
        super(props);
    }

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
                        <BlocPrestation key={prestation.reference} prestation={prestation} addArticle={this.addArticle} showViewPrice={this.props.showViewPrice}/>
                    ))}
                </div>
            </div>
        )
    }
}
