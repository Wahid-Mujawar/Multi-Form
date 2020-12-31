import React, { Component } from 'react'

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
      this.setState([input]: e.target.value);
   }


   render() {
      const { step } = this.state;
      const { firtsname, lastname, email, occupation,bio,
      city } = this.state;
      const values = { firtsname, lastname, email, occupation,bio,
      city } = this.state;


      return (
         <div>
            
         </div>
      )
   }
}

export default UserForm
