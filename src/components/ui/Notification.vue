<template>
    <transition name="notification">
        <div class="notification p-4">
            <a class="delete" v-if="closeable" @click="$emit('close')"></a>

            <div class="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            closeable: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
