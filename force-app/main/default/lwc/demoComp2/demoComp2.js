import { LightningElement } from 'lwc';

export default class DemoComp2 extends LightningElement {
     //       Getter
     users = ["Ram", "Bishal", "Rahul", "Subash"]
     num1 = 743;
     num2 = 483;
     get firstUser() {
          return this.users[0].toUpperCase();
     }
     get sum() {
          return this.num1 + this.num2;
     }
     //         Conditonal Rendering
     details = 'Richard is the CEO and Founder of Pied Piper';
     showDetails = false;
     actionButtonLabel = 'Show Details';

     toggleDetails() {
          this.showDetails = !this.showDetails;
          this.actionButtonLabel = this.showDetails ? 'Hide Details' : 'Show Details';
          console.log(this.showDetails);
     }
}