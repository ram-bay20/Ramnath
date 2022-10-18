import { LightningElement } from 'lwc';

export default class LightningCard extends LightningElement {
     slotChanged() {
          const show = this.template.querySelector('footer')
          if (show) {
               show.classList.remove('slds-hide')
          }
     }
}