import { api, LightningElement } from 'lwc';
import generatePDF from '@salesforce/apex/pdfControl.generatePDF';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class PdfGenerator extends LightningElement {
    @api recordId
    logo = "https://img1.picmix.com/output/stamp/normal/2/3/5/0/890532_deec8.png"
    orderInfo = {
        orderNumber: "203",
        orderCreated: "05-09-2022",
        orderDue: "04-12-2022",
        companyName: "The Beatles Corporation, Inc.",
        companyAddress1: "4345-Devil's Street",
        companyAddress2: "Los-Angeles, California, USA"
    }
    clientInfo = {
        client: "Marvel Entertainment",
        userName: "Kevin Feige",
        email: "kevin@marvel.com"
    }
    services = [
        {name: "Green Curtain", amount: 40000.00},
        {name: "Lights", amount: 20000.00},
        {name: "VFX", amount: 600000.00},
        {name: "Location Guide", amount: 50000.00}
    ]
    get totalAmount(){
        return this.services.reduce((total,service) => {
            return total = total+service.amount
        },0)
    }
    publishPDF(){
        const pdfContent = this.template.querySelector('.container')
        console.log(pdfContent.outerHTML);
        generatePDF({ recordId: this.recordId, htmlData: pdfContent.outerHTML })
            .then(result => {
                this.dispatchEvent(new ShowToastEvent({
                    title: "PDF Generated!!!",
                    message: `A PDF named ${result.Name} has been generated with Assignment ID: ${result.Id}`,
                    variant: "success"
                }))
                setTimeout(() => {
                    window.open(`https://business-momentum-8452-dev-ed.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
                }, 2000);
            }).catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: "Something Went Wrong!!!",
                    message: error.body.message,
                    variant: "error"
                }))
            })
    }
}