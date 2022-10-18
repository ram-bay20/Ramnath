import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id'
import GUEST from '@salesforce/user/isGuest'

export default class UserInfo extends LightningElement {
     id = ID
     guest = GUEST
}