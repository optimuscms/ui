<template>
    <router-link :to="to" tag="li">
        <a>
            <icon :icon="icon" size="2x" class="mb-2"></icon>

            <strong>
                <slot></slot>
            </strong>
        </a>
    </router-link>
</template>

<script>
    export default {
        props: {
            icon: {
                type: [Array, String],
                required: true
            },

            to: {
                type: [Object, String],
                required: true
            }
        }
    }
</script>
