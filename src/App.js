import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card';
import Scoreboard from './Scoreboard';
import quizQuestions from './api/quizQuestions';
import './App.css';

var _ = require('underscore');


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      quizQuestions: quizQuestions,
      players: [{
        name:"Jess",
        score: 0,
      }, {
        name:"Fiona",
        score: 0,
      }]

    }
  }


  addPoint(index){
    var players = this.state.players
    players[index].score += 1
    this.setState({ players: players })
  }

  resetTimer(index){
    var players = this.state.players
    players[index].score = 0
    this.setState({ players: players })

  }

  addPoint() {
    var players = this.state.players
    players[0].score = ++players[0].score
    this.setState({ players: players })
  }

  render() {
      const { quizQuestions } = this.state
      const { players } = this.state

    return (
      <div className="App">
       <div className="game-board">

       <div className="timer">
       </div>

        <div className="flex-container">
          <Scoreboard player={players[0]} addPoint={() => this.addPoint(0) } resetTimer={() => this.resetTimer(0)}  />
          <Scoreboard player={players[1]} addPoint={() => this.addPoint(1) } resetTimer={() => this.resetTimer(1)}  />
        </div>

        <div className=" flex-container">
          {quizQuestions.map((content, index) => {
            return <Card key={ index } 
                          question={content.question} 
                          choices={ _.each( content.answers, function(answer){ 
                                return answer
                          })}
                          correctHandler={this.addPoint}
                          correctAnswer={content.correctAnswer} />
          })}
        </div>

        </div>
      </div>
    );
  }
}

export default App;
