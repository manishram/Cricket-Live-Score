import axios from 'axios'
export default axios.create({
    baseURL: 'http://192.168.42.74:80/ipl/api',
})
