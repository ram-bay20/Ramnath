import { LightningElement, wire } from 'lwc';
import RAM from "@salesforce/messageChannel/DemoLMS__c";
import { MessageContext, publish } from "lightning/messageService";

export default class LMSComponentA extends LightningElement {
     enteredValue

     @wire(MessageContext)
     context

     keyHandler(e) {
          this.enteredValue = e.target.value
     }

     publishHandler() {
          const message = {
               dataRM: {
                    value: this.enteredValue
               }
          }
          publish(this.context, RAM, message)
     }
}