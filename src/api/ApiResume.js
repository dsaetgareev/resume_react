import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiResume {

    static getTitles() {
        return axios.get(`${baseUrl}/resume/list/titles`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    }

    static getResumeById = (id) => {
        return axios.get(`${baseUrl}/resume/get/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    };

    static updateResume = (resume) => {
        return axios.post(`${baseUrl}/resume/update`, resume)
    };
}

export default ApiResume;

