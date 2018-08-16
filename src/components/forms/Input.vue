<template>
    <component
        :is="type === 'textarea' ? type : 'input'"
        :id="id"
        :type="type"
        :class="type === 'textarea' ? 'textarea' : 'input'"
        @input="newValue = $event.currentTarget.value"
        :value.prop="newValue"
    ></component>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },

            type: {
                type: String,
                default: 'text'
            },

            value: {
                default: null
            }
        },

        computed: {
            newValue: {
                get() { return this.value },
                set(value) { this.$emit('input', value) }
            }
        },

        watch: {
            value(value) {
                this.newValue = value;
            },

            newValue(value) {
                this.$emit('input', value);
            }
        }
    }
</script>
