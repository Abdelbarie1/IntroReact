import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishdetailComponent';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';

import {Switch ,Route,Redirect} from 'react-router-dom'
class Main extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        }
    }

    

    render () {

      const Homepage=()=>{
        return (
          <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotion={this.state.promotions.filter((promo)=>(promo.featured))[0]}
          leader={this.state.leaders.filter((leader)=>(leader.featured))[0]}
          />
        );
      }
        return (
          <div>
            <Header/>
              <Switch>
                  <Route path='/home' component={Homepage}/>
                  <Route excact path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
                  <Route exact path="/contactus" component={Contact}/>
                  <Redirect to="/home" />
              </Switch>
            <Footer/>
          </div>
        );
      }
      

}

export default Main;
