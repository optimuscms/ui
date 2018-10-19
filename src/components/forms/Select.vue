<template>
    <div class="select w-full">
        <select :id="id" v-model="newValue" :required="required">
            <slot></slot>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                default: null
            },

            id: {
                type: String,
                required: true
            },

            required: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return  {
                newValue: this.value
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
