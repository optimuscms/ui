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
    import Icon from '@fortawesome/vue-fontawesome';

    export default {
        components: {
            Icon
        },

        props: {
            icon: {
                type: String,
                required: true
            },

            to: {
                type: [Object, String],
                required: true
            }
        }
    }
</script>
