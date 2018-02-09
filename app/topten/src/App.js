import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RsvpList from "./rsvps/rsvplist.js"
import TopicsList from "./topics/topicslist.js"
import Rsvps from "./seeds/rsvps.js"

const topics = [
  {topic: "text 1", count: 12},
  {topic: "text 2", count: 12},
  {topic: "text 3", count: 12},
  {topic: "text 4", count: 12}
]


class App extends Component {
  render() {
    console.log(Rsvps)
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Ja toch
        </p>
        <TopicsList topics={topics} />
        <RsvpList rsvps={Rsvps}/>
      </div>
    );
  }
}

export default App;
