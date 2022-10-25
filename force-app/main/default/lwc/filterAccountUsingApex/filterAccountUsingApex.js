import { LightningElement, wire } from 'lwc';
import filterAccountType from '@salesforce/apex/fetchAccountData.filterAccountType';

export default class FilterAccountUsingApex extends LightningElement {
    selectedType = ''
    @wire(filterAccountType, { type: "$selectedType" })
    filteredData

    get options() {
        return [
            { label: "None", value: "" },
            { label: "Customer - Channel", value: "Customer - Channel" },
            { label: "Customer - Direct", value: "Customer - Direct" },
            { label: "Technology Partner", value: "Technology Partner" },
            { label: "Installation Partner", value: "Installation Partner" },
        ]
    }
    changeHandler(event) {
        this.selectedType = event.target.value
    }
}