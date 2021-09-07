import axios from 'axios'
export default axios.create({
    baseURL: 'https://rest.entitysport.com/v2',
    params: {
        token: '9a16bb0e3e2fdee2369ce91b0c3e521d',
    },
})
