import React, { Component } from 'react'

export default class ManSection extends Component {
    constructor(props){
        super(props);
        console.log("man section",props.prestations);
    }
    render() {
        
        return (
            <div>
                Man section
            </div>
        )
    }
}
