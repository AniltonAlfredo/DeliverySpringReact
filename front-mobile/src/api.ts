import axios from "axios";

// const API_URL = 'http://localhost:8080'
const API_URL = 'http://172.32.20.106:8080'

export function fetchOrders() {
    return axios.get(`${API_URL}/orders`);
}


