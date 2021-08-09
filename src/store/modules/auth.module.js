import axios from "axios";
import { errorCode } from "../../utils/errors";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("JVT_TOKEN"),
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("JVT_TOKEN", token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("JVT_TOKEN");
    },
  },
  actions: {
    async login({ commit, dispatch }, token) {
      try {
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.VUE_APP_FB_KEY;
        const { data } = await axios.post(url, {
          ...token,
          returnSecureToken: true,
        });
        commit("setToken", data.idToken);
      } catch (err) {
        dispatch(
          "setMessage",
          {
            value: errorCode(err.response.data.error.message),
            type: "danger",
          },
          { root: true }
        );
        throw new Error();
      }
    },
    async signUp({ commit, dispatch }, payload) {
      try {
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          process.env.VUE_APP_FB_KEY;
        const { data } = await axios.post(url, {
          ...payload,
          returnSecureToken: true,
        });
        commit("setToken", data.idToken);
        dispatch(
          "setMessage",
          {
            value: "Hello" + data.email,
            type: "primary",
          },
          { root: true }
        );
      } catch (err) {
        dispatch(
          "setMessage",
          {
            value: errorCode(err.response.data.error.message),
            type: "danger",
          },
          { root: true }
        );
        throw new Error();
      }
    },
  },
};
