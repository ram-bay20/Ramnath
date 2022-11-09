import { api, LightningElement } from 'lwc';

const SHOW_IMAGE_CLASS = 'slds-show';
const HIDE_IMAGE_CLASS = 'slds-hide';
const ACTIVE_DOT_CLASS = 'dot active';
const DOT_CLASS = 'dot';
const DEFAULT_TIMER = 3000
const DEFAULT_WIDTH = 700

export default class Carousel extends LightningElement {

    slides = []
    slideIndex = 1
    toggler = false
    slideTiming = DEFAULT_TIMER
    timer
    autoScroll = false
    @api fullScreen = false
    @api
    get slideData() {
        return this.slides
    }

    set slideData(data) {
        this.slides = data.map((item, index) => {
            return index === 0 ?
                { ...item, slideIndex: index + 1, cardClass: SHOW_IMAGE_CLASS, dotclass: ACTIVE_DOT_CLASS } :
                { ...item, slideIndex: index + 1, cardClass: HIDE_IMAGE_CLASS, dotclass: DOT_CLASS }
        })
    }

    get sizeHandler() {
        return this.fullScreen ? 'width: 100%' : `width:${DEFAULT_WIDTH}px`
    }

    connectedCallback() {
        this.stageHandler(this.autoScroll)
        if (!this.autoScroll) {
            this.toggler = true
        }
    }

    disconnectedCallback() {
        if (this.autoScroll) {
            window.clearInterval(this.timer)
        }
    }

    changeHandler() {
        this.autoScroll = !this.autoScroll
        this.stageHandler(this.autoScroll)
    }

    stageHandler(param){
        if (param) {
            this.timer = window.setInterval(() => {
                this.slideHandler(this.slideIndex + 1)
            }, Number(this.slideTiming))
        } else {
            window.clearInterval(this.timer)
        }
    }

    goBack() {
        let slideIndex = this.slideIndex - 1
        this.slideHandler(slideIndex)
    }

    goFront() {
        let slideIndex = this.slideIndex + 1
        this.slideHandler(slideIndex)
    }

    slideHandler(num) {
        if (num > this.slides.length) {
            this.slideIndex = 1
        } else if (num < 1) {
            this.slideIndex = this.slides.length
        } else {
            this.slideIndex = num
        }

        this.slides = this.slides.map(item => {
            return this.slideIndex === item.slideIndex ?
                { ...item, cardClass: SHOW_IMAGE_CLASS, dotclass: ACTIVE_DOT_CLASS } :
                { ...item, cardClass: HIDE_IMAGE_CLASS, dotclass: DOT_CLASS }
        })
    }

    currentHandler(event) {
        let slideIndex = Number(event.target.dataset.id)
        this.slideHandler(slideIndex)
    }

}