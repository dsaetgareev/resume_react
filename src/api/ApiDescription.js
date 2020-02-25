import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiDescription {


    static getDescByRef = (id) => {
        return axios.get(`${baseUrl}/desc/get/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    };

    static updateDesc = (desc) => {
        return axios.post(`${baseUrl}/desc/update`, desc)
    };

}

export default ApiDescription;