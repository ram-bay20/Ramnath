import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubSecondChild extends LightningElement {
     accordianList = [
          {
               id: 1,
               name: 'Neutral',
               selected: false,
               variant: 'neutral'
          },
          {
               id: 2,
               name: 'Brand',
               selected: false,
               variant: 'brand'
          },
          {
               id: 3,
               name: 'Success',
               selected: false,
               variant: 'success'
          },
          {
               id: 4,
               name: 'Destructive',
               selected: false,
               variant: 'destructive'
          }
     ];

     connectedCallback() {
          this.callSubscriber();
     }
     callSubscriber() {
          pubsub.subscribe('callAccordian', this.subscriberCallback);
     }
     subscriberCallback = (event) => {
          let updatedList = this.accordianList.map(item => {
               return item.name === event ? { ...item, selected: true } : { ...item, selected: false };
          });
          this.accordianList = [...updatedList]
     }
}