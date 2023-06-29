import React, {Component}from 'react'

export default class signUp_component extends Component {
 
 constructor(props){
  super(props)
  this.state={
    fname:"",
    lname:"",
    email:"",
    password:"",
  };
  this.handleSubmit = this.handleSubmit.bind(this);
 }
 
handleSubmit(e){
  e.preventDefault();
  const{fname, lname, email, password} =this.state;
  console.log(fname, lname, email, password);
  fetch("http://localhost:3000/", {
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type": "application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*"
    }, 
    body:JSON.stringify({
      fname,
      lname,
      email,
      password,
    }),
  })
  .then((res) => res.json())
  .then((data) =>{
    console.log(data, "userRegister");
  })
}

  render(){
  return (
    
    <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className='mb-3'>
            <lable>First name</lable>
            <input type='test'
            className='form-control'
            placeholder='First Name'
            onChange={e=>this.setState({fname:e.target.value})}
            />
            
        </div>

        <div className='mb-3'>
            <lable>Last name</lable>
            <input type='test'
            className='form-control'
            placeholder='Last Name'
            onChange={e=>this.setState({lname:e.target.value})}
            />
        </div>

        <div className='mb-3'>
            <lable>Email</lable>
            <input type='email'
            className='form-control'
            placeholder='Enter email'
            onChange={e=>this.setState({email:e.target.value})}
            />
        </div>

        <div className='mb-3'>
            <lable>Password</lable>
            <input type='password'
            className='form-control'
            placeholder='Enter password'
            onChange={e=>this.setState({password:e.target.value})}/>
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primanry'>
                Submit
            </button>
        </div>
        <p className='forgot-password test-right'>
            Already register? <a href='/login_component'>Login</a>
        </p>

    </form>
  )
}
}
