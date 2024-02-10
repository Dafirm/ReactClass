import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import PersonInfo from './components/PersonInfo';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Greeting name="React Typescript Learner" />
      <PersonInfo name="John Doe" age={30} email="john@example.com"/>
      <Product name= 'Laptop' price={999} />
    </div>
  );
}

export default App;
