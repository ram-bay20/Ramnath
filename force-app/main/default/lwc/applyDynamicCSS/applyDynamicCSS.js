import { LightningElement } from 'lwc';

export default class ApplyDynamicCSS extends LightningElement {
     percent = 40
     change(e) {
          if (e.target.value <= 100) {
               this.percent = e.target.value
          } else {
               e.target.value = null
               this.percent = e.target.value
               // alert('Please enter a number less than or equal to 100')
          }

     }
     get percentage() {
          if (this.percent <= 100) {
               return `width:${this.percent}%`
          } else {
               return `width:${this.percent = 100}%`
          }

     }
}