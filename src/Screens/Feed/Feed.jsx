import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Feed.scss"
import AddScript from './Script/AddScript/AddScript';
import ViewScript from './Script/ViewScript/ViewScript';
import Guideline from './Script/Guidelines/Guideline';
function Feed() {

    const [show ,setShow] = useState("my");
    
    const setShowScript = (arg)=> {
        setShow(arg)
    }
    return (
        <div className='container'>

            <div className='mainHome'>
                <div className='leftSideMain'>
                    <Sidebar setShow={setShowScript}/>
                </div>
                <div className='rightSideMain'>
                    {
                        show === "add" ?
                        <AddScript />
                        :
                        show === "my" ?
                        <ViewScript type={show} />
                        :
                        show ==="community" ?
                        <ViewScript type={show} />
                        :
                        <Guideline />
                    }
                </div>
            </div>
        </div>
    )
}

export default Feed
