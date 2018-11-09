import NProgress from 'nprogress';

export default function install (Vue) {
    // Import libraries
    require('./lib/icons');

    // Install plugins
    window.progress = NProgress;

    progress.configure({
        showSpinner: false,
        parent: '#main'
    });

    // Register components
    Vue.component('o-errors', require('./components/forms/Errors'));
    Vue.component('o-checkbox', require('./components/forms/Checkbox'));
    Vue.component('o-date-picker', require('./components/forms/DatePicker'));
    Vue.component('o-input', require('./components/forms/Input'));
    Vue.component('o-form-field', require('./components/forms/Field'));
    Vue.component('o-select', require('./components/forms/Select'));
    Vue.component('o-multi-select', require('./components/forms/MultiSelect'));

    Vue.component('o-header', require('./components/layout/Header'));
    Vue.component('o-main-nav', require('./components/layout/nav/MainNav'));
    Vue.component('o-main-nav-item', require('./components/layout/nav/MainNavItem'));
    Vue.component('o-sub-nav', require('./components/layout/nav/SubNav'));
    Vue.component('o-sub-nav-item', require('./components/layout/nav/SubNavItem'));

    Vue.component('o-alert', require('./components/ui/Alert'));
    Vue.component('o-confirmation', require('./components/ui/Confirmation'));
    Vue.component('o-dropdown', require('./components/ui/Dropdown'));
    Vue.component('o-loader', require('./components/ui/Loader'));
    Vue.component('o-modal', require('./components/ui/Modal'));
    Vue.component('o-notification', require('./components/ui/Notification'));
    Vue.component('o-pagination', require('./components/ui/Pagination'));
    Vue.component('o-search', require('./components/ui/Search'));
    Vue.component('o-tabs', require('./components/ui/Tabs'));
    Vue.component('o-tab', require('./components/ui/Tab'));
    Vue.component('o-th-sort', require('./components/ui/ThSort'));
}
