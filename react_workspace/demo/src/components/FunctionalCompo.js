import React, { useState } from "react";

const FunctionalComponent=(props)=>{
	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count+1);
	}

	return (
		<div style={{margin:'50px'}}>
			<h1>Welcome to Learn Tech </h1>
			<h3>Counter App using Functional Component : </h3>
		<h2>{count}</h2>
			<button onClick={increase}>Add</button>
		</div>
		
	)
}


export default FunctionalComponent;
