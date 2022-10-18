import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToAur extends NavigationMixin(LightningElement) {
     auratoNavigate(){
          this[NavigationMixin.Navigate]({
               type: "standard__component",
               attributes: {
                    componentName: "c__NavigateAura"
               },
               state: {
                    "c__id": "12345678"
               }
          })
     }
}