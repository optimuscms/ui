<template>
    <transition :css="false" @before-enter="beforeEnter" @enter="enter">
        <div v-show="! isLoading">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Velocity from 'velocity-animate';

    export default {
        computed: {
            ...mapGetters({
                isLoading: 'loader/isLoading'
            })
        },

        watch: {
            isLoading() {
                if (this.isLoading) {
                    progress.start();
                } else {
                    progress.done();
                }
            }
        },

        mounted() {
            if (this.isLoading) {
                progress.start();
            }
        },

        methods: {
            beforeEnter(el) {
                el.style.opacity = 0;
            },

            enter(el, done) {
                Velocity(el, { opacity: 1 }, {
                    duration: 150
                });
            },
        }
    }
</script>
