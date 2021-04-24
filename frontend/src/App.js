import React from 'react';
import Homepage from "../src/pages/homepage/homepage.page"
import Shop from "../src/pages/shop/shop.page"
import {Route,Switch} from "react-router"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route exact={true} path="/shop/:type" component={Shop}/>
        <Route path='/sign' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
