const state = {
    loading: []
}

const getters = {
    isLoading: state => state.loading.length > 0
}

const mutations = {
    add(state, item) {
        state.loading.push(item);
    },

    remove(state, item) {
        let index = state.loading.indexOf(item);

        if (index != -1) {
            state.loading.splice(index, 1);
        }
    },

    clear(state) {
        state.loading = [];
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
