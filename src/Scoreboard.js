import React from 'react';
import './Scoreboard.css';




  export default function Scoreboard(props) {
    return (
    	<div className="player-card">
    		<div className="player-container">
           <h2 className="player-name"> {props.player.name} </h2>
           <div className="score">{props.player.score}</div>
           <button onClick={props.addPoint} className="add-point"> + </button>
           <button onClick={props.resetTimer} className="reset-button"> reset </button>
    		</div>
    	</div>
    	)
  }
  

