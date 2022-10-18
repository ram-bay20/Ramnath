import { LightningElement } from 'lwc';
import LABEL_ONE from '@salesforce/label/c.firstLabel'
import LABEL_TWO from '@salesforce/label/c.scondLabel'

export default class Labels extends LightningElement {
     first = LABEL_ONE
     second = LABEL_TWO
}