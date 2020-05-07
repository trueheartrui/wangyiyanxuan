import {CHANGEINDEXDATA} from '../mutation_types'
export default{
  [CHANGEINDEXDATA](state,indexData){
    state.indexData = indexData
  }
}