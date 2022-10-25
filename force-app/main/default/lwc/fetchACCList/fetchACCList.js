import { LightningElement, wire } from 'lwc';
import getAccData from "@salesforce/apex/fetchAccountData.getAccData"

export default class FetchACCList extends LightningElement {

    accList
    @wire(getAccData)
    accounts

    @wire(getAccData)
    newAccounts({ data, error }) {
        if (data) {
            this.accList = data.map(item => {
                let newType = item.Type === "Customer - Channel" ? "Channel" :
                    item.Type === "Customer - Direct" ? "Direct" : 
                    item.Type === "" || null || undefined ? "------" : item.Type
                return { ...item, newType }
            })
        }
        if (error) {
            console.error(error);
        }
    }
}