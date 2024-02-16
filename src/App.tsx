import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import PersonInfo from './components/PersonInfo';
import Product from './components/Product';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Greeting name="React Typescript Learner" />
        <PersonInfo name="John Doe" age={30} email="john@example.com" />
        <Product name="Laptop" price={999} />
        <Counter />
     
      </div>
    </Provider>
  );
}

export default App;
