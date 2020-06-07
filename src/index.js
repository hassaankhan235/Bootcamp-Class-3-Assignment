import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hi () {
  return <div>
  <div className='main'> Hi World I Am Hassaan Khan</div>
  <strong><h2>Unordered List</h2></strong>
  <ul> <li> The sum of 3 & 2 is {3+2}</li>
  <li>The Multiple of 2 & 2 is {2*2}</li></ul>
  <br></br>
  <h2>Ordered List</h2>
  <ol><li>This is First line in Ordered list</li></ol>
  </div>
}
ReactDOM.render(
  <div> <Hi/> <h2>Component</h2>
  <App/></div>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
