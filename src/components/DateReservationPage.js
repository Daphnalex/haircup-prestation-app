import React, { Component } from 'react';
import BreadCrumb from "./functionalComponent/BreadCrumbs"

export default class DateReservationPage extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <BreadCrumb page={"DateReservationPage"} />
                </div>
            </div>
        )
    }
}
