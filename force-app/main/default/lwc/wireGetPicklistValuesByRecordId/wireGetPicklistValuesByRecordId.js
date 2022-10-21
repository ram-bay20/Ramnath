import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from "lightning/uiObjectInfoApi";
import ACC from "@salesforce/schema/Account"

export default class WireGetPicklistValuesByRecordId extends LightningElement {

    selected = ''
    selectedOne = ''
    options = []
    optionsOne = []
    @wire(getObjectInfo, { objectApiName: ACC })
    objInfo

    @wire(getPicklistValuesByRecordType, { objectApiName: ACC, recordTypeId: '$objInfo.data.defaultRecordTypeId' })
    pickListHandle({data, error}){
        if (data) {
            console.log(data);
            this.options = [...this.getPicked(data.picklistFieldValues.Industry)]
            this.optionsOne = [...this.getPicked(data.picklistFieldValues.Rating)]
        }
        if (error) {
            console.error(error);
        }
    }

    getPicked(data){
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }

    handleChange(event){
        const {name, value} = event.target
        if (name === "Industry") {
            this.selected = value
        }
        if (name === "Rating") {
            this.selectedOne = value
        }
    }
}