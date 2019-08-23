import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import * as Button from "react-bootstrap";

export default class CategorySection extends Component {
    constructor(props){
        super(props);
        console.log("haircut section",this.props.prestations);
    }

    convertPrice(price){
        return price/100;
    }
    render() {
        
        return (
            <div>
                <h3>{this.props.prestations.title}</h3>
                <div className="row">
                    {this.props.prestations.prestations.map((prestation) => (
                        <div key={prestation.reference} className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <h4>{prestation.title}</h4>
                                    <p><span className="bold">Durée:</span> {prestation.duration} min</p>
                                    <p><span className="bold">Prix:</span> {this.convertPrice(prestation.price).toString().replace('.',',')} €</p>
                                    <p className="reservationButton">
                                        <button type="button" className="btn btn-success">
                                            <span className="glyphicon glyphicon-shopping-cart">
                                            </span> Réserver
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
