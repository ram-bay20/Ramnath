import { LightningElement } from 'lwc';
const BOOK_LINK = 'http://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
    query = 'Man'
    books
    connectedCallback() {
        this.fetchBook()
    }
    fetchBook() {
        fetch(BOOK_LINK+this.query)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.books = data
        })
        .catch(error => console.error(error))
    }
}