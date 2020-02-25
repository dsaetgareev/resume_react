import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiNote {


    static getNoteByRef = (id) => {
        return axios.get(`${baseUrl}/note/get/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    };

    static updateNote = (note) => {
        return axios.post(`${baseUrl}/note/update`, note)
    };

}

export default ApiNote;