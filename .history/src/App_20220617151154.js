
import React,{Component} from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Card from './component/Card';
// import images from 'pu'
import Data from './Data'

// import Users from './component/users/Users';
class App extends Component{
  render(){
    const cards =Data.map(items=>{
      return(
        <Card
        img={items.coverImg}
        rating={items.stats.rating}
        reviewCount={items.stats.ReviewCount}
        Location={items.stats.location}
        title={items.stats.title}
        price={items.stats.price}
        />
      )
    })
    return (
      <div className="App">
       <Header/>
       <Hero/>
       <cards/>
      </div>
    );
  }
}

export default App;
