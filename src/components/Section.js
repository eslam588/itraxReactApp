import React , { Component } from "react";
import Products from "./Section/Products";
import Details from "./Section/Details";
import Cart from './Section/Cart'
import { Route} from "react-router";
import Payment from "./Section/Payment";

class Section extends Component {
  render(){
  return (
    <section>
        <Route path="/" component={Products} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment}/>
    </section>
  );
}
}

export default Section ;
