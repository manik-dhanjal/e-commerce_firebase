import React, { Component } from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils"
export class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name:'',
          email: '',
          password: '',
          cpassword:''
        };
      }
    
      handleSubmit = async event => {
        event.preventDefault();
        const {email,password,name,cpassword} = this.state;
        const displayName = name;
        if(cpassword!==password) return alert("password doesn't match")
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          const updatedUserCredentials = await auth.currentUser.updateProfile({ displayName: name })
          await createUserProfileDocument(user,{displayName})
        }
        catch(e){
          console.log(e)
          alert(e.message)
        }

        this.setState({ email: '', password: '',cpassword:'',name:'' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    render() {
        return (
            <div className='sign-up'>
            <h2>I don't have an account</h2>
            <span>Sign Up with your email and password</span>
    
            <form onSubmit={this.handleSubmit}>
            <FormInput
                name='name'
                type='text'
                handleChange={this.handleChange}
                value={this.state.name}
                label='Display Name'
                required
              />
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
              <FormInput
                name='cpassword'
                type='password'
                value={this.state.cpassword}
                handleChange={this.handleChange}
                label='Confirm Password'
                required
              />
              <div className="btn-group">
                <CustomButton type='submit'> Sign Up </CustomButton>
              </div>
            </form>
          </div>
        )
    }
}

export default SignUp
