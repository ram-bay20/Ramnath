import { LightningElement } from 'lwc';
import FONTICON from '@salesforce/resourceUrl/Icons'
import { loadStyle } from 'lightning/platformResourceLoader'

export default class GameProject extends LightningElement {

     isLoaded = false
     succesfull = false
     opened = []
     moves = 0
     matchCard = []
     takenTime = '00:00'
     timeRefer
     resetter = false

     cards = [
          { id: 1, classes: "card", type: "cc-visa", icon: "fa fa-cc-visa" },
          { id: 2, classes: "card", type: "clipboard", icon: "fa fa-clipboard" },
          { id: 3, classes: "card", type: "heart", icon: "fa fa-heart" },
          { id: 4, classes: "card", type: "facebook", icon: "fa fa-facebook" },
          { id: 5, classes: "card", type: "hand-o-up", icon: "fa fa-hand-o-up" },
          { id: 6, classes: "card", type: "youtube-play", icon: "fa fa-youtube-play" },
          { id: 7, classes: "card", type: "money", icon: "fa fa-money" },
          { id: 8, classes: "card", type: "pie-chart", icon: "fa fa-pie-chart" },
          { id: 9, classes: "card", type: "cc-visa", icon: "fa fa-cc-visa" },
          { id: 10, classes: "card", type: "pie-chart", icon: "fa fa-pie-chart" },
          { id: 11, classes: "card", type: "money", icon: "fa fa-money" },
          { id: 12, classes: "card", type: "clipboard", icon: "fa fa-clipboard" },
          { id: 13, classes: "card", type: "hand-o-up", icon: "fa fa-hand-o-up" },
          { id: 14, classes: "card", type: "youtube-play", icon: "fa fa-youtube-play" },
          { id: 15, classes: "card", type: "facebook", icon: "fa fa-facebook" },
          { id: 16, classes: "card", type: "heart", icon: "fa fa-heart" }
     ]

     handleTap(e) {
          let clicked = e.target
          clicked.classList.add('open', 'show', 'disabled')
          this.opened = this.opened.concat(e.target)
          const leng = this.opened.length
          if (leng === 2) {
               this.moves = this.moves + 1
               if (this.moves === 1) {
                    this.timer()
               }
               if (this.opened[0].type === this.opened[1].type) {
                    this.matchCard = this.matchCard.concat(this.opened[0], this.opened[1])
                    this.matched()
               } else {
                    this.unmatched()
               }
          }
     }

     matched() {
          this.opened[0].classList.add('match', 'disabled')
          this.opened[1].classList.add('match', 'disabled')
          this.opened[0].classList.remove('show', 'open')
          this.opened[1].classList.remove('show', 'open')
          this.opened = []
          if (this.matchCard.length === 16) {
               window.clearInterval(this.timeRefer)
               this.succesfull = true
          }
     }

     unmatched() {
          this.opened[0].classList.add('unmatch')
          this.opened[1].classList.add('unmatch')
          this.action('disable')
          setTimeout(() => {
               this.opened[0].classList.remove('show', 'open', 'unmatch')
               this.opened[1].classList.remove('show', 'open', 'unmatch')
               this.action('enable')
               this.opened = []
          }, 1000)
     }

     action(act) {
          let cars = this.template.querySelectorAll('.card')
          Array.from(cars).forEach(item => {
               if (act === 'enable') {
                    let isMatched = item.classList.contains('match')
                    if (!isMatched) {
                         item.classList.remove('disabled')
                    }
               }
               if (act === 'disable') {
                    item.classList.add('disabled')
               }
          })
     }

     timer() {
          let start = new Date()
          this.timeRefer = setInterval(() => {
               let diff = new Date().getTime() - start.getTime()
               let d = Math.floor(diff / 1000)
               const m = Math.floor(d % 3600 / 60)
               const s = Math.floor(d % 3600 % 60)
               const minDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : ""
               const secDisplay = s > 0 ? s + (s === 1 ? " second, " : " seconds, ") : ""
               this.takenTime = minDisplay + secDisplay
          }, 1000);
     }

     suffle() {
          this.resetter = false
          this.succesfull = false
          this.opened = []
          this.moves = 0
          this.matchCard = []
          this.takenTime = '00:00'
          window.clearInterval(this.timeRefer)
          Array.from(this.template.querySelectorAll('.card')).forEach(item => {
               item.classList.remove('open', 'show', 'disabled', 'match')
          })
          let array = [...this.cards]
          let counter = array.length
          while (counter > 0) {
               let index = Math.floor(Math.random() * counter)
               counter--

               let temp = array[counter]
               array[counter] = array[index]
               array[index] = temp
          }
          this.cards = [...array]
     }

     get gameRating() {
          let stars = this.moves <= 12 ? [1, 2, 3] : this.moves >= 13 && this.moves <= 16 ? [1, 2] : [1]
          return this.matchCard.length === 16 ? stars : []
     }

     showModal() {
          this.resetter = true
     }

     play() {
          this.resetter = false
     }

     renderedCallback() {
          if (this.isLoaded) {
               return
          } else {
               loadStyle(this, FONTICON + '/fontawesome/css/font-awesome.min.css').then(() => {
                    console.log("Font Awesome loaded successfully!!!");
               }).catch(error => {
                    console.error(error);
               })
               this.isLoaded = true
          }
     }
}