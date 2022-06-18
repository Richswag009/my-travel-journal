
import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Card from './component/Card';
import Data from './Data'

// import Users from './component/users/Users';
class App extends Component{
  render(){
    const cards =Data.map(items=>{
      return(
        <Hero
        key={items.id}
       {...items}
       />
      )
    })
    return (
      <div className="App">
       <Header/>
       {cards}
      </div>
    );
  }
}

export default App;
