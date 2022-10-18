import { LightningElement } from 'lwc';

export default class ParentLifeCycleHook extends LightningElement {
     isVisible = false
     constructor() {
          super();
          console.log("Parent constructor called");
     }
     connectedCallback() {
          console.log("Parent connected callback called");
     }
     renderedCallback() {
          console.log("Parent rendered callback called");
     }
     clickHandler() {
          this.isVisible = !this.isVisible
     }
     errorCallback(error, stack) {
          console.log(error.message);
          console.log(stack);
     }
}