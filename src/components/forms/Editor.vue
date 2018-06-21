<template>
    <div class="field" :class="{ 'is-required': required }">
        <label :for="id" class="label">{{ label }}</label>

        <div class="control">
            <editor v-model="newValue"></editor>
        </div>

        <div class="help" v-if="$slots['help']">
            <slot name="help"></slot>
        </div>
    </div>
</template>

<script>
    import Editor from '@optimuscms/editor/src/Editor';

    export default {
        components: {
            Editor
        },

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
