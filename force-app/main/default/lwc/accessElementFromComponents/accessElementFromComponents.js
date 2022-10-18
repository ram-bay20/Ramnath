import { LightningElement } from 'lwc';

export default class AccessElementFromComponents extends LightningElement {
     cricketers = ["MS Dhoni", "Virat Kohli", "Rishabh Pant", "Kuldeep Yadav", "Bhuwaneshwar Kumar"]
     getData() {
          const tag = this.template.querySelector('h1')
          console.log(tag.innerText);
          tag.style.color = '#14effe'
          tag.style.background = '#ed26ed'

          const cricket = this.template.querySelectorAll('.name')
          Array.from(cricket).forEach(item => {
               console.log(item.innerText);
               item.setAttribute("title", item.innerText)
          });
          const write = this.template.querySelector('.write').innerHTML = '<p>I am displayed after button click.</p>'
     }
}