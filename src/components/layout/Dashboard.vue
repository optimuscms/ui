<template>
    <div class="dashboard background is-grey-lighter" :class="{ 'side-is-open': navIsOpen }">
        <main-nav>
            <slot name="navigation"></slot>
        </main-nav>
        
        <section class="main">
            <sub-nav>
                <slot name="sub-navigation"></slot>
            </sub-nav>

            <div class="main-content">
                <app-header :title="meta.title">
                    <div class="level-item">
                        <a class="icon" @click="logout">
                            <icon icon="sign-out-alt" size="lg"></icon>
                        </a>
                    </div>
                </app-header>
                
                <loader>
                    <slot></slot>
                </loader>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Icon from '@fortawesome/vue-fontawesome';

    import Loader from '../ui/Loader';
    import MainNav from './nav/MainNav';
    import SubNav from './nav/SubNav';
    import AppHeader from './Header';

    export default {
        components: {
            AppHeader,
            Icon,
            Loader,
            MainNav,
            SubNav
        },

        data() {
            return {
                nav: {
                    open: false
                }
            }
        },

        computed: {
            ...mapGetters({
                navIsOpen: 'navigation/isOpen'
            }),

            meta() {
                return this.$route.matched[0].meta;
            }
        },

        methods: {
            logout() {
                this.$store.dispatch('auth/logout').then(() => {
                    this.$router.push({ name: 'login' });
                });
            }
        }
    }
</script>
