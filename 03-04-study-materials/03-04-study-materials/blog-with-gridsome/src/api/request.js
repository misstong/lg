import axios from 'axios'


const request = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 15000
})

export default request