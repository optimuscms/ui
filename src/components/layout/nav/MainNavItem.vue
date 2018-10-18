<template>
    <router-link :to="to" tag="li" class="nav-item">
        <a>
            <icon :icon="icon" size="2x"></icon>

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
                type: [ Array, String ],
                required: true
            },

            to: {
                type: [ Object, String ],
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .nav-item {
        > a {
            display: flex;
            text-align: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: config('height.24');
            color: config('colors.blue-light');
            padding: config('padding.4') config('padding.6');
            border-bottom: 1px solid config('colors.white-a-01');

            svg {
                margin-bottom: config('margin.2');
            }

            strong {
                font-size: config('textSizes.sm')
            }

            &:hover,
            &:focus,
            &:active {
                color: config('colors.white');
                background-color: config('colors.primary');
            }
        }

        &.is-active {
            > a {
                color: config('colors.white');
                background-color: config('colors.primary');
            }
        }
    }
</style>
