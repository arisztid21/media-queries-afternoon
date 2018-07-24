import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      showmenu: false,
    }
  }

  render() {
    const {showmenu} = this.state
    return (
      <div className="app">
      <nav>
        <div className="brand small">Start Bootstrap</div>
        <div className="menu small"><button onClick={()=>this.setState({showmenu: !showmenu})}></button></div>
        <div className="brand"></div>
          <div className="menu large">
            <div className="services">SERVICES</div>
            <div className="portfolio">PORTFOLIO</div>
            <div className="about">ABOUT</div>
            <div className="team">TEAM</div>
            <div className="contact">CONTACT</div>
          </div>
      </nav>
        <div className="bootstrap"><h1>Start Bootstrap</h1></div>
        <nav className={showmenu ? "drawer open" : "drawer"}>
          <div className="services">SERVICES</div>
          <div className="portfolio">PORTFOLIO</div>
          <div className="about">ABOUT</div>
          <div className="team">TEAM</div>
          <div className="contact">CONTACT</div>
        </nav>
        <div className="welcome"><h3>welcome To Our Studio!</h3></div>
        <div className="meetyou"><h1>IT'S NICE TO MEET YOU</h1></div>
        <div className="buttoncontainer"><button className="more">TELL ME MORE</button></div>
      </div>
    );
  }
}

export default App;
