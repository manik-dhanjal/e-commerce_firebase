import React from 'react';
import Homepage from "../src/pages/homepage/homepage.page"
import Shop from "../src/pages/shop/shop.page"
import {Route,Switch,withRouter} from "react-router"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async authUser=>{
      if(authUser){
        try{
          await createUserProfileDocument(authUser)
          this.setState({user:{
            authUser
          }})
          this.props.history.push("/")
        }
        catch(e){
          console.log(e)
        }
      }
      else{
        this.setState({user:null})
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header signInState = {this.state.user?auth:null}/>
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route exact={true} path="/shop/:type" component={Shop}/>
          <Route path='/sign' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
