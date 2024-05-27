import React from "react";

function Scan() {

    const response = {
        site: "https://google.com",
        ip: "127.0.0.1",
        reportTime: "	01 May 2024 14:40:24 UTC",
        headers: {
            "Content-Security-Policy": false,
            "X-Frame-Options": false,
            "X-Content-Type-Options": false,
            "Referrer-Policy": false,
            "Permissions-Policy": false
        },
        warning: "Grade capped at A, please see warnings below.",
    }

    return (
        <div className="container m-auto">

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
                                            <a href={`${response.site}`} target="_blank">
                                                {response.site}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >IP Address:</th>
                                        <td>
                                            <p>{response.ip}</p>
                                        </td>
                                    </tr>
                                     <tr>
                                        <th >Report Time:</th>
                                        <td>
                                        <p>{response.reportTime}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th >Headers :</th>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Warning :</th>
                                        <td>{response.warning}
                                         <button className="bg-success border-white text-white fw-bold fs-5 ms-4">Fix It</button> </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div className="reportSection">
                    <div className="reportTitle">Missing Headers</div>
                    <div className="reportBody">
                        <table className="reportTable">
                            <colgroup><col className="col1" /><col className="col2" /></colgroup>
                            <tbody>
                                <tr className="tableRow"><th className="tableLabel table_red">Content-Security-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/content-security-policy-an-introduction/" target="_blank">Content Security Policy</a> is an effective measure to protect your site from XSS attacks. By whitelisting sources of approved content, you can prevent the browser from loading malicious assets.</td></tr><tr className="tableRow"><th className="tableLabel table_red">X-Frame-Options</th><td className="tableCell"><a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options" target="_blank">X-Frame-Options</a> tells the browser whether you want to allow your site to be framed or not. By preventing a browser from framing your site you can defend against attacks like clickjacking. Recommended value "X-Frame-Options: SAMEORIGIN". </td></tr><tr className="tableRow"><th className="tableLabel table_red">X-Content-Type-Options</th><td className="tableCell"><a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options" target="_blank">X-Content-Type-Options</a> stops a browser from trying to MIME-sniff the content type and forces it to stick with the declared content-type. The only valid value for this header is "X-Content-Type-Options: nosniff".</td></tr><tr className="tableRow"><th className="tableLabel table_red">Referrer-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/a-new-security-header-referrer-policy/" target="_blank">Referrer Policy</a> is a new header that allows a site to control how much information the browser includes with navigations away from a document and should be set by all sites.</td></tr><tr className="tableRow"><th className="tableLabel table_red">Permissions-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/goodbye-feature-policy-and-hello-permissions-policy/" target="_blank">Permissions Policy</a> is a new header that allows a site to control which features and APIs can be used in the browser.</td></tr> </tbody>
                        </table>
                    </div>
                </div>
                <div className="reportSection">
                    <div className="reportTitle">Warnings</div>
                    <div className="reportBody">
                        <table className="reportTable">
                            <colgroup><col className="col1" /><col className="col2" /></colgroup>
                            <tbody>
                                <tr className="tableRow"><th className="tableLabel table_orange">Site is using HTTP</th><td className="tableCell">This site was served over HTTP and did not redirect to HTTPS.</td></tr><tr className="tableRow"><th className="tableLabel table_orange">Status code indicates error</th><td className="tableCell">The status code of the response indicates an error. Not all headers may be set when the response is an error.</td></tr> </tbody>
                        </table>
                    </div>
                </div>
                <div className="reportSection">
                    <div className="reportTitle">Raw Headers</div>
                    <div className="reportBody">
                        <table className="reportTable">
                            <colgroup>
                                <col className="col1" />
                                <col className="col2" />
                            </colgroup>
                            <tbody>
                                <tr className="tableRow"><th className="tableLabel table_#696E76">HTTP/1.1</th><td className="tableCell">429 Too Many Requests</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Date</th><td className="tableCell">Wed, 01 May 2024 14:40:24 GMT</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Pragma</th><td className="tableCell">no-cache</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Expires</th><td className="tableCell">Fri, 01 Jan 1990 00:00:00 GMT</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Cache-Control</th><td className="tableCell">no-store, no-cache, must-revalidate</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Content-Type</th><td className="tableCell">text/html</td></tr><tr className="tableRow"><th className="tableLabel table_green">Server</th><td className="tableCell">HTTP server (unknown)</td></tr><tr className="tableRow"><th className="tableLabel table_#696E76">Content-Length</th><td className="tableCell">3079</td></tr><tr className="tableRow"><th className="tableLabel table_green">X-XSS-Protection</th><td className="tableCell">0</td></tr> </tbody>
                        </table>
                    </div>
                </div>
                <div className="reportSection">
                    <div className="reportTitle">Upcoming Headers</div>
                    <div className="reportBody">
                        <table className="reportTable">
                            <colgroup><col className="col1" /><col className="col2" /></colgroup>
                            <tbody>
                                <tr className="tableRow"><th className="tableLabel table_blue">Cross-Origin-Embedder-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/coop-and-coep/" target="_blank">Cross-Origin Embedder Policy</a> allows a site to prevent assets being loaded that do not grant permission to load them via CORS or CORP.</td></tr><tr className="tableRow"><th className="tableLabel table_blue">Cross-Origin-Opener-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/coop-and-coep/" target="_blank">Cross-Origin Opener Policy</a> allows a site to opt-in to Cross-Origin Isolation in the browser.</td></tr><tr className="tableRow"><th className="tableLabel table_blue">Cross-Origin-Resource-Policy</th><td className="tableCell"><a href="https://scotthelme.co.uk/coop-and-coep/" target="_blank">Cross-Origin Resource Policy</a> allows a resource owner to specify who can load the resource.</td></tr> </tbody>
                        </table>
                    </div>
                </div>
                <div className="reportSection">
                    <div className="reportTitle">Additional Information</div>
                    <div className="reportBody">
                        <table className="reportTable">
                            <colgroup><col className="col1" /><col className="col2" /></colgroup>
                            <tbody>
                                <tr className="tableRow"><th className="tableLabel table_green">Server</th><td className="tableCell"><a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#server" target="_blank">Server</a> value has been changed. Typically you will see values like "Microsoft-IIS/8.0" or "nginx 1.7.2".</td></tr><tr className="tableRow"><th className="tableLabel table_green">X-XSS-Protection</th><td className="tableCell"><a href="https://scotthelme.co.uk/hardening-your-http-response-headers/#x-xss-protection" target="_blank">X-XSS-Protection</a> sets the configuration for the XSS Auditor built into older browsers. The recommended value was "X-XSS-Protection: 1; mode=block" but you should now look at <a href="https://scotthelme.co.uk/content-security-policy-an-introduction/" target="_blank">Content Security Policy</a> instead.</td></tr> </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <p>Scanning</p>
        </div>
    )
}

export default Scan