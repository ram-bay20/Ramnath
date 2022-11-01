import { LightningElement } from 'lwc';
import CSS from '@salesforce/resourceUrl/animate'
import { loadStyle } from 'lightning/platformResourceLoader'
import { ShowToastEvent } from "lightning/platformShowToastEvent";
const BOOK_LINK = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
    query = 'Incredible Hercules'
    books
    timer
    isLoaded = false
    renderedCallback() {
        if (this.isLoaded) {
            return
        } else {
            loadStyle(this, CSS + '/animate/animate.min.css')
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: "Successfull...",
                    message: "Animation Loaded!!!",
                    variant: "success"
                }))
            })
            this.isLoaded = true
        }
    }
    connectedCallback() {
        this.fetchBook()
    }
    fetchBook() {
        fetch(BOOK_LINK + this.query)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.books = data
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: "Something Went Wrong!!!",
                    message: error.body.message,
                    variant: "error"
                }))
            })
    }
    fetchBookHandler(event) {
        this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.fetchBook()
        }, 1000);
    }
}