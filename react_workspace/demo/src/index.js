import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassCompo from './components/ClassCompo'
import FunctionalComponent from './components/FunctionalCompo';
import Clock from './components/Clock';
import Element from './components/Element';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <ClassCompo name_new='class component'/>
      <FunctionalComponent name='functional component'/>
    </div>
  
);

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);
