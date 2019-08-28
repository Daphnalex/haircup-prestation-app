import React, {Component} from "react";

/* eslint-disable import/first */
const moment = require('moment');

import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

import { selectDate } from "../actions/dateSelectionAction";
import { getDate } from "../reducers/dateReducer";
import { getAddress } from "../reducers/addressReducer";

import BreadCrumb from './functionalComponent/BreadCrumbs';
import ButtonIcon from "./functionalComponent/ButtonIcon";

import DatePicker, { registerLocale }  from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr"; // the locale you want
registerLocale("fr", fr); // register it with the name you want



class DateReservationPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            excludeTimes: []
        };
        this.handleChange = this.handleChange.bind(this);
        console.log('constructor',localStorage);
    }

    componentDidMount = () => {
        let dateSelected = new Date();
        console.log(new Date());
        let newExcludeTimes = this.state.excludeTimes;
        let hours = [0,1,2,3,4,5,6,7,8,20,21,22,23];
        let minutes = [0,15,30,45];

        hours.map((hour) => {
            minutes.map((minute) => {
                console.log("heure d'été",(new Date(2010,2,30)).getTimezoneOffset());
                newExcludeTimes = [...newExcludeTimes, new Date(dateSelected.setHours(hour)).setMinutes(minute)];
            })
        });
        this.setState({
            excludeTimes: newExcludeTimes
        })

    }

    handleChange = (date) => {
        this.props.selectDate(date);
    }

    isWeekday = date => {
        const day = date.getDay();
        //filter if not working sunday
        return day !== 0;
    }

    addBooking = () => {
       //window.location.replace('/confirmation-reservation');
        const prestations = localStorage.prestations.split(',');
        const booking = {
            prestations: prestations,
            appointement: moment.parseZone(this.props.startDate).local().format(),
            address: JSON.parse(localStorage.address).description
        }
        console.log("booking",booking);
    }
    
     
    render(){
        
        
        const date = Date.now();
        return (
            <div>
                <BreadCrumb page={"DateReservationPage"} />
                <div className="left">
                    <div className="bold uppercase">Choisissez votre date et votre créneau de rendez-vous : </div>
                    <DatePicker
                        selected={this.props.startDate}
                        onChange={date => this.handleChange(date)}
                        locale="fr"
                        showTimeSelect
                        timeIntervals={15}
                        timeCaption="Horaire"
                        minDate={new Date()}
                        filterDate={this.isWeekday}
                        dateFormat=" d MMMM yyyy, HH:mm"
                        excludeTimes = {this.state.excludeTimes}
                        placeholderText="Cliquer pour sélectionner une date"
                    />
                </div>
                <div>
                {this.props.startDate !== null &&
                    <ButtonIcon action={()=> this.addBooking()} title="Confirmer votre réservation" icon=""/>
                }
                </div>
            </div>
          );
      }
}

const mapStateToProps = (state) => {
    return {
        startDate: getDate(state.dateReducer),
        address: getAddress(state.addressReducer)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectDate: selectDate
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DateReservationPage);