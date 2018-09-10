<template>
    <a class="text-has-icon" @click="sort">
        <span class="is-unselectable">
            <slot></slot>
        </span>

        <span class="icon" :class="{ 'is-faded': ! direction }">
            <icon :icon="icon"></icon>
        </span>
    </a>
</template>

<script>
    export default {
        props: {
            column: {
                type: String,
                required: true
            },

            current: String
        },

        data() {
            return {
                direction: null
            }
        },

        computed: {
            icon() {
                let icon = 'sort';

                if (this.direction) {
                    icon = this.direction === 'desc' ? 'sort-up' : 'sort-down';
                }

                return icon;
            }
        },

        watch: {
            current(value) {
                value = (value && value.charAt(0) === '-') ? value.substr(1) : value;
                
                if (value != this.column) {
                    this.direction = null;
                }
            }
        },

        methods: {
            sort() {
                let sort = null;

                if (! this.direction) {
                    this.direction = 'asc';
                    sort = this.column;
                } else if (this.direction == 'asc') {
                    this.direction = 'desc';
                    sort = '-' + this.column;
                } else if (this.direction == 'desc') {
                    this.direction = null;
                    sort = null;
                }
                
                this.$emit('order', sort);
            }
        }
    }
</script>
