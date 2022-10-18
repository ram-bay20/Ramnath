import { LightningElement } from 'lwc';

export default class ChildLifeCycleHook extends LightningElement {
     constructor() {
          super();
          console.log("Child constructor called");
     }
     connectedCallback() {
          console.log("Child connected callback called");
          throw new Error("Loading of this code is being failed")
     }
     renderedCallback() {
          console.log("Child rendered callabck called");
     }
     disconnectedCallback() {
          alert("Child disconnected callback called")
     }
}