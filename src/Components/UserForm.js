import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

export class UserForm extends Component {
   state = {
      step: 1,
      firtsname: '',
      lastname: '',
      email: '',
      occupation: '',
      bio: '',
      city: ''
   }

   //Proceed to next Step

   nextStep = () => {
      const {step} = this.state;
      this.setState({
         step: step + 1
      });
   }

   //Go to pervious Step

   previousStep = () => {
      const {step} = this.state;
      this.setState({
         step: step - 1
      });
   }

   //Handle fields change

   handleChange = input => e => {
      this.setState({[input]: e.target.value});
   }


   render() {
      const { step } = this.state;
      const { firtsname, lastname, email, occupation,bio,
      city } = this.state;
      const values = { firtsname, lastname, email, occupation, bio,
      city }

      switch(step) {
         case 1:
            return (
               <FormUserDetails
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={values}/>
            )

         case 2: 
         return (
            <FormPersonalDetails
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}/>
         )
            case 3: 
            return (
               <FormPersonalDetails
               nextStep={this.nextStep}
               previousStep={this.previousStep}
               values={values}/>
            )
      }
   }
}

export default UserForm
