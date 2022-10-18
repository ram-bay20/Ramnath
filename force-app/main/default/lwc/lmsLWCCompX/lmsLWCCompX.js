import { LightningElement, wire } from 'lwc';
import RAM from '@salesforce/messageChannel/DemoLMS__c'
import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from "lightning/messageService";

export default class LmsLWCCompX extends LightningElement {
     received
     subscribeMsg
     @wire(MessageContext)
     context

     connectedCallback() {
          this.subscriber();
     }

     subscriber() {
          this.subscribeMsg = subscribe(this.context, RAM, (message) => { this.messageHandler(message) }, { scope: APPLICATION_SCOPE })
     }

     messageHandler(message) {
          this.received = message.dataRM.value ? message.dataRM.value : 'There is no message published !!!'
     }

     unsubscribeMsg() {
          unsubscribe(this.subscribeMsg)
          this.subscribeMsg = null
     }
}