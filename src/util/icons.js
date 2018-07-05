import Vue from 'vue';
import Icon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';

Vue.component('icon', Icon);

fontawesome.library.add(
    require('@fortawesome/fontawesome-free-solid/faAngleDown'),
    require('@fortawesome/fontawesome-free-solid/faPencilAlt'),
    require('@fortawesome/fontawesome-free-solid/faSignOutAlt'),
    require('@fortawesome/fontawesome-free-solid/faSearch'),
    require('@fortawesome/fontawesome-free-solid/faSort'),
    require('@fortawesome/fontawesome-free-solid/faSortDown'),
    require('@fortawesome/fontawesome-free-solid/faSortUp'),
    require('@fortawesome/fontawesome-free-solid/faTrashAlt')
);
