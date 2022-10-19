import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from "lightning/uiObjectInfoApi";
import CONT from "@salesforce/schema/Contact"
import ACC from "@salesforce/schema/Account"

export default class WireObjectInfo extends LightningElement {
    
    @wire(getObjectInfo, {objectApiName: CONT})
    objectInfo

    objs = [CONT, ACC]
    objValue
    @wire(getObjectInfos, {objectApiNames: '$objs'})
    objectInfos({data}){
        if (data) {
            this.objValue = data
        }
    }
}