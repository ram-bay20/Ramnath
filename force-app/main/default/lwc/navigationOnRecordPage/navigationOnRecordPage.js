import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigationOnRecordPage extends NavigationMixin(LightningElement) {
     viewMode() {
          this[NavigationMixin.Navigate]({
               type: 'standard__recordPage',
               attributes: {
                    recordId: '003N000001vT9edIAC',
                    objectApiName: 'Contact',
                    actionName: 'view'
               }
          })
     }

     editMode() {
          this[NavigationMixin.Navigate]({
               type: 'standard__recordPage',
               attributes: {
                    recordId: '003N000001vT9edIAC',
                    objectApiName: 'Contact',
                    actionName: 'edit'
               }
          })
     }
}