import { LightningElement } from 'lwc';
import ICON from '@salesforce/resourceUrl/pdf'
import PDF from '@salesforce/contentAssetUrl/NEPAL_TELECOM_National_Examination_Boar'

export default class ContentAssetFile extends LightningElement {
     icon = ICON
     file = PDF
}