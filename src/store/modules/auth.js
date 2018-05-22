import jwtDecode from 'jwt-decode';

const state = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token')
}

const getters = {
    user: state => state.user,

    token: state => state.token,

    hasToken: state => !! state.token,

    check(state, getters) {
        if (getters.hasToken) {
            try {
                let jwt = jwtDecode(getters.token);
                
                if (
                    typeof jwt.exp === undefined
                    || (new Date() / 1000) < jwt.exp
                ) {
                    return true;
                }
            } catch (error) {
                //
            }
        }

        return false;
    }
}

const actions = {
    logout({ commit }) {
        return axios.post('/auth/logout').then(response => {
            commit('setUser', null);
            commit('setToken', null);
        });
    }
}

const mutations = {
    setUser(state, user) {
        localStorage.setItem('user', JSON.stringify(
            state.user = user
        ));
    },

    setToken(state, token) {
        localStorage.setItem('token', state.token = token);
    },

    removeToken(state) {
        localStorage.removeItem('token');
        state.token = null;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
