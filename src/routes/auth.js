let routes = [
    {
        path: '/login',
        name: 'login',
        component: require('optimus/src/views/auth/Login'),
        meta: { requiresGuest: true }
    }
];

export default routes;
