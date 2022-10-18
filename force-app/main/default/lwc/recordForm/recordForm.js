import { LightningElement } from 'lwc';
import ACC from "@salesforce/schema/Account"
import ACC_NAME from "@salesforce/schema/Account.Name"
import ACC_NUMBER from "@salesforce/schema/Account.AccountNumber"
import ACC_REVENUE from "@salesforce/schema/Account.AnnualRevenue"
import ACC_INDUSTRY from "@salesforce/schema/Account.Industry"
import ACC_SOURCE from "@salesforce/schema/Account.AccountSource"
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class RecordForm extends LightningElement {
     objName = ACC
     fieldNames = [ACC_NAME, ACC_NUMBER, ACC_REVENUE, ACC_INDUSTRY, ACC_SOURCE]

     handleSuccess(event) {
          var notification = new ShowToastEvent({
               title: "Account Created",
               message: "You successfully created an account. The ID of your Account is : " + event.detail.id,
               variant: "success"
          })
          this.dispatchEvent(notification)
     }
}