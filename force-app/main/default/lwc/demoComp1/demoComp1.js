import { LightningElement, track } from 'lwc';

export default class DemoComp1 extends LightningElement {
     //       Two way Binding
     tpc = "Personal Information"
     name = "Ramnath Mandal"
     post = "Employee"
     changeInfo(e) {
          if (e.target.value !== '') {
               this.post = e.target.value;
          } else {
               this.post = "Employee";
          }
     }
     //       @Track  property
     tpc1 = "Address Details"
     @track address = {
          country: "Nepal",
          postCode: 44300,
          city: "Birgunj"
     }
     changeAddr(e) {
          if (e.target.value !== '') {
               this.address.city = e.target.value;
          } else {
               this.address.city = "Birgunj";
          }
     }
}