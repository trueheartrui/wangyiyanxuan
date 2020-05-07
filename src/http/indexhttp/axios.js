import axios from 'axios'
import config from './config'

const indexAxios = axios.create({
  baseURL:config.host,
  timeout:config.timeout||5000
})

indexAxios.interceptors.request.use((config)=>{
  return config
})

indexAxios.interceptors.response.use(
  (res)=>{
    return res.data
  },
  (error)=>{
    return Promise.reject(error)
  }
)

export default indexAxios