import { LightningElement } from 'lwc';
import { deleteRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class DeleteRecordAdapter extends LightningElement {

    recId
    keyHandler(event){
        this.recId = event.target.value
    }
    deleteHandler(){
        deleteRecord(this.recId).then(() => {
            this.Toast("Record Deleted Successfully!!!", "You deleted the record successfully...", "success")
            const id = this.template.querySelector('.clr')
            id.value = ''
        }).catch(error => {
            this.Toast("SomeThing went wrong!!!", error.body.message, "error")
        })
    }

    Toast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,message,variant
        }))
    }
}