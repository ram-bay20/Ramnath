import { LightningElement, wire } from 'lwc';
import ID from "@salesforce/user/Id"
import { getRecord } from "lightning/uiRecordApi";

export default class WireUserDetails extends LightningElement {

    detail
    @wire(getRecord, {recordId: ID, fields: ['User.Name', 'User.Email']})
    userDetailHandler({data, error}){
        if (data) {
            this.detail = data.fields
        }
        if (error) {
            console.error(error);
        }
    }
}