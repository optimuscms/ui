<template>
    <router-link :to="to" tag="li">
        <a>
            <slot></slot>
        </a>
    </router-link>
</template>

<script>
    export default {
        props: {
            to: {
                type: [Object, String],
                required: true
            }
        }
    }
</script>
