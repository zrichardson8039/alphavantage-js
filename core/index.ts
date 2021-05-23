import axios from "axios";
import { URL } from "./constants";


export function fetchAPI<T> (params: T) {
    return axios.get(URL.query, params);
};

