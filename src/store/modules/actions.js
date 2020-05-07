import {CHANGEINDEXDATA} from '../mutation_types'
import http from '../../http'
export default{
  async [CHANGEINDEXDATA]({commit}){
    let {data} = await http.index.getIndexData()
    commit(CHANGEINDEXDATA,data)
  }
}