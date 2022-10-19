import { LightningElement, wire } from 'lwc';
import ID from "@salesforce/user/Id"
import { getRecord } from "lightning/uiRecordApi";
import NAM from "@salesforce/schema/User.Name"
import MAIL from "@salesforce/schema/User.Email"
const fields = [NAM, MAIL];

export default class WireUserDetails extends LightningElement {

    detail
    id = ID
    @wire(getRecord, {recordId: '$id', fields})
    userDetailHandler({data, error}){
        if (data) {
            this.detail = data.fields
        }
        if (error) {
            console.error(error);
        }
    }
    @wire(getRecord, {recordId: '$id', fields})
    userDetailProperty
}
