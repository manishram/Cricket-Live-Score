import axios from 'axios'
export default axios.create({
    baseURL: 'http://192.168.42.43:80/ipl/api',
})
