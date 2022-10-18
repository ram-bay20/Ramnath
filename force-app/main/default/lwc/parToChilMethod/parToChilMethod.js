import { LightningElement, api } from 'lwc';

export default class ParToChilMethod extends LightningElement {
     val = 20
     changer(e) {
          this.val = e.target.value
     }

     @api resetHandler() {
          this.val = 50
     }
}