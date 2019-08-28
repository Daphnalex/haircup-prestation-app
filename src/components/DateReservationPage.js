import React, {Component} from "react";

import moment from 'moment';

import BreadCrumb from './functionalComponent/BreadCrumbs';
import ButtonIcon from "./functionalComponent/ButtonIcon";

import DatePicker, { registerLocale }  from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr"; // the locale you want
registerLocale("fr", fr); // register it with the name you want



export default class DateReservationPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: null,
            excludeTimes: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        let dateSelected = new Date();
        console.log(new Date());
        let newExcludeTimes = this.state.excludeTimes;
        let hours = [0,1,2,3,4,5,6,7,8,20,21,22,23];
        let minutes = [0,15,30,45];

        hours.map((hour) => {
            minutes.map((minute) => {
                newExcludeTimes = [...newExcludeTimes, new Date(dateSelected.setHours(hour)).setMinutes(minute)];
            })
        });
        this.setState({
            excludeTimes: newExcludeTimes
        })

    }

    componentDidUpdate = () => {
        console.log('update');

        
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    isWeekday = date => {
        const day = date.getDay();
        //filter if not working sunday
        return day !== 0;
    }

    
     
    render(){
        
        
        const date = Date.now();
        return (
            <div>
                <BreadCrumb page={"DateReservationPage"} />
                <div className="left">
                    <div className="bold uppercase">Choisissez votre date et votre créneau de rendez-vous : </div>
                    <DatePicker
                        selected={this.state.startDate}
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
                {this.state.startDate !== null &&
                    <ButtonIcon action={()=> window.location.replace('/confirmation-reservation')} title="Confirmer votre réservation" icon=""/>
                }
                </div>
            </div>
          );
      }
}