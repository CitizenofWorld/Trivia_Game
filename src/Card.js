import React from 'react';
import ReactCardFlip from 'react-card-flip';
import quizQuestions from './api/quizQuestions';



export default class Card extends React.Component  {
  constructor(props) {
  	super(props)
    this.handleClick = this.handleClick.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      isFlipped: false,
      hidden: 'hidden',
      show: 'show'

    };
  }


  handleClick(event) {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }


  checkAnswer(event){
    var clickedAnswer = event.target.innerHTML
    const answerSliced = clickedAnswer.split(" ").slice(1).join(" ")
    const correctCardAnswer = this.props.correctAnswer
      if (correctCardAnswer === answerSliced){
       this.setState({ isFlipped: !this.state.isFlipped });
      }else{
        this.setState({ isFlipped: !this.state.isFlipped });
      }
 }

  render() {
    return (
    <div className="card">
      <ReactCardFlip isFlipped={this.state.isFlipped}>
      
          <div className="card-text" key="front">
             <h4> {this.props.question} </h4>
             <ul>
              <li onClick={this.checkAnswer} > {this.props.choices[0]}</li>
              <li onClick={this.checkAnswer} > {this.props.choices[1]}</li>
              <li onClick={this.checkAnswer} > {this.props.choices[2]}</li>
             </ul>
          </div>


        <div className="card-text" key="back">
          <p className="hidden"> You are correct! </p>
          <p className="hidden"> Incorrect </p>
          <div><button onClick={this.handleClick}>Flip Card</button></div>
        </div>

       </ReactCardFlip>
     </div>
    )
  }
}