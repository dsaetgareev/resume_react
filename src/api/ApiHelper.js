import React from "react";
import {baseUrl} from "../service/BaseUrl";

import axios from "axios";

class ApiHelper {

    static createHelpers = (uuid) => {
        return axios.post(`${baseUrl}/helper/create/${uuid}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            })
    };

}

export default ApiHelper;