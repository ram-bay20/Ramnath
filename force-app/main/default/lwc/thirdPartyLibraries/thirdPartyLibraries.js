import { LightningElement } from 'lwc';
import JS from '@salesforce/resourceUrl/moment'
import CSS from '@salesforce/resourceUrl/animate'
import { loadScript,loadStyle } from 'lightning/platformResourceLoader'

export default class ThirdPartyJS extends LightningElement {

     current = ''
     isLoaded = false
     renderedCallback() {
          if (this.isLoaded) {
               return
          } else {
               Promise.all([
                    loadScript(this, JS + '/moment/moment.js'),
                    loadStyle(this, CSS + '/animate/animate.min.css')
               ]).then(() => {
                    this.thirtyParty()
               })
               // this.isLoaded = true
          }
     }
     thirtyParty() {
          this.current = moment().format('LLLL');
     }
}