import React, { Component, useState, useEffect } from "react";
import "./App.css";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Hello!",
//     };
//   }

//   componentDidMount() {
//     fetch(API + DEFAULT_QUERY)
//       .then((response) => response.json())
//       .then((data) => this.setState({ title: data.hits[0].title }));
//   }

//   render() {
//     return <h1> {this.state.title} </h1>;
//   }
// }
const App = () => {
  const [data, setData] = useState({ title: "hello" });

  useEffect(() => {
    const result = async () => {
      let result = await fetch(API + DEFAULT_QUERY);
      let res = await result.json();
      console.log(res);
      setData({ title: res.hits[1].title });
    };
    result();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};
export default App;
