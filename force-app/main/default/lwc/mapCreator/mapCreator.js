import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/MapCreatingClass.getAccount';

export default class MapCreator extends LightningElement {

    markers = []
    markerTitle = "Account Location"
    @wire(getAccount)
    mapGenetate({ data, error }) {
        if (data) {
            console.log(data);
            this.formatPlace(data)
        } if (error) {
            console.error(error);
        }
    }
    formatPlace(data){
        this.markers = data.map(item => {
            return {
                location:{
                    Street: item.BillingStreet || '',
                    City : item.BillingCity || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || '',
                    PostalCode: item.BillingPostalCode || ''
                },
                icon: "standard:address",
                title: item.Name,
                alue: item.Name,
                Description: item.Description
            }
        })
        this.selected = this.markers.length && this.markers[0].value
    }
    mapHandler(event){
        this.selected = event.detail.selectedMarkerValue
    }
}