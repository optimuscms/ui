<template>
    <router-link :to="to" tag="li" exact>
        <a class="sub-nav-link">
            <slot></slot>
        </a>
    </router-link>
</template>

<script>
    export default {
        props: {
            to: {
                type: [ Object, String ],
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .sub-nav-link {
        display: block;
        color: config('colors.white');
        font-weight: config('fontWeights.semibold');
        border-radius: config('borderRadius.default');
        padding: config('padding.2') config('padding.3');

        &:hover,
        &:focus,
        &:active {
            color: config('colors.white');
            background-color: config('colors.blue-darkest');
        }
    }

    .is-active {
        .sub-nav-link {
            color: config('colors.white');
            background-color: config('colors.blue-darkest');
        }
    }
</style>
