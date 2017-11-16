import React from 'react';
import ReactCardFlip from 'react-card-flip';
// import quizQuestions from './api/quizQuestions';



export default class Card extends React.Component  {
  constructor(props) {
  	super(props)
    this.handleClick = this.handleClick.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      isFlipped: false,
      hidden: "",
      show: "",
      isCorrect: false
    };
  }


  handleClick(event) {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }


  hiddenToFalse(){

    this.setState({ hidden: this.state.hidden })
  }

  showToTrue(){
     this.setState({ show: !this.state.show })
  }

  checkAnswer(event){      // if (correctCardAnswer === answerSliced){

    if (event.target.innerHTML === this.props.correctAnswer) {
      this.setState({ isCorrect: true });
      // todo addpoint
    } else {
      this.setState({ isCorrect: false });
    }

    this.setState({ isFlipped: !this.state.isFlipped });
 }

  render() {
    return (
    <div className="card">
      <div>cover</div>
      <ReactCardFlip isFlipped={this.state.isFlipped}>

          <div className="card-text" key="front">
             <h4> {this.props.question} </h4>
             <ul>
              <li onClick={this.checkAnswer}>{this.props.choices[0]}</li>
              <li onClick={this.checkAnswer}>{this.props.choices[1]}</li>
              <li onClick={this.checkAnswer}>{this.props.choices[2]}</li>
             </ul>
          </div>


        <div className="card-text" key="back">
          <p className={this.state.hidden}>{this.state.isCorrect ? 'correct' : 'incorrect'}</p>
          <div><button onClick={this.handleClick}>Flip Card</button></div>
        </div>

       </ReactCardFlip>
     </div>
    )
  }
}