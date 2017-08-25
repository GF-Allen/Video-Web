import {
  TITLE_CHANGE,
  ROUTER_CHANGE,
  BOTTOMVAL_CHANGE
} from "./types";

const type = {
  "1": "电影",
  "2": "电视",
  "3": "综艺",
  "4": "动漫"
};

const state = {
  footerHide: true,
  headerHide: false,
  title: "电影",
  bottomval: "1"
};

const mutations = {
  [ROUTER_CHANGE](state, type) {
    state.footerHide = true;
    state.headerHide = false;
  },
  [TITLE_CHANGE](state, val) {
    state.title = val;
  },
  [BOTTOMVAL_CHANGE](state, val) {
    state.bottomval = val;
    state.title = type[val];
  }
};

const getters = {
    bottomval(state) {
    return state.bottomval;
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
