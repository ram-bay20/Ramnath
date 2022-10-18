import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {

     answered = {}
     rightAnswers = 0
     isSubmitted = false
     quizQuestions = [
          {
               id: "Q.no.1",
               question: "Which lake is located in the highest altitude in the world ?",
               answers: {
                    a: "Gosain Kunda",
                    b: "Maan sarovar",
                    c: "Tilicho Lake",
                    d: "Shey-Phoksundo Lake"
               },
               right: "c"
          },
          {
               id: "Q.no.2",
               question: "Which of the following mountain is not summited yet by anyone ?",
               answers: {
                    a: "Mt.Everest",
                    b: "Mt.Kailash",
                    c: "Mt.K2",
                    d: "Mt.Kilimajaro"
               },
               right: "b"
          },
          {
               id: "Q.no.3",
               question: "Who has played the role of 'Gorr-the god butcher' in the MCU ?",
               answers: {
                    a: "Brad Pitt",
                    b: "Dwayne Johnson(The Rock)",
                    c: "Ben Affleck",
                    d: "Christian Bale"
               },
               right: "d"
          },
          {
               id: "Q.no.4",
               question: "Who is the first european to visit India ?",
               answers: {
                    a: "Marco Polo",
                    b: "Alaxandar-the great",
                    c: "Vasco de gama",
                    d: "Louis XIV"
               },
               right: "c"
          },
          {
               id: "Q.no.5",
               question: "In DCEU, which actor has played the role Superman ?",
               answers: {
                    a: "Henry Cavils",
                    b: "Ryan Goslin",
                    c: "Chris Pratt",
                    d: "Daniel Racliffe"
               },
               right: "a"
          },
          {
               id: "Q.no.6",
               question: "Who was the teacher and path guide of Jesus Christ ?",
               answers: {
                    a: "St. Peter",
                    b: "St. Paul",
                    c: "St. Mary",
                    d: "St. John-the baptist"
               },
               right: "d"
          },
          {
               id: "Q.no.7",
               question: "Which country's flag is non-rectangular ?",
               answers: {
                    a: "Papua New Guinea",
                    b: "Democratic Republic of Combo",
                    c: "Nepal",
                    d: "Maldives"
               },
               right: "c"
          },
          {
               id: "Q.no.8",
               question: "Who discovered Oxygen ?",
               answers: {
                    a: "Lavoiser",
                    b: "Mendeleev",
                    c: "Henry Moslay",
                    d: "Joseph Priestley"
               },
               right: "d"
          },
          {
               id: "Q.no.9",
               question: "Who is the present Monarch of United Kingdom ?",
               answers: {
                    a: "Charles III",
                    b: "Elizabeth II",
                    c: "George XVI",
                    d: "Victoria III"
               },
               right: "a"
          },
          {
               id: "Q.no.10",
               question: "Which african country's population is mostly Hindu",
               answers: {
                    a: "South Africa",
                    b: "Egypt",
                    c: "Maurisas",
                    d: "Democratic Republic of Congo"
               },
               right: "c"
          }
     ];

     get allNotSelected() {
          return !(Object.keys(this.answered).length === this.quizQuestions.length)
     }

     get allRight() {
          return `slds-text-heading_medium slds-var-p-around_medium ${this.quizQuestions.length === this.rightAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
     }

     changed(e) {
          const { name, value } = e.target
          this.answered = { ...this.answered, [name]: value }
     }

     submitQuiz(e) {
          e.preventDefault()
          let rightAns = this.quizQuestions.filter(item => this.answered[item.id] === item.right)
          this.rightAnswers = rightAns.length
          console.log(this.rightAnswers);
          this.isSubmitted = true
     }

     resetQuiz(e) {
          this.answered = {}
          this.rightAnswers = 0
          this.isSubmitted = false
     }
}