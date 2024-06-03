import React, { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../Configuration/Api'
import { AppContext, useAppContext } from '../StateManagement/Context'
import login from "../Assests/login.jpg"

function LoginScreen({ isUserLogin }) {
    const { handleUserData } = useAppContext(AppContext)
    const personReducer = (state, action) => {
        switch (action.type) {
            case "email": {
                return {
                    ...state,
                    email: action.email
                }
            }
            case "password": {
                return {
                    ...state,
                    password: action.pass
                }
            }
            default:
                return state
        }

    }
    const [person, dispatchPerson] = useReducer(personReducer, { email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await userLogin(person)
        if (response?.data?.success) {
            isUserLogin(true);
            handleUserData(response?.data?.Data)
            navigate("/");
            return
        } else {
            alert(response?.data?.message)
        }
    }

    return (
        <div className='container text-center'>

            <div className='row text-center'>
                <div className='col-5'>
                    <img src={login} style={{ width: "100%", height: "400px" }} />
                </div>
                <div className='col-7'>
                    <h1 className='text-center text-uppercase'>Login</h1>
                    <form className=' w-75 m-auto mb-2 text-center mt-5 ' onSubmit={handleSubmit}>
                        <div className='row'>
                            <label className='fw-bold fs-3 col-4 text-start '>
                                Email
                            </label>
                            <input className='col-8 mt-2' style={{height:"40px"}} name='name' placeholder='please enter email ' type='email' onChange={(e) => dispatchPerson({ type: "email", email: e.target.value })} />
                        </div>
                        <div className='row mt-3'>
                            <label className='fw-bold  fs-3 col-4 text-start'>
                                Password
                            </label>
                            <input className='col-8' name='pass' placeholder='please enter password' type='password' onChange={(e) => dispatchPerson({ type: "password", pass: e.target.value })} />
                        </div>

                        <input className='m-3' type='submit' value={"Log In"} />
                        <p>Create a new account ? <Link to="/signup">SignUp</Link></p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginScreen