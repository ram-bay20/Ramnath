import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToTab extends NavigationMixin(LightningElement) { 
     relationshipNavigate(){
          this[NavigationMixin.Navigate]({
               type: 'standard__recordRelationshipPage',
               attributes: {
                    recordId: '001N0000027QLyWIAW',
                    objectApiName: 'Account',
                    relationshipApiName: 'Contacts',
                    actionName: 'view'
               }
          })
     }
}