import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
     @api myName

     handleClick() {
          const message = new CustomEvent("send", {
               detail: {
                    msg: "This is the Message...."
               }
          });
          this.dispatchEvent(message);
     }
}