<template>
    <th>
        <a class="inline-flex items-center" @click="sort">
            <span class="select-none">
                <slot></slot>
            </span>

            <span class="icon ml-4" :class="{ 'opacity-50': ! direction }">
                <icon :icon="icon"></icon>
            </span>
        </a>
    </th>
</template>

<script>
    export default {
        props: {
            column: {
                type: String,
                required: true
            },

            value: String
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
                
                this.$emit('input', sort);
            }
        }
    }
</script>
