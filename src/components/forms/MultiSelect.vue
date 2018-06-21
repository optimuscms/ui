<template>
    <div class="field" :class="{ 'is-required': required }">
        <label :for="id" class="label">{{ label }}</label>

        <div class="control">
            <div class="select is-fullwidth is-multi">
                <vue-select
                    :id="id"
                    :value="value"
                    :multiple="true"
                    :custom-label="optionLabel"
                    :options="options.map(category => category.id)"
                    @input="emit">
                </vue-select>
            </div>
        </div>

        <div class="help" v-if="$slots['help']">
            <slot name="help"></slot>
        </div>
    </div>
</template>

<script>
    import VueSelect from 'vue-multiselect'
    
    export default {
        components: {
            VueSelect
        },

        props: {
            value: [Object, Array, String, Number],
            
            label: {
                type: String,
                required: true
            },

            id: {
                type: String,
                required: false
            },

            required: {
                type: Boolean,
                default: false
            },

            options: {
                type: Array,
                required: true
            }
        },

        methods: {
            optionLabel(id) {
                return this.options.find(option => option.id === id).name;
            },

            emit(value) {
                this.$emit('input', value);
            }
        }
    }
</script>
