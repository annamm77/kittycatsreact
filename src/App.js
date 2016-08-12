import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Cat from './Cat'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cat />
        <Footer />
      </div>
    );
  }
}

export default App;
