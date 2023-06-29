import React, {Component} from 'react'

export default class Login extends Component{
  render () {
    return (
    <form>
        <h3>Sign In</h3>

        <div className='mb-3'>
            <lable>Email</lable>
            <input type='email'
            className='form-control'
            placeholder='Enter email'/>
        </div>

        <div className='mb-3'>
            <lable>Password</lable>
            <input type='password'
            className='form-control'
            placeholder='Enter password'/>
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primanry'>
                Submit
            </button>
        </div>
        <p className='forgot-password test-right'>
            <a href='/signUp_component'>Sign Up</a>
        </p>

    </form>
  )
}
}
