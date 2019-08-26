import React, { Component } from 'react'

const BlocPrestation = (props) => {
    return(
        <div key={props.prestation.reference} className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <form className="caption">
                    <h4>{props.prestation.title}</h4>
                    <p><span className="bold">Durée:</span> {props.prestation.duration} min</p>
                    <p><span className="bold">Prix:</span> {props.showViewPrice(props.prestation.price/100)} €</p>
                    <p className="reservationButton">
                        <button type="button" className="btn btn-success" onClick={()=>props.addArticle(props.prestation)}>
                           <span className="glyphicon glyphicon-shopping-cart">
                           </span> Réserver
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default BlocPrestation;