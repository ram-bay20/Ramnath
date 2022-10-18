import { LightningElement } from 'lwc';

export default class ChiToParParent extends LightningElement {
     showModal = false
     message

     showHandler() {
          this.showModal = true
     }

     okHandler(e) {
          this.message = e.detail.msg
          this.showModal = false
     }
}