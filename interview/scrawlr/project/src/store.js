import { createStore } from 'vuex'


const state = {
  status: "normal"
}

const mutations = {
  select (state) {
    state.status = "selected";
  },
  nselect (state) {
    state.status = "normal";
  }
}

const actions = {
    changeStatus({commit, state}) {
      if (state.status=="normal") {
          commit("select");
      } else {
          commit("nselect");
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