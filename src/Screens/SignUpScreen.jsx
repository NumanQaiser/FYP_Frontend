import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { userCreate } from '../Configuration/Api'
import signup from "../Assests/signup.jpg"
function SignUpScreen() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const submit = (data) => {
    // call the signup api here
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    userCreate(user);

  }

  return (
    <div className='container mt-4'>

      <div className='row'>
        <div className='col-5'>
          <img src={signup} style={{ width: "100%", height: "400px" }} />
        </div>
        <div className='col-7'>
          <h1 className='text-center text-capitalize'>Sign Up</h1>
          <form className='w-75 m-auto mb-2 mt-3 text-center' onSubmit={handleSubmit(submit)}>
            <div className='row'>
              <label className='fw-bold fs-3 col-4 text-start'>
                Name
              </label>
              <input className='col-8 '   {...register("name", { required: true })} type='text' placeholder='Enter your Name' />
            </div>

            <div className='row mt-3' >
              <label className='fw-bold col-4 fs-3 text-start'>
                Email
              </label>
              <input className='col-8'  {...register("email", { required: true })} type='email' placeholder='Enter your Email' />
            </div>

            <div className='row mt-3' >
              <label className='fw-bold col-4 text-start fs-3'>
                Password
              </label>
              <input className='col-8'  {...register("password", { required: true })} type='password' placeholder='Enter your Password' />
            </div>
            <input className='m-3' type='submit' value={"Sign Up"}/>
            <p>Already have an account ? <Link to="/login">LogIn</Link></p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUpScreen