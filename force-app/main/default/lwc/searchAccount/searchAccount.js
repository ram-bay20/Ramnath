import { LightningElement } from 'lwc';
import findAccount from '@salesforce/apex/fetchAccountData.findAccount';

export default class SearchAccount extends LightningElement {

    search
    accounts
    timer
    handleChange(event) {
        window.clearTimeout(this.timer)
        this.search = event.target.value
        this.timer = setTimeout(() => {
            this.call()
        }, 1000)
    }

    call() {
        findAccount({search: this.search}).then(result => {
            this.accounts = result
        }).then(error => {
            console.error(error);
        })
    }
}