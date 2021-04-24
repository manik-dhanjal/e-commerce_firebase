import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import auth,{db} from "../../firebase/firebase.utils"
import './header.styles.scss';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      user:null
    }
  }
  componentDidMount(){
    auth.onAuthStateChanged( event=>{
      console.log(event)
      if(event){
        const userDocRef = db.collection("users").doc(event.email)
        db.runTransaction((transaction)=>{
          return transaction.get(userDocRef).then((userDoc)=>{
            if(!userDoc.exists)
              {
                transaction.set(userDocRef,{ name:event.displayName })
              }
          })
        }).then(()=>{
          this.setState({user:{
            name:event.displayName,
            mail:event.email
          }})
        })
        .catch((e)=>{
          console.log(e)
        })
        
      }
      else{
        this.setState({user:null})
      }
      
    })
  }
  handleSignOut(){
    auth.signOut()
  }
  render(){
  return(
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {
            this.state.user?
            <div className="sign-out" onClick={this.handleSignOut}>SIGN OUT</div>
            :
            <Link className='option' to='/sign'>
              SIGN IN
            </Link>
          }
          
        </div>
      </div>
    );
  }
}

export default Header;