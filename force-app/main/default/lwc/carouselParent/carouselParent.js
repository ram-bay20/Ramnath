import { LightningElement } from 'lwc';
import evening from "@salesforce/resourceUrl/Sunset"
import setup from "@salesforce/resourceUrl/Computer"
import car from "@salesforce/resourceUrl/Car"
import snake from "@salesforce/resourceUrl/RedNaag"

export default class CarouselParent extends LightningElement {

    images = [
        {
            image: evening,
            heading: "Sunset",
            description: "This is the landscape picture of sunset in hills which is downloaded from pexel.com and is setted as my lock screen Background..."
        },
        {
            image: setup,
            heading: "Computer Setup",
            description: "This is the drean setup of every boy who are in computer and gaming field..."
        },
        {
            image: car,
            heading: "Branded Car",
            description: "This is a photo of branded red car which is downloaded from pexels.com which I use to download images most of the times..."
        },
        {
            image: snake,
            heading: "Red Naag",
            description: "This is a red snake which is downloaded from the chrome and is set as my desktop background..."
        }
    ]
}