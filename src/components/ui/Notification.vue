<template>
    <transition name="notification">
        <div class="notification is-radiusless p-4" v-if="active">
            <button class="delete" v-if="closeable" @click="$emit('close')"></button>

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
        }
    }
</script>
