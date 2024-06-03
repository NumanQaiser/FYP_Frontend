import React from 'react' ;
import { AppContext, useAppContext } from '../../StateManagement/Context'
import { RoutHistory } from '../../Navigation/MainNavigation'

function Header() {

    const { loginUser, login } = useAppContext(AppContext)
    const handleLougOut = () => {
        // remove the state of login user
        loginUser(false);
        if (login) {
            RoutHistory.navigate("/login")
        }

    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-3">CyberDB</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link fw-medium" onClick={() => RoutHistory.navigate("/")} style={{cursor:'pointer'  }} >Home</a>
                                        :
                                        ""
                                }
                            </li>
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link fw-medium" onClick={() => RoutHistory.navigate("/Scan")} style={{cursor:'pointer'  }}  >Scanning</a>
                                        :
                                        ""
                                }
                            </li>
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link fw-medium " onClick={() => RoutHistory.navigate("/exploits")} style={{cursor:'pointer'  }}  >Exploits DB</a>
                                        :
                                        ""
                                }
                            </li>
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link fw-medium" onClick={() => RoutHistory.navigate("/feed")} style={{cursor:'pointer'  }} >Script Feed</a>
                                        :
                                        ""
                                }
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                {
                                    login ?
                                        <a class="nav-link fw-medium " aria-current="page" onClick={handleLougOut} style={{cursor:'pointer'  }} >
                                            LogOut
                                        </a>
                                        :
                                        <div className='row fw-medium'>
                                            <a class="nav-link col fw-medium" aria-current="page" onClick={() => RoutHistory.navigate("/login")} style={{cursor:'pointer'  }} >
                                                LogIn
                                            </a>
                                            <a class="nav-link col fw-medium" aria-current="page" onClick={() => RoutHistory.navigate("/signup")} style={{cursor:'pointer'  }} >
                                                SignIn
                                            </a>
                                        </div>

                                }
                            </li>
                            <li class="nav-item">
                                {
                                    login ?
                                        <a class="nav-link fw-medium" onClick={() => RoutHistory.navigate("/profile")} style={{cursor:'pointer'  }}  >
                                            Profile
                                        </a>
                                        :
                                        ""
                                }
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header