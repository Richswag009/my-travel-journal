
import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Card from './component/Card';

// import Users from './component/users/Users';
class App extends Component{
  render(){

    return (
      <div className="App">
       <Header/>
       <Hero/>
       <Card
       img='image12.png'
       star='./images/Star-1.png'
       rating='5.0'
       reviewcount={6}
       country='USA'
       title='Life lessons with Katie Zaferres'
       price={154}/>
        </div>
    );
  }
}

export default App;
