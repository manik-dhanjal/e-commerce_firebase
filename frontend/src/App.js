import React from 'react';
import Homepage from "../src/pages/homepage/homepage.page"
import Shop from "../src/pages/shop/shop.page"
import {Route,Switch} from "react-router"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Homepage}/>
        <Route exact={true} path="/shop/:type" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
