import { ROUTER_CHANGE, HIDELOADING, SHOWLOADING } from './types'
import axios from 'axios'

const state = {
    selected: 'type_1',
    footerHide: false,
    headerHide: false,
    showLoad: false
}

const mutations = {
    [ROUTER_CHANGE](state, path) {
        state.footerHide = true
        state.headerHide = true
        state.selected = path
    },
    [HIDELOADING](state) {
        state.showLoad = false
    },
    [SHOWLOADING](state) {
        state.showLoad = true
    }
}

const getters = {
    selected(state) {
        return state.selected
    },
    footerHide(state) {
        return state.footerHide
    },
    headerHide(state) {
        return state.headerHide
    },
    showLoad(state) {
        return state.showLoad
    }
}

export default {
    state,
    mutations,
    getters
}