import React from 'react'
import './Card.css';


export default class CardFront extends React.Component {
	constructor(props){
		super(props)
		this.clickHandler = this.clickHandler.bind(this)
		this.state = {
			content: ""
		}
	}

	clickHandler(){


	}

	render() {
		return<div onClick={this.clickHandler} className="card-container card-side side-front">
						<div className="card-body">
							<div className="front"
									
							</div>
							<div className="back">
									answer
							</div>
						</div>
		      </div>
	}








}