import { api, LightningElement } from 'lwc';

export default class ComponentConfigurationInLWC extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels
}