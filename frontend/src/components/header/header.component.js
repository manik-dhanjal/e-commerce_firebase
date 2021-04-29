import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.components"
import CartDropdown from "../cart-dropdown/cart-dropdown.components"
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selectCurrentUser} from "../../redux/user/user.selector"
const Header = ({currentUser,cartHidden}) => {

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
            currentUser?
            <div className="sign-out option" onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/sign'>
              SIGN IN
            </Link>
          }
          <CartIcon/>
        </div>
        {!cartHidden?<CartDropdown/>:null}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  cartHidden:selectCartHidden,
  currentUser:selectCurrentUser
})
export default connect(mapStateToProps)(Header);