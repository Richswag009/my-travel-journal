
import React,{Component} from 'react';
import './App.css';

// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Navbar/>
       <Maincontent/>
       <Footer/>
        </div>
    );
  }
}

export default App;
