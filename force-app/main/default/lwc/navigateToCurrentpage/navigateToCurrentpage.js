import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from "lightning/navigation";

export default class NavigateToCurrentpage extends LightningElement {
     @wire(CurrentPageReference)
     pageRefer

     get currentPage(){
          return this.pageRefer ? JSON.stringify(this.pageRefer, null, 2) : ''
     }
}