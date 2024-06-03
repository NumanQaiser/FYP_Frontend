import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Feed.scss"
function Feed() {
    return (
        <div className='container'>

            <div className='mainHome'>
                <div className='leftSideMain'>
                    <Sidebar/>
                </div>
                <div className='rightSideMain'>
                    {/* <Products /> */}
                </div>
            </div>
        </div>
    )
}

export default Feed
