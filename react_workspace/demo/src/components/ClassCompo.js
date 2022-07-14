import React, { Component } from "react";

class ClassComponent extends React.Component{
	constructor(){
		super();
		this.state={
			count :0
		};
		this.increase=this.increase.bind(this);
	}
	
    increase(){
        this.setState({count : this.state.count +1});
    }

	render(){
		return (
			<div style={{margin:'50px'}}>
			<h1>Welcome to Learn Tech </h1>
			<h3>Counter App using Class Component : </h3>
			<h2> {this.state.count}</h2>
			<button onClick={this.increase}> Add</button>

			</div>
		)
	}
}

export default ClassComponent;


// We call root.render() with the <ClassCompo name="Class Componenet" /> element.
// React calls the ClassCompo component with {name: 'Class Componenet'} as the props.
// Our ClassCompo component returns a <h1>Hello, Class Componenet</h1> element as the result.
// React DOM efficiently updates the DOM to match <h1>Hello, Class Componenet</h1>.
