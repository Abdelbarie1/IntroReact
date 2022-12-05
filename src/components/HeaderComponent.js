import React ,{Component} from "react";
import {Navbar , NavbarBrand,Jumbotron} from 'reactstrap';
import {} from 'react-bootstrap';

class Header extends Component{
    
    render(){
        return(
            <>
            <Navbar dark className="bg-primary">
                <div className='container'>
                    <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <div className="jumbotron">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;