import * as types from './types'

export default {
    ROUTER_CHANGE: ({ commit }, path) => {
        commit(types.ROUTER_CHANGE, path)
    },
    SHOWLOADING: ({ commit }) => {
        commit(types.SHOWLOADING)
    },
    HIDELOADING: ({ commit }) => {
        commit(types.HIDELOADING)
    }
}