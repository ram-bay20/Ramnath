import { LightningElement } from 'lwc';

export default class ParToChiParent extends LightningElement {
     imgSlide = [
          {
               src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
               header: "First Card",
               description: "First card description."
          },
          {
               src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
               header: "Second Card",
               description: "Second card description."
          },
          {
               src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
               header: "Third Card",
               description: "Third card description."
          }
     ];

     inputValue = 10
     changeHandler(e) {
          if (e.target.value <= 100) {
               this.inputValue = e.target.value
          } else {
               this.inputValue = 0
          }
     }

     handleClick() {
          this.template.querySelector('c-par-to-chil-method').resetHandler();
     }
}