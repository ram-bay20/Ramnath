import { LightningElement, wire } from 'lwc';
import { getListUi } from "lightning/uiListApi";
import CON from "@salesforce/schema/Contact"
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const COLS = [
    { label: "Id", fieldName: "Id" },
    { label: "Name", fieldName: "Name" },
    { label: "Title", fieldName: "Title" },
    { label: "Phone", fieldName: "Phone", editable: true, type: "phone" },
    { label: "Email", fieldName: "Email", editable: true, type: "email" }
]
export default class UpdateRecordAdapter extends LightningElement {

    contacts = []
    columns = COLS
    drafts = []
    pageToken = null
    next = null
    prev = null
    @wire(getListUi, { objectApiName: CON, listViewApiName: "AllContacts", pageSize: 10, pageToken: '$pageToken' })
    update({ data, error }) {
        if (data) {
            console.log(data);
            this.contacts = data.records.records.map(item => {
                return {
                    "Id": this.getFields(item, 'Id'),
                    "Name": this.getFields(item, 'Name'),
                    "Title": this.getFields(item, 'Title'),
                    "Phone": this.getFields(item, 'Phone'),
                    "Email": this.getFields(item, 'Email')
                }
            })
            this.next = data.records.nextPageToken
            this.prev = data.records.previousPageToken
        }
        if (error) {
            console.error(error);
        }
    }

    getFields(data, field) {
        return data.fields[field].value
    }

    save(event) {
        this.drafts = JSON.stringify(event.detail.draftValues)
        console.log(this.drafts);
        const records = event.detail.draftValues.map(draft => {
             const flds = {...draft}
             return {fields: flds}
        })
        const promises = records.map(record => updateRecord(record))
        Promise.all(promises).then(() => {
            this.dispatchEvent(new ShowToastEvent({
                title: "Record updated successfully!!!",
                message: "You successfully Updated the records in lightning data table...",
                variant: "success"
            }))
            this.draft = []
        }).catch(error => {
            this.dispatchEvent(new ShowToastEvent({
                title: "Something went Wrong!!!",
                message: error.body.message,
                variant: "error"
            }))
        })
    }

    previousPage() {
        this.pageToken = this.prev
    }
    nextPage() {
        this.pageToken = this.next
    }
}