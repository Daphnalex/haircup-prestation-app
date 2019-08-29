import React from 'react';

const BreadCrumbs = (props) => {
    return (
        <ol className="breadcrumb">
            <li className={props.page === "PrestationListPage" ? 'active' : ''}>
                <a href="/">Liste des prestations à domicile</a>
            </li>
            {(props.page === "AddressReservationPage" || props.page === "DateReservationPage") &&
                <li className={props.page === "AddressReservationPage" ? 'active' : ''}>
                    <a href="/address-reservation">Adresse du rendez-vous</a>
                </li>
            }
            {props.page === "DateReservationPage" &&
                <li className={props.page === "AddressReservationPage" ? 'active' : ''}>
                    <a href="/date-reservation">Date du rendez-vous</a>
                </li>
            }
            
        </ol>
    )
}

export default BreadCrumbs;