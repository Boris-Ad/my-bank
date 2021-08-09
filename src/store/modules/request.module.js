import requestAxios from "../../axios/request";
import store from "../index";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit, dispatch }, payload) {
      try {
        const { data } = await requestAxios.post(
          "/request.json?auth=" + store.getters["auth/token"],
          payload
        );
        commit("addRequest", { ...payload, id: data.name });
      } catch (err) {
        dispatch(
          "setMessage",
          {
            value: err.message,
            type: "danger",
          },
          { root: true }
        );
      }
    },
    async load({ commit }) {
      try {
        const { data } = await requestAxios.get(
          "/request.json?auth=" + store.getters["auth/token"]
        );
        const response = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setRequests", response);
      } catch (err) {}
    },
    async loadOne({ dispatch }, id) {
      try {
        const { data } = await requestAxios.get(
          "/request/" + id + ".json?auth=" + store.getters["auth/token"]
        );
        return data;
      } catch (err) {
        dispatch(
          "setMessage",
          {
            value: err.message,
            type: "danger",
          },
          { root: true }
        );
      }
    },
    async remove({ commit }, id) {
      try {
        await requestAxios.delete(
          "/request/" + id + ".json?auth=" + store.getters["auth/token"]
        );
        commit("setRequests", []);
      } catch (err) {}
    },
    async update({ dispatch }, payload) {
      try {
        await requestAxios.put(
          "/request/" +
            payload.id +
            ".json?auth=" +
            store.getters["auth/token"],
          payload
        );
      } catch (err) {
        dispatch(
          "setMessage",
          {
            value: err.message,
            type: "danger",
          },
          { root: true }
        );
      }
    },
  },
};
