import React from 'react';
// Tambien se puede importar asi y en extends solo agregar Component
// import React, { Component } from 'react'
import firebase from 'firebase';

import Chat from './Chat.jsx';
import Header from './Header.jsx';

// class App extends Component { }
class App extends React.Component {

  constructor () {
    super()
    this.state = {
      messages: [],
      user: null,
      count: 0
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  /* 
    componentWillMount: 
    Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización (y por lo tanto no renderizar dos veces el componente). Es importante sin embargo evitar causar cualquier clase de efecto secundario (petición HTTP por ejemplo) ya que este método se ejecuta en el servidor y hacer esto puede causar problemas de memoria.
  */
  componentWillMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        });
      } else {
        this.setState({
          user: null
        });
      }
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`) )
      .catch(error => console.error(`Error: ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(() => console.log('Te has desconectado'))
      .catch(error => console.log(`Error: ${error.code}: ${error.message}`))
  }
  
  // Tener en cuenta el estado "state" no se debe modificar nunca en este punto del render.
  render () {
    return (
      <section>
        <Header 
          appName='Chat time real'
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}
        />
      </section>
    )
  }
}

export default App;