import { Component } from "react";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import { Link } from "react-router-dom";
import './css/Header.css';
import {DataContext} from './Context';


class Header extends Component {
    static contextType = DataContext;
    
    state = {
       toggle :false
    }

    menuToggle = () => {
        this.setState({toggle : !this.state.toggle})
    }
   

  render(){
   const {toggle} = this.state;
   const {cart} = this.context;
  return (
    <div className="App">
         <header>
               <div className="menu" onClick={this.menuToggle}>
                   <img src={Menu} alt="" width="20" />
               </div>
               <div className="logo">
                   <h1><Link to="/">Shopiphy</Link></h1>
               </div>
               <nav>
                   <ul className={toggle ? "toggle" : ""}>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/product">Products</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/login">Login / Register</Link></li>
                       <li className="close">
                            <img src={Close} onClick={this.menuToggle} alt="" width="20" /> 
                       </li>
                   </ul>
                   <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20" /> 
                        </Link>  
                   </div>
               </nav>
         </header>
    </div>
  );
}
}

export default Header;
