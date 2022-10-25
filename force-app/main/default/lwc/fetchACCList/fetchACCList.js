import { LightningElement, wire } from 'lwc';
import ACC_LIST from "@salesforce/apex/fetchAccountData.getAccData"

export default class FetchACCList extends LightningElement {

    accList
    @wire(ACC_LIST)
    accounts

    @wire(ACC_LIST)
    newAccounts({data, error}){
        if (data) {
            this.accList = data.map(item => {
                let newType = item.Type === "Customer - Channel" ? "Channel" :
                item.Type === "Customer - Direct" ? "Direct" : "-------"
                return {...item, newType}
            })
        }
        if (error) {
            console.error(error);
        }
    }
}