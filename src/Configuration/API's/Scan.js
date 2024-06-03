import axios from "axios"
const baseUrl = process.env.URL

const sendScanRequest = async (req) => {
    console.log("URL", req)
    if (!req) {
        alert("Enter the right url")
        return
    }

    return await axios.get(`http://localhost:4001/scan/initial?url=${req}`).then((response) =>
        response).catch((err) => {
            alert("Someting went wrong");
            console.log("Error into scan api", err)
        })
}


export {
    sendScanRequest
}