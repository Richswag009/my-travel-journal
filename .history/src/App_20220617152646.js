
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
        <Card
        img={items.coverImg}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        Location={items.stats.Location}
        title={items.title}
        price={items.price}
        />
      )
    })
    return (
      <div className="App">
       <Header/>
       <Hero/>
       {cards}
      </div>
    );
  }
}

export default App;
