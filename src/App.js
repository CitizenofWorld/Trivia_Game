import React, { Component } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import quizQuestions from './api/quizQuestions';
import './App.css';

var _ = require('underscore');


class App extends Component {

  constructor(props){
    super(props)
    this.addPoint = this.addPoint.bind(this)
    this.state = {
      quizQuestions: quizQuestions,
      turnCounter: 0,
      players: [{
        name:"Player 1",
        score: 0,
      }, {
        name:"Player 2",
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

  render() {
      const { quizQuestions } = this.state
      const { players } = this.state
      var { turnCounter } = this.state

    return (
      <div className="App">
       <div className="game-board">
        <header>
        <div className="flex-container">
          <Scoreboard player={players[0]} addPoint={() => this.addPoint(0) } resetTimer={() => this.resetTimer(0)}  />
          <Scoreboard player={players[1]} addPoint={() => this.addPoint(1) } resetTimer={() => this.resetTimer(1)}  />
        </div>
        </header>

        <div className=" flex-container">
          {quizQuestions.map((content, index) => {
            return <Card key={ index } 
                          question={content.question} 
                          choices={ _.each( content.answers, function(answer){ 
                                return answer
                          })}
                          correctAnswer={content.correctAnswer}  />
          })}
        </div>

        </div>
      </div>
    );
  }
}

export default App;
