import React from "react";
import axios from "axios";

var defaultHeader = {
    "Content-Type": "application/json"
};

export const getMethod = async (url, header, params) => {
    try {
        const response = await axios({
            method: "get",
            url: url,
            params,
            headers: header ? header : defaultHeader
        });
        return response;
    } catch (error) {
        if (error && error.response && error.response.status === 401) {
            window.location.href = "/";
        }
        return error;
    }
};
