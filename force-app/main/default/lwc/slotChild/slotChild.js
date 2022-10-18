import { LightningElement } from 'lwc';

export default class SlotChild extends LightningElement {
     changeHandler() {
          let foot = this.template.querySelector('.slds-card__footer')
          if (foot) {
               foot.classList.remove('slds-hide')
          }
     }
}