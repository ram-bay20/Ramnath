import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

export default class NavigationServices extends NavigationMixin(LightningElement) {

     homeNavigation() {
          this[NavigationMixin.Navigate]({
               type: 'standard__namedPage',
               attributes: {
                    pageName: 'home'
               }
          })
     }

     chatterNavigation() {
          this[NavigationMixin.Navigate]({
               type: 'standard__namedPage',
               attributes: {
                    pageName: 'chatter'
               }
          })
     }

     newRecordNavigation() {
          this[NavigationMixin.Navigate]({
               type: 'standard__objectPage',
               attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
               }
          })
     }

     newRecordWithDefaultValuesNavigation() {
          const defaultValues = encodeDefaultFieldValues({
               Salutation: 'Mr',
               FirstName: 'Ram',
               LastName: 'Mandal',
               Phone: '9822296855',
               LeadSource: 'Other',
               Birthdate: '03/18/2004'
          })
          this[NavigationMixin.Navigate]({
               type: 'standard__objectPage',
               attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
               },
               state: {
                    defaultFieldValues: defaultValues
               }
          })
     }

     listViewNavigation() {
          this[NavigationMixin.Navigate]({
               type: 'standard__objectPage',
               attributes: {
                    objectApiName: 'Contact',
                    actionName: 'list'
               },
               state: {
                    filterName: 'Recent'
               }
          })
     }

     fileNavigation() {
          this[NavigationMixin.Navigate]({
               type: 'standard__objectPage',
               attributes: {
                    objectApiName: 'ContentDocument',
                    actionName: 'home'
               }
          })
     }
}