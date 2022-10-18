import { LightningElement } from 'lwc';

export default class ChiToParSImpleEvent extends LightningElement {
     okHandler() {
          const ok = new CustomEvent('close', {
               bubbles: true,
               detail: {
                    msg: "Event dispatched successfully !!...."
               }
          })
          this.dispatchEvent(ok)
     }
     footerHandle() {
          console.log("Footer called successfully");
     }
}
