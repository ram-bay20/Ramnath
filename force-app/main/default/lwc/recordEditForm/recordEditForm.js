import { LightningElement } from 'lwc';
import CONTACT_OBJECT from "@salesforce/schema/Contact"
import CONTACT_NAME from "@salesforce/schema/Contact.Name"
import CONTACT_TITLE from "@salesforce/schema/Contact.Title"
import CONTACT_PHONE from "@salesforce/schema/Contact.Phone"
import CONTACT_EMAIL from "@salesforce/schema/Contact.Email"
import CONTACT_ACC from "@salesforce/schema/Contact.AccountId"

export default class RecordEditForm extends LightningElement {
     objName = CONTACT_OBJECT
     fields = {
          accountField: CONTACT_ACC,
          nameField: CONTACT_NAME,
          titleField: CONTACT_TITLE,
          phoneField: CONTACT_PHONE,
          emailField: CONTACT_EMAIL
     }
     cancelHandler(){
          const allFields = this.template.querySelectorAll('lightning-input-field')
          if (allFields) {
               Array.from(allFields).forEach(fields => {
                    fields.reset()
               });
          }
     }
}