import axios from 'axios'
export default axios.create({
    baseURL: 'https://rest.entitysport.com/v2',
    headers: {
        Authorization: 'Bearer ec471071441bb2ac538a0ff901abd249',
    },
})
