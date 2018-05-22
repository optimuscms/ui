<template>
    <div class="field">
        <div class="control">
            <input type="checkbox" :id="id" class="checkbox" v-model="newValue">
            <label :for="id">{{ label }}</label>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                default: null
            },

            label: {
                type: String,
                required: true
            },

            id: {
                type: String,
                required: true
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

