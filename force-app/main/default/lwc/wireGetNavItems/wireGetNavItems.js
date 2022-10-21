import { LightningElement, wire } from 'lwc';
import { getNavItems } from "lightning/uiAppsApi";

export default class WireGetNavItems extends LightningElement {

    results
    @wire(getNavItems, {availableInLightning: true, pageSize: 5})
    nav({data}){
        if (data) {
            console.log(data);
            this.results = data.navItems
        }
    }
}