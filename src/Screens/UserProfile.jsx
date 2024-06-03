import React, { useEffect, useState } from 'react'
import { deleteUser } from '../Configuration/Api'
import { AppContext, useAppContext } from '../StateManagement/Context';

function UserProfile({ user }) {
  const { loginUser, userData } = useAppContext(AppContext)
  console.log(userData)
  const handleDelete = () => {
    deleteUser(userData._id);
    loginUser(false)

  }
  return (
    <div className='container text-center mt-3 w-75'>

      <div className='bg-light container w-75 '>
        <div className='row'>
          <label className='fw-bold fs-3 m-1 text-uppercase col-3 text-start'>Name : </label>{"\t\t"}
          <span className=' fs-3 m-1 col-8 text-start'>{userData.Name}</span>
        </div>
        <br />
        <div className='row'>
          <label className='fw-bold fs-3 m-1 text-uppercase col-3 text-start'>Email : </label>{"\t\t"}
          <span className=' fs-3 m-1 col-8 text-start'>{userData.Email}</span>
        </div>
        <br />
        <div className='row'>
          <label className='fw-bold fs-3 m-1 text-uppercase col-3 text-start '>Password: </label>{"\t\t"}
          <span className=' fs-3 m-1 col-8 text-start'>{userData.Password}</span>
        </div>
        
        <br />
        <input className='bg-danger text-white fs-5 text-center fw-bold mb-3' value={"Delete Profile"} type='button' onClick={handleDelete} />
      </div>
    </div>
  )
}

export default UserProfile