import React, { Component } from 'react'

const ButtonIcon = (props) => {
    return(
        <button type="button" className="btn btn-success" onClick={props.action}>
            <span className={'glyphicon ' + props.icon}>
            </span> {props.title}
        </button>
    )
}

export default ButtonIcon;