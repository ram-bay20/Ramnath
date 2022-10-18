import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToTab extends NavigationMixin(LightningElement) {
     tabNavigate() {
          this[NavigationMixin.Navigate]({
               type: 'standard__navItemPage',
               attributes: {
                    apiName: 'G_K_Quiz'
               }
          })
     }
}