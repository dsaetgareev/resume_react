import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiImage {


    static getImageByRef = (id) => {
        return axios.get(`${baseUrl}/image/get/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    };

    static updateImage = (image) => {
        return axios.post(`${baseUrl}/image/update`, image)
    };

}

export default ApiImage;