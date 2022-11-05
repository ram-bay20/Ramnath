import { LightningElement } from 'lwc';

export default class ModalUser extends LightningElement {
    open
    showModal(){
        this.open = true
    }
    closeHandler(){
        this.open = false
    }
}