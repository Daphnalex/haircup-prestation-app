import React, { Component } from 'react';
import ManSection from "./ManSection";
import WomanSection from "./WomanSection";
import ChildrenSection from "./ChildrenSection";

export default class PrestationList extends Component {
    render() {
        return (
            <div>
                <h1>Réservations</h1>
                <h2>Coiffure à domicile</h2>
                <hr/>
                <ManSection />
                <hr/>
                <WomanSection />
                <hr/>
                <ChildrenSection />
            </div>
        )
    };
};
