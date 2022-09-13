import axios from 'axios'

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use(res => {
    return res.data.data
}, (err) => {
    Promise.reject(err)
})

export default axios