<template>
    <transition name="notification">
        <div class="notification p-4" v-if="isActive">
            <a class="delete" v-if="closeable" @click="close"></a>

            <div class="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },

            closeable: {
                type: Boolean,
                default: true
            }
        },

        data() {
            return {
                isActive: false
            }
        },

        watch: {
            active(value) {
                this.isActive = value;
            }
        },

        methods: {
            close() {
                this.isActive = false;
                this.$emit('close');
            }
        }
    }
</script>
