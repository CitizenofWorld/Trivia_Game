import React from 'react';
import ReactCardFlip from 'react-card-flip';





export default class Card extends React.Component  {
  constructor(props) {
  	super(props)
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isFlipped: false,
      isCorrect: false,
    };
  }


  handleClick(event) {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  checkAnswer(event){
    if (event.target.innerHTML === this.props.correctAnswer) {
      this.setState({ isCorrect: true, isFlipped: !this.state.isFlipped });
      this.props.addPoint
    } else {
      this.setState({ isCorrect: false, isFlipped: !this.state.isFlipped });
    }
 }



  render() {
    return (

    <div className="card">
      <ReactCardFlip isFlipped={this.state.isFlipped}>

          <div className="card-text" key="front">
             <h5> {this.props.question} </h5>
              <ul>
                <li onClick={this.checkAnswer} >{this.props.choices[0]}</li>
                <li onClick={this.checkAnswer} >{this.props.choices[1]}</li>
                <li onClick={this.checkAnswer} >{this.props.choices[2]}</li>
              </ul>
          </div>


        <div className="card-text" key="back">
          <p>{this.state.isCorrect ? 'correct' : 'incorrect'}</p>
          <div><button onClick={this.handleClick}>Flip Card</button></div>
        </div>

       </ReactCardFlip>
     </div>
    )
  }
}