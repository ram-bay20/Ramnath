import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubFirstChild extends LightningElement {
     buttonHandler(e) {
          this.eventReader(e.target.label);
     }
     eventReader(data) {
          pubsub.publish('callAccordian', data);
     }
}