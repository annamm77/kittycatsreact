import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Cat from './Cat/Cat'
import Footer from './Footer/Footer'

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
