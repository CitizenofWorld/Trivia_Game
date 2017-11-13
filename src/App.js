import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Card.css';



const triviaQuestions = [{
  question: 'what song by Michael Jackson contains the lyrics: Annie are you OK?',
  answer: 'Smooth Criminal'
},{
  question: 'What year was Facebook founded?',
  answer: "2004"
},{
  question: "Callisto is the name of the moon orbiting what planet?",
  answer: "Jupiter"
},{
  question: "Who painted the Sistine Chapel?",
  answer: "Michelangelo"
}
]


class App extends Component {

  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      question: triviaQuestions[0].question,
      answer:triviaQuestions[0].answer
    }
  }


  clickHandler(event){
     this.classList.toggle('flip')
  }

  timer() {

  }





  render() {

    return (
      <div className="App">
      <div className="game-board">
       <div className="row- 2 players">
        <div className="col- 1 player- 1">PLAYER 1</div>
        <div className="col- 1 player- 2">PLAYER 2</div>
       </div>
       <div className="row- 1 scoreboard">SCOREBOARD</div>

        <div className="row- 3">

          <div onClick={this.clickHandler} className="col- 1 card-container">
            <div className="flipper">
              <div className="front card-img">
              </div>
              <div className="back">
                {this.state.question}
              </div>
            </div>
            </div>


          <div className="col- 2 card-img"></div>
          <div className="col- 3 card-img"></div>
        </div>

        <div className="row- 4">
          <div className="col- 1 card-img"></div>
          <div className="col- 2 card-img"></div>
          <div className="col- 3 card-img"></div>
        </div>

        <div className="row- 5">
          <div className="col- 1 card-img"></div>
          <div className="col- 2 card-img"></div>
          <div className="col- 3 card-img"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
