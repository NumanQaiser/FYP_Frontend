import React, { useEffect, useState } from "react";
import scan from "../Assests/scan.jpg"
import { sendScanRequest } from "../Configuration/API's/Scan";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { headerContent } from "../Services/Scan";

function Scan() {
    const [loading, setLoading] = useState(false);
    const [reponse, setResponse] = useState(false);
    const [data, setData] = useState({} || [])
    const [url, setUrl] = useState("")
    const [content, setContent] = useState(headerContent)
    const [header, setHeader] = useState({
        "Content-Security-Policy": false,
        "Content-Security-Policy-Report-Only": false,
        "X-Frame-Options": false,
        "X-Content-Type-Options": false,
        "Referrer-Policy": false,
        "Permissions-Policy": false,
        "Strict-Transport-Security": false,
        "X-XSS-Protection": false
    })
    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            if (!url) {
                alert("Please enter your email")
                return
            }
            if (e) {
                setLoading(true);
                const response = await sendScanRequest(url);
                if (response.status === 200) {
                    const res = response.data.data
                    // const change = res.replace(/"|'/g, function(match) {
                    //     return match === '"' ? "'" : '"';
                    //   });
                    const change = res.replace(/'/g, '"')
                    const parse = JSON.parse(change)
                    setData(parse)
                    matchedHeader(parse)
                    setResponse(true);
                }
                else {
                    alert("Error into API Call");
                    return
                }
            }
        } catch (error) {
            alert("Something went wrong! Please refresh the page.")
            setLoading(false)
            console.log("try ", error)
        }
    }

    function matchedHeader(response) {
        const copyHeader = Object.assign({}, header);
        for (const key in copyHeader) {
            if (response?.Security_headers?.includes(key)) {
                copyHeader[key] = true
            }
        }

        setHeader(copyHeader)
    }

    useEffect(() => {

    }, [loading, reponse])
    return (
        <div className="container mt-5 m-auto">

            {
                loading ?

                    reponse ?

                        <div className="row">
                            {/* report section */}
                            <div className="border mt-2">
                                <div className="mt-4 text-start fw-bold fs-3 bg-light p-2">Security Report Summary</div>

                                <div className="row">
                                    <div className="col-3">

                                        <div className="mt-5 border text-center  bg-danger p-5">
                                            <span className="fw-bold fs-1 text-white">F</span>
                                        </div>

                                    </div>
                                    <div className="col-9">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>Site:</th>
                                                    <td>
                                                        <a href={`${data.Url}`} target="_blank">
                                                            {data.Url}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th >IP Address:</th>
                                                    <td>
                                                        <p>{data.IP}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th >Report Time:</th>
                                                    <td>
                                                        <p>{data.Date}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th >Headers :</th>

                                                    <td>
                                                        {
                                                            Object.entries(header).map(([key, value]) => {
                                                                return (
                                                                    <p key={key} style={{ backgroundColor: value ? "green" : "red", color: "white", display: "inline-block", marginLeft: "5px", padding: "5px", borderRadius: "5px" }} >
                                                                        {key}
                                                                    </p>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Warning :</th>
                                                    <td>
                                                        Now, You need to fix this on urgent basis.
                                                        <button className="bg-success border-white text-white fw-bold fs-5 ms-4">Fix Now</button> </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                            <div className=" mt-2">
                                <div className="mt-4 text-start fw-bold fs-3 bg-light p-2">Missing Headers</div>


                                <table className="table">
                                    <tbody>
                                        {
                                            Object.entries(header).map(([key, value]) => {
                                                return (
                                                    !value ?
                                                        <tr>
                                                            <th >
                                                                <p key={key} style={{ backgroundColor: value ? "green" : "red", color: "white", display: "inline-block", marginLeft: "5px", padding: "5px", borderRadius: "5px" }} >
                                                                    {key}
                                                                </p>
                                                            </th>
                                                            <td>
                                                                <p>
                                                                    <a target="_blank" href={content[key]?.url}>{content[key]?.heading}</a>
                                                                    {"\t\t\t\t\t"}
                                                                    {content[key]?.content}
                                                                </p>

                                                            </td>
                                                        </tr>
                                                        :
                                                        null

                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        :
                        <div>

                            <Skeleton count={25} />
                        </div>
                    :
                    <div className="">
                        <p className="fs-3 text-center fw-bold text-capitalize">Start Scanning your website</p>
                        <form className='w-50 m-auto ps-5 ' onSubmit={onSubmit}>
                            <input type="url" name="email" className='w-50 ms-5 border-radius-2 p-1' placeholder='Enter url please!' onChange={(e) => setUrl(e.target.value)} />
                            <input type="submit" className='btn btn-secondary  ms-2 text-light fw-bold' defaultValue="Subscribe" value={"Submit"}
                            />
                        </form>

                        <img src={scan} style={{ width: "75%", height: "400px", marginLeft: "12%" }} />
                    </div>

            }

        </div>

    )
}

export default Scan