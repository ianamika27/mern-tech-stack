import React, { useState } from 'react'; 

function Element() {
  
    // const element = <h1>Hello, world!</h1>;
    // const name = 'Josh Perez';
    // const element = <h1>Hello, {name}</h1>;

    // function formatName(user) {
    //   return user.firstName + ' ' + user.lastName;
    // }
    
    // const user = {
    //   firstName: 'Harper',
    //   lastName: 'Perezzz'
    // };
    
    // const element = (
    //   <h1>
    //     Hello, {formatName(user)}!  </h1>
    // );

    // function getGreeting(user) {
    //   if (user) {
    //     return <h1>Hello, {formatName(user)}!</h1>;  }
    //   return <h1>Hello, Stranger.</h1>;
    // }

    // const element = (
    //   <h1>{getGreeting(user)}</h1>
    // );

    // array distructuring
    const [count, setCount] = useState(0); 
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
    // const element = <h1>Hello, world from Element.js</h1>; 
    // return ( element )
}

export default Element