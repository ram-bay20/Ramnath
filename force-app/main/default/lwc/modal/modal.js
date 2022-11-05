import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {

    modalClose(){
        this.dispatchEvent(new CustomEvent('close'))
    }
    slotFooter(){
        const foot = this.template.querySelector('.slds-modal__footer')
        if (foot) {
            foot.classList.remove('slds-hide')
        }
    }
    slotHeader(){
        const head = this.template.querySelector('.slds-modal__header')
        if (head) {
            head.classList.remove('slds-hide')
        }
    }
}