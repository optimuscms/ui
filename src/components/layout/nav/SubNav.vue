<template>
    <div class="side-secondary background is-secondary">
        <a class="side-toggle" @click="sideToggle">
            <span class="dots">
                <i></i>
            </span>
        </a>

        <div class="side-scroll">
            <nav class="nav px-3 py-4">
                <slot></slot>
            </nav>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                isOpen: 'navigation/isOpen'
            })
        },

        methods: {
            ...mapMutations({
                open: 'navigation/open',
                close: 'navigation/close'
            }),

            sideToggle() {
                this.isOpen ? this.close() : this.open();
            }
        }
    }
</script>
