import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';

import {Switch ,Route,Redirect} from 'react-router-dom'
class Main extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dishes:DISHES,
        }
    }

    

    render () {

      const Homepage=()=>{
        return (
          <Home/>
        );
      }
        return (
          <div>
            <Header/>
              <Switch>
                  <Route path='/home' component={Homepage}/>
                  <Route excact path='/menu' component={()=><Menu dishes={this.state.dishes}/>}/>
                  <Redirect to="/home" />
              </Switch>
            <Footer/>
          </div>
        );
      }
      

}

export default Main;
