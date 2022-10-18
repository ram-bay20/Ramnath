import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToVFPge extends NavigationMixin(LightningElement) {
     vfNavigation(){
          this[NavigationMixin.Navigate]({
               type: 'standard__webPage',
               attributes: {
                    url: '/apex/navigateVFPage'
               }
          }).then(generatedUrl => {
               window.open(generatedUrl)
          })
     }
}