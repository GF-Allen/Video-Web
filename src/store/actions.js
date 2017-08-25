import * as types from './types'

export default {
    ROUTER_CHANGE: ({ commit }, path) => {
        commit(types.ROUTER_CHANGE, path)
    }
}