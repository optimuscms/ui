<template>
    <div class="select is-multi">
        <vue-select
            :id="id"
            :value="value"
            :multiple="true"
            :custom-label="label"
            :options="options.map(category => category.id)"
            @input="emit">
        </vue-select>
    </div>
</template>

<script>
    import VueSelect from 'vue-multiselect'
    
    export default {
        components: {
            VueSelect
        },

        props: {
            id: {
                type: String,
                required: false
            },

            value: [Object, Array, String, Number],

            options: {
                type: Array,
                required: true
            }
        },

        methods: {
            label(id) {
                return this.options.find(option => option.id === id).name;
            },

            emit(value) {
                this.$emit('input', value);
            }
        }
    }
</script>
