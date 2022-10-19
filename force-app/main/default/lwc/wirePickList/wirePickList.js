import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValues } from "lightning/uiObjectInfoApi";
import IND from "@salesforce/schema/Account.Industry"
import TYPE from "@salesforce/schema/Account.Type"
import ACC from "@salesforce/schema/Account"

export default class WirePickList extends LightningElement {

    selected = ''
    options = []
    selectedOne = ''
    optionsOne = []
    @wire(getObjectInfo, {objectApiName: ACC})
    objInfo

    @wire(getPicklistValues, {recordTypeId: '$objInfo.data.defaultRecordTypeId', fieldApiName: IND})
    defaultPickList({data, error}){
        if (data) {
            this.options = [...this.pickList(data)]
        }
        if (error) {
            console.error(error);
        }
    }

    pickList(data){
        return data.values.map(item =>({label: item.label, value: item.value}))
    }

    handleChange(event){
        this.selected = event.detail.value
    }

    @wire(getPicklistValues, {recordTypeId: '$objInfo.data.defaultRecordTypeId', fieldApiName: TYPE})
    defaultPickLisOne({data, error}){
        if (data) {
            this.optionsOne = [...this.pickListOne(data)]
        }
        if (error) {
            console.error(error);
        }
    }

    pickListOne(data){
        return data.values.map(item =>({label: item.label, value: item.value}))
    }

    handleChangeOne(event){
        this.selectedOne = event.detail.value
    }
}

