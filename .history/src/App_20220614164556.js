
import React,{Component} from 'react';
// import './App.css';
import Navbar from './component/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';// import Navbar from './component/layout/Navbar';
// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Navbar/>
        </div>
    );
  }
}

export default App;
