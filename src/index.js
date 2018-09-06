// Todo make vue plugin for ngropress
import NProgress from 'nprogress';

export default function install (Vue, options = {}) {
    // Install plugins
    window.progress = NProgress;

    progress.configure({
        showSpinner: false,
        parent: 'section.main'
    });

    // Register components
    Vue.component('o-errors', require('./components/forms/Errors'));
    Vue.component('o-checkbox', require('./components/forms/Checkbox'));
    Vue.component('o-input', require('./components/forms/Input'));
    Vue.component('o-form-field', require('./components/forms/Field'));
    Vue.component('o-select', require('./components/forms/Select'));
    Vue.component('o-multi-select', require('./components/forms/MultiSelect'));

    Vue.component('o-header', require('./components/layout/Header'));
    Vue.component('o-main-nav', require('./components/layout/nav/MainNav'));
    Vue.component('o-nav-item', require('./components/layout/nav/MainNavItem'));
    Vue.component('o-sub-nav', require('./components/layout/nav/SubNav'));
    Vue.component('o-sub-nav-item', require('./components/layout/nav/SubNavItem'));

    Vue.component('o-confirm', require('./components/ui/Confirm'));
    Vue.component('o-dropdown', require('./components/ui/Dropdown'));
    Vue.component('o-loader', require('./components/ui/Loader'));
    Vue.component('o-modal', require('./components/ui/Modal'));
    Vue.component('o-notification', require('./components/ui/Notification'));
    Vue.component('o-pagination', require('./components/ui/Pagination'));
    Vue.component('o-search-form', require('./components/ui/SearchForm'));
    Vue.component('o-sort', require('./components/ui/Sort'));
}
