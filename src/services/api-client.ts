import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2a3bf81dc4554be8ae3599819c7825c1'
    }
})