import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
     information

     @api
     get detail() {
          return this.information;
     }
     set detail(info) {
          let ageInfo = info.age * 2;
          this.information = { ...info, age: ageInfo, "qualification": "Diploma in CIomputer Engineering" }
     }
}