import Vuex from 'vuex';
Vue.use(Vuex);

import auth from './modules/auth';
import loader from './modules/loader';
import navigation from './modules/navigation';

export default new Vuex.Store({
    modules: {
        auth,
        loader,
        navigation
    }
});
