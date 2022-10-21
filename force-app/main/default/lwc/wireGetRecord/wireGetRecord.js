import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from "lightning/uiRecordApi";
import NAME from "@salesforce/schema/Account.Name"
import NUMBER from "@salesforce/schema/Account.AccountNumber"
import OWNER from "@salesforce/schema/Account.Owner.Name"
import REVENUE from "@salesforce/schema/Account.AnnualRevenue"


export default class WireGetRecord extends LightningElement {

    @api recordId
    name
    number
    owner
    annualrevenue

    @wire(getRecord, { recordId: '$recordId', fields: [NAME, NUMBER, OWNER, REVENUE] })
    record({ data, error }) {
        if (data) {
            console.log(data);
            this.name = getFieldValue(data, NAME)
            this.number = getFieldValue(data, NUMBER)
            this.owner = getFieldValue(data, OWNER)
            this.annualrevenue = getFieldDisplayValue(data, REVENUE)
        }
    }
}