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
    export default {
        data() {
            return {
                isOpen: false
            }
        },

        methods: {
            sideToggle() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.$emit('closed');
                } else {
                    this.isOpen = true;
                    this.$emit('opened');
                }
            }
        }
    }
</script>
