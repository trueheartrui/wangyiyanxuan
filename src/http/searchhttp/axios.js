import axios from 'axios'
import config from './config'

const searchAxios = axios.create({
  baseURL:config.host,
  timeout:config.timeout||5000
})

searchAxios.interceptors.request.use((config)=>{
  return config
})

searchAxios.interceptors.response.use(
  (res)=>{
    return res.data
  },
  (error)=>{
    return Promise.reject(error)
  }
)

export default searchAxios