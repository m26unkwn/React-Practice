import { Component } from "react";

import "./App.css";

import { Parent } from "./components/parentToChild/Parent";

import Users from "./users/Users";

class App extends Component {
  state = {
    title: "placeholder title",
  };
  doSomething = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <div className='app'>
        <Parent
          doSomething={this.doSomething.bind(this, "ParentToChild")}
          title={this.state.title}
        />
        <Users />
      </div>
    );
  }
}
export default App;
