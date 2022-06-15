
import React,{Component} from 'react';
import './App.css';
import Maincontent from './component/maincontent/Maincontent';
import Navbar from './component/layout/Navbar';
// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Navbar/>
       <Maincontent/>
        </div>
    );
  }
}

export default App;
