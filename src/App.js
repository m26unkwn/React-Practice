import {Component} from 'react';

import './App.css';

class App extends Component{
  state=({name:"Monu"})


  changeState=(name)=>{
    this.setState({
      name:name
    })
  };
  
  
  changeStateByInput=(event)=>{
    this.setState({
      name:event.target.value
    })
  };

  render(){
    return (
      <div className="app">
        <br /> <br />
        <button onClick={()=>this.changeState('Pass Monu')}>Change state</button>
        <br />
        <button onClick={()=>this.changeState('Monu Shukla :(')}>Change state</button>
        <br/>
        <button onClick={this.changeState.bind(this,'Monu Shukla :)')}>Bind Change state</button>
        <br />
        <input type="text" onChange={this.changeStateByInput} value={this.state.name} />


        <br />
        <p>{this.state.name}</p> 
      </div>

    );
  }
}
export default App;
