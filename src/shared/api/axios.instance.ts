import axios from "axios";

export const baseQuery = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})
