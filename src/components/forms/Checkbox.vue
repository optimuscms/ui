<template>
    <div class="control">
        <input :name="id" :type="type" :id="id" class="checkbox" :value="checkedValue" v-model="newValue">
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props: {
            value: {},

            checkedValue: {
                default: true
            },

            label: {
                type: String,
                required: true
            },

            id: {
                type: String,
                required: true
            },

            type: {
                type: String,
                default: 'checkbox'
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

