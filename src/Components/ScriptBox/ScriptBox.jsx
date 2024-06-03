import React, { useState } from 'react'
import person from "../../Assests/person.jpg"
import personal from "../../Assests/personal.jpg";
import swal from 'sweetalert';
import Modal from '../Modal/Modal'
function ScriptBox({ item, id }) {

    const [show,setShow] = useState(false)
    const Toggle = () => setShow(!show)

    return (
        <div className='border col-3 ms-5'>
            <div className='text-center'>
                <img src={id === item.userID ? personal : person} style={{ width: "150px", height: "150px" }} />
                <p className="fw-medium text-uppercase">{item?.user?.Name}</p>
            </div>

            <div>
                <span className='fw-bold fs-4 text-capitalize'>{item?.title}</span>
                <br />
                <span className='mt-0 pt-0'>{item?.description}</span>
            </div>

            <div className='text-center w-75 m-auto mt-3 ' onClick={()=> swal({
                title:`${item?.title}`,
                text:item?.code
            }) } >
                <p style={{ backgroundColor: "#eeeeee", cursor:"pointer", color: "red", fontWeight: "bold", textAlign: "center", padding: "5px", borderRadius: "10px" }}>View Script</p>
                <Modal show={show} close={setShow} title={"hey"}>
                    <p>dadads</p>
                </Modal>
            </div>
        </div>
    )
}

export default ScriptBox
