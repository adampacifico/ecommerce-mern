import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";

import Cart from "./components/cartScreen/Cart";
import Product from "./components/productScreen/Product";
import Home from "./components/homeScreen/Home";
import Nav from "./components/navbar/Nav";
import BackDrop from "./components/backdrop/BackDrop";
import SideDrawer from "./components/sidedrawer/SideDrawer";

function App() {
  const [toggleSide, setToggleSide] = useState(false)
  return (
    <Router>
      <Nav show={()=> setToggleSide(true) }/>
      <SideDrawer show={toggleSide} close={()=> setToggleSide(false)}/>
      <BackDrop show={toggleSide} close={()=> setToggleSide(false)}/>
      {/* sidedrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Product} path="/product/:id" exact />
          <Route component={Cart} path="/cart" exact />
        </Switch>
      </main>
      {/* homescreen */}
      {/* productScreen */}
      {/* cartscreen */}
    </Router>
  );
}

export default App;
