import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { Subscribe } from '../Configuration/ApiIntegration'
import { app_name } from '../../Services/Constant';
function Footer() {
  const [email, setEmail] = useState()
  const [msg, setMsg] = useState();
  const [sucecss, setSucces] = useState(false)
  return (
    <div className='text-center mt-5'>


      {/* this is for bottom footer */}
      <footer id="footer" className=' mb-2 mt-3 bg-light'>
        <div className="footer-newsletter" >
          <div className="bg-body-secondary container ">
            <div className="row justify-content-center ">
              <div className="col-lg-6">
                <h4 className='fw-medium  fs-3 text-uppercase m-2  '>Join Our Newsletter Signup</h4>
                <p className='text-capitalize'>You can get latest updates about our new security threats , patches and exploites . </p>
                <form className='mb-2 ' onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email) {
                    alert("Please enter your email")
                    return
                  }
                  if (e) {
                    // console.log("true");
                    // const response = await Subscribe(email);
                    // console.log(response);

                    // if (response.success == true) {

                    //   setMsg(response.message)
                    //   setSucces(response.success)
                    // }
                    // else {
                    //   setMsg(response.message)
                    //   setSucces(response.success)
                    // }
                  } else {
                    console.log("false");
                    alert('Something went wrong!')
                  }
                  console.log(email);
                }}>
                  <input type="email" name="email" className='w-50 h-5' placeholder='Enter your email for stay in touch!' onChange={(e) => setEmail(e.target.value)} />
                  <input type="submit" className='btn btn-dark m-1' defaultValue="Subscribe" value={"Subscribe"}
                  />
                </form>
                {
                  msg ?
                    sucecss ?
                      <span style={{
                        color: "green"
                      }} >
                        <b>
                          Thanks for subscribe
                        </b>
                      </span>
                      :
                      <span style={{
                        color: "tomato"
                      }} >

                        <b>
                          {msg}
                        </b>
                      </span>
                    :
                    ""
                }
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <h3 style={{
                  color: "#222222",
                  fontSize: "2rem",
                  fontWeight: 600,
                  lineHeight: "30px",
                  textTransform: "capitalize",
                  fontFamily: "initial"
                }}>{app_name}</h3>
                <p>
                  Find your site vulnerabilities
                  before <br />
                  hackers do <br /><br />
                  <strong>Phone:</strong> +92 0315 4345436<br />
                  <strong>Email:</strong> help@cyberdb.com<br />
                </p>
              </div>
              <div className="col-lg-4 col-md-6 footer-links ">
                <h4 className='fw-medium fs-4 '>Customer Guidance</h4>
                <ul style={{
                  listStyle: "none"
                }}>
                  <li className='mt-2'><i className="bx bx-chevron-right" /> <a href="/pages/faqs" style={{
                    textDecorationLine: "none",
                    color: "black",
                    paddingTop: 5
                  }}>FAQs</a></li>
                  <li className='mt-2'><i className="bx bx-chevron-right" /> <a href='/pages/contact' style={{
                    textDecorationLine: "none",
                    color: "black",
                  }}>Contact Us</a></li>

                  <li className='mt-2'><i className="bx bx-chevron-right" /> <a href='/orders/tracking' style={{
                    textDecorationLine: "none",
                    color: "black",
                  }}>Track Your Site</a></li>
                
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Information</h4>
                <ul style={{
                  listStyle: "none"
                }}>
                  <li className='mt-2' ><i className="bx bx-chevron-right" /> <a href="/pages/about_us" style={{
                    textDecorationLine: "none",
                    color: "black",
                    paddingTop: 5
                  }}>About Us</a></li>

                  <li className='mt-2'><i className="bx bx-chevron-right" /> <a href="/pages/privacy-policy" style={{
                    textDecorationLine: "none",
                    color: "black",
                    paddingTop: 5
                  }} >Privacy Policy</a></li>

            
                  <li className='mt-2'><i className="bx bx-chevron-right" /><a href="/pages/customer/reviews" style={{
                    textDecorationLine: "none",
                    color: "black",
                  }}>Customers Reviews</a></li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            Copyright © 2024 <strong><span>{app_name}</span></strong> All Rights Reserved.
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
            Designed by <a href='/' >{app_name} Technologies</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  )
}

export default Footer