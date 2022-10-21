import { api, LightningElement, wire } from 'lwc';
import { getRecordUi } from "lightning/uiRecordApi";

export default class WireGetRecordUi extends LightningElement {

    fieldProp = [
        { fieldName: "AccountNumber", label: "Account Number" },
        { fieldName: "Name", label: "Account Name" },
        { fieldName: "Owner", label: "Account Owner" },
        { fieldName: "Phone", label: "Account Phone Number" },
        { fieldName: "Website", label: "Account Website" }
    ]
    @api recordId
    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: "Full", modes: "Edit" })
    records({ data, error }) {
        if (data) {
            console.log(data);
            this.fieldProp = this.fieldProp.map( item =>{
                if (data.records[this.recordId].fields[item.fieldName].displayValue) {
                    return { ...item, values: data.records[this.recordId].fields[item.fieldName].displayValue }
                } else {
                    return { ...item, values: data.records[this.recordId].fields[item.fieldName].value }
                }
            })
        } if (error) {
            console.error(error);
        }
    }
}