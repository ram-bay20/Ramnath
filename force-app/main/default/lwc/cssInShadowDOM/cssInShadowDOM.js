import { LightningElement } from 'lwc';

export default class CssInShadowDOM extends LightningElement {
     isLoaded = false
     renderedCallback() {
          if (this.isLoaded) return
          const style = document.createElement('style')
          style.innerText = `c-css-in-shadow-d-o-m .slds-button {
               background: green;
               color: white;
               font-weight: bold;
          }`
          this.template.querySelector('lightning-button').appendChild(style)
          this.isLoaded = true
     }
}