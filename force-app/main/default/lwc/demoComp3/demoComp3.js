import { LightningElement } from 'lwc';

export default class DemoComp3 extends LightningElement {
     friendList = ["Subash", "Bishal", "Rahul", "Mukesh"]

     compCEO = [
          {
               id: 1,
               compName: "Meta",
               ceo: "Mark Zuckerburg"
          },
          {
               id: 2,
               compName: "Google",
               ceo: "Sundar Pichai"
          },
          {
               id: 3,
               compName: "Amazon",
               ceo: "Jeff Bezos"
          },
          {
               id: 4,
               compName: "Tesla",
               ceo: "Elon Musk"
          },
          {
               id: 5,
               compName: "Microsoft",
               ceo: "Bill Gates"
          }
     ]
}