import axios from 'axios'
export default axios.create({
    baseURL: 'http://192.168.42.101:80/ipl/api',
})
