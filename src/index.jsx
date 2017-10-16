import React from 'react';
import ReactDOM from 'react-dom';
// Aca igual se puede importar así 
// import { render } from 'react-dom'
import firebase from 'firebase';

import App from './components/App.jsx';

const config = {
  apiKey: "AIzaSyBXK9CuGeeByMOvMofmQHX0wHvXSO_p5_w",
  authDomain: "react-chat-f03b1.firebaseapp.com",
  databaseURL: "https://react-chat-f03b1.firebaseio.com",
  projectId: "react-chat-f03b1",
  storageBucket: "react-chat-f03b1.appspot.com",
  messagingSenderId: "163859544272"
};

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// si se importa el render otra forma de hacerlo.
/* render(
  <App />,
  document.getElementById('root')
); */
