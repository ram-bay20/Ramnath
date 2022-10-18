import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ToastNotification extends LightningElement {

     infoHandler() {
          this.show("Info", "This is the Information {0}", "info")
     }
     warningHandler() {
          this.show("Warning", "This is the Warning {0}", "warning", "pester")
     }
     errorHandler() {
          this.show("Error", "This is the Error {0}", "error", "sticky")
     }
     successHandler() {
          this.show("Success", "This is the Success {0}", "success", "pester")
     }
     show(title, message, variant, mode) {
          const event = new ShowToastEvent({
               title,
               message,
               variant,
               mode,
               messageData: [
                    {
                         label: "Click here",
                         url: "https://business-momentum-8452-dev-ed.lightning.force.com/lightning/setup/SetupOneHome/home"
                    }
               ]
          })
          this.dispatchEvent(event)
     }
}