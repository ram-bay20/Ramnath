import { LightningElement } from 'lwc';
import getAccData from "@salesforce/apex/fetchAccountData.getAccData"

export default class ImperativeApexCalling extends LightningElement {

    fetchedAccounts
    handleClick(){
        getAccData().then(result => {
            this.fetchedAccounts = result
        }).catch(error => {
            console.error(error);
        })
    }
}