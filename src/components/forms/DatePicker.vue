<template>
    <div class="field addons">
        <div class="control">
            <span class="button static">
                <span class="icon">
                    <icon icon="calendar-alt"></icon>
                </span>
            </span>
        </div>

        <div class="control flex-grow">
            <input
                :id="id"
                ref="picker"
                type="text"
                class="input"
                v-model="newValue"
                :required="required"
            >
        </div>
    </div>
</template>

<script>
    import flatpickr from 'flatpickr';
    require('flatpickr/dist/flatpickr.css');

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
            },

            time: {
                type: Boolean,
                default: true
            },

            format: String
        },

        data() {
            return  {
                flatpickr: null,
                
                newValue: this.value
            }
        },

        computed: {
            altFormat() {
                if (this.format) {
                    return this.format;
                }

                return this.time ? 'F j, Y - h:i K' : 'F j, Y';
            }
        },

        watch: {
            value(value) {
                this.newValue = value;

                this.flatpickr.setDate(value, true, 'Y-m-d H:i:S');
            },

            newValue(value) {
                this.$emit('input', value);
            }
        },

        mounted() {
            this.flatpickr = flatpickr(this.$refs.picker, {
                altInput: true,
                enableTime: this.time,
                altFormat: this.altFormat,
                dateFormat: 'Y-m-d H:i:S'
            });
        }
    }
</script>
