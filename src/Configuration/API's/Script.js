import axios from "axios";
const url = process.env.URL || "http://localhost:4001"
// this is for create the new book
const addScript = async (data) => {
    try {
        const result = await axios.post(`${url}/script/add`, data)
        return result

    } catch (error) {
        console.log("Error into create script api call", error.stack);
    }
}

const getScript = async (query) => {

    return await axios.get(`${url}/script/user?type=${query}`).then((response) =>
        response).catch((err) => {
            alert("Someting went wrong");
            console.log("Error into get script api", err)
        })
}



export {
    addScript,
    getScript
}