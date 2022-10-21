import { LightningElement } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import CONT from "@salesforce/schema/Contact"
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateRecordAdapter extends LightningElement {

    fieldss = {}
    changeHandler(event){
        const {name, value} = event.target
        this.fieldss[name] = value
    }

    createHandler(){
        const record = {apiName: CONT.objectApiName, fields: this.fieldss}
        createRecord(record).then(result =>{
            this.Toast("Record Created Successfully", `Your Record is created with ${result.id} Record Id`, "success")
            this.template.querySelector('form.create').reset()
            this.fieldss = {}
        }).catch(error =>{
            this.Toast("Something went wrong!!", error.body.message, "error")
        })
    }

    Toast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant || success
        }))
    }
}