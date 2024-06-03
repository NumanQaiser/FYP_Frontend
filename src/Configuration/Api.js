import axios from "axios";
import { RoutHistory } from "../Navigation/MainNavigation";
const url = "http://localhost:4001" || process.env.URL;
const cve_url = "https://services.nvd.nist.gov/rest/json/cves/2.0"
// For user creation call
const userCreate = async (data) => {
    try {
console.log("hitting created" ,data)
        const response = await axios.post(`http://localhost:4001/user/create`, data);
        if (response?.data?.success) {
            RoutHistory.navigate("/login")  
        } else {
            alert(response?.data?.message)
        }

    } catch (error) {
        console.log("error into user creation api call", error.stack);
    }
}

// for user login call
async function userLogin(user) {
    console.log(user)
    try {
        const response = await axios.post(`http://localhost:4001/user/login`, user)
        return response
    } catch (error) {
        console.log("error into user login api call", error.stack);
    }
}


// this is for create the new book
const createBook = async (data) => {
    try {
        const result = await axios.post(`${url}/book/create`, data)
        if (result?.data?.success) {
            alert(result?.data?.message);
            RoutHistory.navigate("/");
        } else {
            alert(result?.data?.message)
        }

    } catch (error) {
        console.log("Error into create book api call", error.stack);
    }
}


// for getting all user book list 
const userbookList = async (query) => {
    try {

        const result = await axios.get(`${url}/book/list?userId=${query.userId}&search=${query.search}&sort=${query.sort}`)
        return result.data.Data

    } catch (error) {
        console.log("Error into create book api call", error.stack);
    }
}


// this is for change the status of the book
const changeBookStatus = async (bookid, status) => {
    try {
        const result = await axios.put(`${url}/book/status`, { bookId: bookid, status: status })
        return result.data.Data

    } catch (error) {
        console.log("Error into create book api call", error.stack);
    }
}


// delete user profile
const deleteUser = async (userid) => {
    try {
        const result = await axios.delete(`${url}/user/delete/${userid}`)
        if (result?.data?.success) {
            alert(result?.data?.message);
            RoutHistory.navigate("/login");
        } else {
            alert(result?.data?.message)
        }

    } catch (error) {
        console.log("Error into create book api call", error.stack);
    }
}

const CVE_API = async (query) => {

    try {
        const result = await axios.get(`${cve_url}?keywordSearch=${query.search}&resultsPerPage=${query.limit}`)
        return result


    } catch (error) {
        console.log("Error into get cve api call", error.stack);
    }

}


export {
    userCreate,
    userLogin,
    createBook,
    userbookList,
    changeBookStatus,
    deleteUser,
    CVE_API

}
