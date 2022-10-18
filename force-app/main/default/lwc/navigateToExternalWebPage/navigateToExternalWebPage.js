import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToExternalWebPage extends NavigationMixin(LightningElement) {
     navigateToWeb(){
          this[NavigationMixin.Navigate]({
               type: 'standard__webPage',
               attributes: {
                    url: 'http://web.whatsapp.com'
               }
          })
     }
}