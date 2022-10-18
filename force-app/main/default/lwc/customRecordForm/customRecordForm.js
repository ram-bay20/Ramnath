import { LightningElement } from 'lwc';
import OBJ_NAME from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomRecordForm extends LightningElement {
     objName = OBJ_NAME
     inputValue = ''
     keyHandler(event) {
          this.inputValue = event.target.value
     }
     submitHandler(event) {
          event.preventDefault();
          const inputCmp = this.template.querySelector('lightning-input')
          const val = inputCmp.value
          if (!val.includes('Mandal')) {
               inputCmp.setCustomValidity("The name must include 'Mandal'.")
          } else {
               inputCmp.setCustomValidity("")
               const field = event.detail.fields
               field.Name = val
               this.template.querySelector('lightning-record-edit-form').submit(field)
          }
          inputCmp.reportValidity()
     }
     successHandler(event) {
          const suc = new ShowToastEvent({
               title: "Account Created Successfully",
               message: "Your Record id is :- " + event.detail.id,
               variant: "success"
          })
          this.dispatchEvent(suc)
     }
     errorHandler(event) {
          const err = new ShowToastEvent({
               title: "Problem occured in Account Cretaion!!!",
               message: event.detail.message,
               variant: "error"
          })
          this.dispatchEvent(err)
     }
}