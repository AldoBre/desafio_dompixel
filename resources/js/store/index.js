import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        message: {
            text: false,
            color: "",
        },
    },

    getters: {
        message: (state) => {
            return state.message;
        },
    },

    mutations: {
        MESSAGE(state, { text, color }) {
            state.message.text = text;
            state.message.color = color;
        },

    },

    actions: {
        message({ commit }, { text, color }) {
            commit("MESSAGE", { text, color });
        },
    },

});
