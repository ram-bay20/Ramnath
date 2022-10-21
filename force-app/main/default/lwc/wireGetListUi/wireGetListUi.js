import { LightningElement, wire } from 'lwc';
import { getListUi } from "lightning/uiListApi";
import CONTACT from "@salesforce/schema/Contact"

export default class WireGetListUi extends LightningElement {

    contacts = []
    pageToken = null
    next = null
    prev = null
    @wire(getListUi, { objectApiName: CONTACT, listViewApiName: 'AllContacts', pageSize: 4, pageToken: '$pageToken' })
    tables({ data, error }) {
        if (data) {
            console.log(data);
            this.contacts = data.records.records
            this.next = data.records.nextPageToken
            this.prev = data.records.previousPageToken
        }
        if (error) {
            console.error(error);
        }
    }
    previousPage() {
        this.pageToken = this.prev
    }
    nextPage() {
        this.pageToken = this.next
    }
}