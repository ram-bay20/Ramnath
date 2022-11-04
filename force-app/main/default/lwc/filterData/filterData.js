import { LightningElement, wire } from 'lwc';
import filterContact from '@salesforce/apex/Filter.filterContact';

export default class FilterData extends LightningElement {

    tableHeadings = ["Id", "Name", "Title", "Email"]
    tableData = []
    filteredData = []
    timer
    filterBy = "Name"
    sortBy = "Name"
    sortDirection = "ascending"

    @wire(filterContact)
    filterHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.tableData = data
            this.filteredData = [...this.sortedBy(data)]
        } if (error) {
            console.error(error);
        }
    }

    get filterOption() {
        return [
            { label: "All", value: "All" },
            { label: "Id", value: "Id" },
            { label: "Name", value: "Name" },
            { label: "Title", value: "Title" },
            { label: "Email", value: "Email" }
        ]
    }

    get sortOption() {
        return [
            { label: "Id", value: "Id" },
            { label: "Name", value: "Name" },
            { label: "Title", value: "Title" },
            { label: "Email", value: "Email" }
        ]
    }

    filterByEvent(event) {
        this.filterBy = event.target.value
    }

    keyHandler(event) {
        const { value } = event.target
        window.clearTimeout(this.timer)
        if (value) {
            this.timer = window.setTimeout(() => {
                this.filteredData = this.tableData.filter(eachObject => {
                    if (this.filterBy === "All") {
                        return Object.keys(eachObject).some(key => {
                            return eachObject[key].toLowerCase().includes(value)
                        })
                    } else {
                        const val = eachObject[this.filterBy] ? eachObject[this.filterBy] : ''
                        return val.toLowerCase().includes(value)
                    }
                })
            }, 800)
        } else {
            this.filteredData = [...this.tableData]
        }
    }

    sortByEvent(event){
        this.sortBy = event.target.value
        this.filteredData = [...this.sortedBy(this.filteredData)]
    }

    sortedBy(data){
        const clone = [...data]
        clone.sort((a,b) => {
            if (a[this.sortBy] === b[this.sortBy]) {
                return 0
            }
            return this.sortDirection === "descending" ? 
            a[this.sortBy] > b[this.sortBy] ? -1 : 1 :
            a[this.sortBy] < b[this.sortBy] ? -1 : 1 
        })
        return clone
    }
}