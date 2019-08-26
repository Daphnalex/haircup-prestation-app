import React, { Component } from 'react'

const BreadCrumbs = (props) => {
    return (
        <ol className="breadcrumb">
            <li className={props.page === "PrestationListPage" ? 'active' : ''}>
                <a href="/">Liste des prestations à domicile</a>
            </li>
            {(props.page === "AdressReservationPage" || props.page === "DateReservationPage") &&
                <li className={props.page === "AdressReservationPage" && 'active'}>
                    <a href="/adress-reservation">Adresse du rendez-vous</a>
                </li>
            }
            {props.page === "DateReservationPage" &&
                <li className={props.page === "AdressReservationPage" && 'active'}>
                    <a href="/date-reservation">Date du rendez-vous</a>
                </li>
            }
            
        </ol>
    )
}

export default BreadCrumbs;