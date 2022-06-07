import { createStore } from 'vuex'


const state = {
  status: {
    0: "normal",
    1: "normal",
    2: "normal"
  }
}

const mutations = {
  select (state, id) {
    state.status[id] = "selected";
  },
  nselect (state, id) {
    state.status[id] = "normal";
  }
}

const actions = {
    changeStatus({commit, state}, id) {
      if (state.status[id]=="normal") {
          commit("select", id);
      } else {
          commit("nselect", id);
      }
  }
}

// getters are functions.
const getters = {
  status: state => state.status
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations
})