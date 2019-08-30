import React, { Component } from 'react'
import ButtonIcon from '../components/functionalComponent/ButtonIcon';

const PageNotFound = ()  =>{
    return (
        <div>
              <h1> PAGE NOT FOUND </h1>
              <ButtonIcon icon='' title="Redirection vers la page d'accueil" action={()=>window.location.replace('/')} />
        </div>
     )
}

export default PageNotFound;