import { LightningElement, wire } from 'lwc';
import getOppo from '@salesforce/apex/chartOppo.getOppo';
export default class ChartDemo extends LightningElement {

    pieChartLables = []
    pieChartData = []
    @wire(getOppo)
    opportutityHandler({ data, error }) {
        if (data) {
            console.log(data)
            const result = data.reduce((json, val) => ({ ...json, [val.StageName]: (json[val.StageName] | 0) + 1 }), {})
            if (Object.keys(result).length) {
                this.pieChartLables = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        }
        if (error) {
            console.error(error)
        }
    }
}