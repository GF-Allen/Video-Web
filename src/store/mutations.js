import * as types from './types'

const type = {
    "1": "电影",
    "2": "电视",
    "3": "综艺",
    "4": "动漫"
};

const state = {
    footerHide: true,
    headerHide: true,
    title: "电影",
    bottomval: "1"
};

const mutations = {
    [types.ROUTER_CHANGE](state, type) {
        state.footerHide = true;
        state.headerHide = true;
    },
    [types.TITLE_CHANGE](state, val) {
        state.title = val;
    },
    [types.BOTTOMVAL_CHANGE](state, val) {
        state.bottomval = val;
        state.title = type[val];
    },
    [types.HEADER_FOOTER_CHANGE](state,headerHide,footerHide){
        state.headerHide = headerHide;
        state.footerHide = footerHide;
    }
};

const getters = {
    bottomval(state) {
        return state.bottomval;
    },
    headerHide(state) {
        return state.headerHide;
    },
    footerHide(state) {
        return state.footerHide;
    },
    title(state) {
        return state.title;
    }
};

export default {
    state,
    mutations,
    getters
};