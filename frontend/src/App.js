import React from 'react';
import Homepage from "../src/pages/homepage/homepage.page"
import Shop from "../src/pages/shop/shop.page"
import {Route,Switch,Redirect} from "react-router"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
import {auth,createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import setCurrentUser from "./redux/user/user.action"
class App extends React.Component {

  unsubscribeFromAuth = null;
  setCurrentUser = this.props.setCurrentUser;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async authUser=>{
      if(authUser){
        try{
          await createUserProfileDocument(authUser)
          this.setCurrentUser(authUser)
        }
        catch(e){
          console.log(e)
        }
      }
      else{
        this.setCurrentUser(null)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route path="/shop" component={Shop}/>
          <Route exact path='/sign' render={() => (this.props.currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
