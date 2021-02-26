import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Below we are instantiating a default state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

  //Creating an method called callAPI that will fetch data from an API and store that response in the this.state.apiResponse
  callAPI() {
    fetch('http://localhost:9000/testAPI')
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
  }
//Create a react lifecycle method that executes the callAPI method after the component mounts
  componentDidMount() {
    this.callAPI();
  }
  render() {
    return(
      <div className= 'App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'> Welcome to React </h1>
        </header>
        <p className='App-intro'>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;