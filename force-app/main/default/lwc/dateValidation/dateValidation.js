import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class DateValidation extends LightningElement {

    startDate
    endDate

    dateChange(event){
        const {name, value} = event.target
        this[name] = value
    }

    dateValidate(){
        if(this.validate(this.startDate, this.endDate)){
            this.dispatchEvent(new ShowToastEvent({
                title: "Successfull!!",
                message:'You have entered the Dates correctly...',
                variant:"success"
            }))
        } else{
            this.dispatchEvent(new ShowToastEvent({
                title: "Wrong!!!",
                message: 'You have entered the Dates incorrectly...',
                variant: "error"
            }))
        }
    }

    validate(start, end){
        return new Date(start).getTime()< new Date(end).getTime()
    }
}