import { LightningElement } from 'lwc';
import Login from './signin.html';
import Register from './signup.html';
import Rendered from './renderDemo.html';
import Success from './success.html';

export default class RenderDemo extends LightningElement {
     selected = ''
     submitted = ''
     render() {
          return this.selected === 'Signin' ? Login :
               this.selected === 'Signup' ? Register :
                    this.selected === 'Success' ? Success :
                         Rendered
     }

     clickHandler(e) {
          this.selected = e.target.label;
          this.submitted = ''
     }

     submitHandler(e) {
          this.selected = 'Success'
          if (e.target.title == "Login") {
               this.submitted = 'Congratulations!! You are Logged-in Successfully...';
          } else {
               this.submitted = 'Congratulations!! You are Registered Successfully...';
          }
     }
}