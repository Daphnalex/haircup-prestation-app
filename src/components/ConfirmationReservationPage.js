import React, { Component } from 'react';
import ButtonIcon from "../components/functionalComponent/ButtonIcon";

export default class ConfirmationReservationPage extends Component {
    render() {
        return (
            <div>
                Votre réservation a bien été prise en compte.
                <br/>
                Merci de votre visite
                <div className="reservationButton">
                    <ButtonIcon icon="" title="Nouvelle réservation" action={() => window.location.replace("/")}/>
                </div>
            </div>
        )
    }
}
