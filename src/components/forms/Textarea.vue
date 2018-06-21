<template>
    <div class="field" :class="{ 'is-required': required }">
        <label :for="id" class="label">{{ label }}</label>

        <div class="control">
            <textarea :id="id" class="textarea" v-model="newValue" :required="required"></textarea>
        </div>

        <div class="help" v-if="$slots['help']">
            <slot name="help"></slot>
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
