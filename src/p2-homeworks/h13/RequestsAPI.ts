// imports
import axios from "axios";

// settings
const link = 'https://neko-cafe-back.herokuapp.com/auth/test'

// body: {success: true}


export const requestAPI = {
    postRequest(isError: boolean) {
        return axios.post(link, {success: isError})
    }
}