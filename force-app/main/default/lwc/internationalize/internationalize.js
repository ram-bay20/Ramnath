import { LightningElement } from 'lwc';
import LOCAL from '@salesforce/i18n/locale'
import MONEY from '@salesforce/i18n/currency'

export default class Internationalize extends LightningElement {
     number = 123456.78;
     formattedNumber = new Intl.NumberFormat(LOCAL, {
          style: 'currency',
          currency: MONEY,
          currencyDisplay: 'symbol'
     }).format(this.number);
}