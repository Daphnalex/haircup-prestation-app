import React, { Component } from 'react';

export default class CategorySection extends Component {
    constructor(props){
        super(props);
    }

    addArticle = (article) => {
        this.props.addArticle(article);
    }

    render() {
        
        return (
            <div>
                <h3>{this.props.prestations.title}</h3>
                <div className="row">
                    {this.props.prestations.prestations.map((prestation) => (
                        <div key={prestation.reference} className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <form className="caption">
                                    <h4>{prestation.title}</h4>
                                    <p><span className="bold">Durée:</span> {prestation.duration} min</p>
                                    <p><span className="bold">Prix:</span> {this.props.showViewPrice(prestation.price/100)} €</p>
                                    <p className="reservationButton">
                                        <button type="button" className="btn btn-success" onClick={()=>this.addArticle(prestation)}>
                                            <span className="glyphicon glyphicon-shopping-cart">
                                            </span> Réserver
                                        </button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }convertPrice
}
