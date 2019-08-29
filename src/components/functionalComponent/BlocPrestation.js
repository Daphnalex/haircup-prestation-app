import React from 'react';

import ButtonIcon from "./ButtonIcon"

const BlocPrestation = (props) => {
    return(
        <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
                <form className="caption">
                    <h4>{props.prestation.title}</h4>
                    <p><span className="bold">Durée:</span> {props.prestation.duration} min</p>
                    <p><span className="bold">Prix:</span> {props.transformPrice(props.prestation.price/100)} €</p>
                    <p className="reservationButton">
                        <ButtonIcon action={()=>props.addArticle(props.prestation)} title="Réserver" icon="glyphicon-shopping-cart"/>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default BlocPrestation;