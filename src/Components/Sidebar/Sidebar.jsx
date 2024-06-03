import React from 'react'
import "./Sidebar.scss";
import logo from "../../Assests/Icons/shopcart.svg"
import dashboard from "../../Assests/Icons/dashboardIcon.svg"
import Orders from "../../Assests/Icons/orderIcon.svg"
import seller from "../../Assests/Icons/sellerIcon.svg"
import customer from "../../Assests/Icons/personIcon.svg"
import group from "../../Assests/Icons/groupIcon.svg"
import Transactions from "../../Assests/Icons/transectionIcon.svg"
import navv from "../../Assests/Icons/navvIcon.svg"
function Sidebar({ setShow }) {
    return (
        <div className='mainSidebar border '>

            <p className='fw-bold fs-2 text-center'>MENU</p>
            <ul>
                <li onClick={() => setShow("add")}>
                    Add Script
                </li>

                <li onClick={() => setShow("my")}>
                    My Script
                </li>

                <li onClick={() => setShow("community")}>
                    Community Script
                </li>

                <li onClick={() => setShow("guidelines")}>
                    Guidelines
                </li>


            </ul>
        </div>
    )
}

export default Sidebar
