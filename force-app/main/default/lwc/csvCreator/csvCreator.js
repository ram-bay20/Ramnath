import { LightningElement, wire } from 'lwc';
import generateCSV from '@salesforce/apex/CSVcontroller.generateCSV';
import { exportCSV } from 'c/csvUtils';

export default class CsvCreator extends LightningElement {

    accountInfo
    accountHeaders = {
        Id: "Record Id",
        Name: "Name",
        AnnualRevenue: "Annual Revenue",
        Industry: "Industry",
        Phone: "Phone"
    }
    @wire(generateCSV)
    csvHandler({data,error}){
        if (data) {
            console.log(data);
            this.accountInfo = data
        } if (error) {
            console.error(error);
        }
    }

    csvGenerator(){
        exportCSV(this.accountHeaders, this.accountInfo, "Record")
    }
}