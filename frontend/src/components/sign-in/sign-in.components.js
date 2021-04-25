import React from 'react';

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {auth,signInWithGoogle} from "../../firebase/firebase.utils"
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
      const user =await auth.signInWithEmailAndPassword(email, password)
      console.log(user)
      this.setState({ email: '', password: '' });
    }
    catch(e){
      console.log(e)
      alert(e.message)
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="btn-group">
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} blueBtn={true}> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;