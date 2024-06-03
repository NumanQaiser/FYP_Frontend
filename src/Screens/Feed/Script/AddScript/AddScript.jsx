import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { AppContext, useAppContext } from '../../../../StateManagement/Context'
import { addScript } from '../../../../Configuration/API\'s/Script'
import Skeleton from 'react-loading-skeleton'
import scriptadded from "../../../../Assests/scriptadded.jpg"
function AddScript() {
    const { userData } = useAppContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(false)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            description: "",
            code: "",
            type: "",
        }
    })

    const submit = async (data) => {
        //call the create api of book 

        const add = {
            title: data.title,
            description: data.description,
            code: data.code,
            type: data.type,
            id: userData._id
        }
        setLoading(true)
        const response = await addScript(add);
        if (response?.status === 200) {
            setLoading(false)
            setResponse(true)
        }
        else {
            alert("Something went wrong");
            console.log("Error into script addition", response)
        }
    }

    return (
        <div className='container'>

            <p className='text-center text-capitalize mt-2'>
                You can add your code script here . Please Write the detail description about your
                script .what is does and what kind of enviornement it requires to run .
            </p>

            {
                loading ?
                    <Skeleton count={20} />
                    :
                    response ?

                        <>
                            <img src={scriptadded} style={{ width: "60%", height: "300px" ,marginLeft:"20%" }} />
                            <div className='text-center mt-3'>
                                <p className='text-success fw-bold fs-3'>Congratulations! Your script has been uploaded successfuly</p>
                                <p>Go back to Main Dashboard <Link to="/">Home</Link></p>
                            </div>
                        </>
                        :
                        <form className='w-75 m-auto mb-2 ' onSubmit={handleSubmit(submit)}>
                            <div className='row' >
                                <label className='fw-bold text-start ps-3 fs-3 col-4'>
                                    Title
                                </label>
                                <input className='col-6'   {...register("title", { required: true })} type='text' placeholder='Enter your script title' />
                            </div>

                            <div className='row mt-3' >
                                <label className='fw-bold text-start ps-3 fs-3 col-4'>
                                    Description
                                </label>
                                <input className='col-6' {...register("description", { required: true })} type='text' placeholder='Enter your script description' />
                            </div>

                            <div className='row mt-3' >
                                <label className='fw-bold text-start ps-3 fs-3 col-4'>
                                    Script
                                </label>
                                <textarea className='col-6' {...register("code", { required: true })} type='text' placeholder='Enter your script here' />

                            </div>

                            <div className='row mt-3'>
                                <label className='fw-bold text-start ps-3 fs-3 col-4'>
                                    Type
                                </label>
                                <div className='col-6'>
                                    <input className='' {...register("type")} type="radio" value="Public" />
                                    <span className='ps-3 '>Public</span><br />
                                    <input {...register("type")} type="radio" value="Private" />
                                    <span className='ps-3'>Private</span> <br />
                                </div>

                            </div>

                            <div className='text-center mt-3'>
                                <input className=' text-center bg-dark text-white mb-3' type='submit' value={"Add new Script"} />
                                <p>Go back to Main Dashboard <Link to="/">Home</Link></p>
                            </div>
                        </form>
            }

        </div>
    )
}

export default AddScript