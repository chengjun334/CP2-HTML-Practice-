import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text:
      "Welcome to Digital Maze, Make Your Choice to Get to Your Destination?",
    leftLabel: "Wrong Way",
    centerLabel: "Enter Here",
    rightLabel: "Dead End",
    leftPage: "onthewrong",
    centerPage: "tooYoung",
    rightPage: "onthedead"
  },
  onthewrong: {
    text: "Keep Going",
    leftLabel: "Wrong Way",
    centerLabel: "Enter Here",
    rightLabel: "Dead Eoad",
    leftPage: "death",
    centerPage: "life",
    rightPage: "death"
  },
  onthedead: {
    text: "Keep Going",
    leftLabel: "Wrong Way",
    centerLabel: "Enter Here",
    rightLabel: "Dead End ",
    leftPage: "trap",
    centerPage: "tooYoung",
    rightPage: "trap"
  },
  life: {
    text: "Congratulation You've made it to the destination!",
    imageUrl: "https://media.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif"
  },
  tooYoung: {
    text: "Young Man Go Back",
    centerLabel: "Back",
    centerPage: "start"
  },
  trap: {
    text: " You are trapped "
  },
  death: {
    text: " Oops, It's dead end, Go back",
    centerLabel: "Back",
    centerPage: "start"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    var button1;
    var button2;
    var button3;

    if (pageData.leftPage) {
      button1 = (
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
      );
    }
    if (pageData.rightPage) {
      button3 = (
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      );
    }

    if (pageData.centerPage) {
      button2 = (
        <button onClick={() => this.goToPage(pageData.centerPage)}>
          {pageData.centerLabel}
        </button>
      );
    }

    return (
      <div className="App">
        <img src={pageData.imageUrl} />
        <p>{pageData.text}</p>
        {button1}
        {button2}
        {button3}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
