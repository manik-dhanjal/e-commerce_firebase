import React from 'react';
import Homepage from "../src/pages/homepage/homepage.page"
import Shop from "../src/pages/shop/shop.page"
import {Route,Switch,Redirect} from "react-router"
import Header from "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"
import {auth,createUserProfileDocument,firestore} from "./firebase/firebase.utils"
import {connect} from "react-redux"
import setCurrentUser from "./redux/user/user.action"
import Checkout from "./pages/checkout/checkout.page"
import {uploadDataToStore} from "./firebase/firebase.utils"
import {updateShop} from "./redux/shop/shop.action"
class App extends React.Component {

  unsubscribeFromAuth = null;
  setCurrentUser = this.props.setCurrentUser;
  setShopData = this.props.setShopData;
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
    // uploadDataToStore('collections',SHOP_DATA)
    const collectionRef =firestore.collection('/collections')
    const shopData = {}
    this.unsubscribeFromCollection = collectionRef.onSnapshot((data)=>{
      data.docs.forEach((doc)=>{
        const item = doc.data();
        shopData[item.title.toLowerCase()] = {...item,routeName:encodeURI(item.title.toLowerCase())}
      })
      console.log(shopData)
      setTimeout(()=> this.setShopData(shopData),500 )
     
    })
    
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromCollection()
  }
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage}/>
          <Route path="/shop" component={Shop}/>
          <Route exact path='/sign' render={() => (this.props.currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>)} />
          <Route exact path = '/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setShopData: collection => dispatch(updateShop(collection))
})
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
