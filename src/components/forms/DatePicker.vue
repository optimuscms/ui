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

<style lang="scss">
    .flatpickr-months {
        .flatpickr-month,
        .flatpickr-prev-month,
        .flatpickr-next-month,
        .flatpickr-current-month {
            height: 36px !important;
        }

        .flatpickr-current-month {
            font-size: 110% !important;

            .numInputWrapper {
                width: 6.5ch !important;
            }
        }
    }

    .flatpickr-day.selected,
    .flatpickr-day.startRange,
    .flatpickr-day.endRange,
    .flatpickr-day.selected.inRange,
    .flatpickr-day.startRange.inRange,
    .flatpickr-day.endRange.inRange,
    .flatpickr-day.selected:focus,
    .flatpickr-day.startRange:focus,
    .flatpickr-day.endRange:focus,
    .flatpickr-day.selected:hover,
    .flatpickr-day.startRange:hover,
    .flatpickr-day.endRange:hover,
    .flatpickr-day.selected.prevMonthDay,
    .flatpickr-day.startRange.prevMonthDay,
    .flatpickr-day.endRange.prevMonthDay,
    .flatpickr-day.selected.nextMonthDay,
    .flatpickr-day.startRange.nextMonthDay,
    .flatpickr-day.endRange.nextMonthDay {
        background: config('colors.primary') !important;
        border-color: config('colors.primary') !important;
    }

    .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),
    .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),
    .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {
        box-shadow: -10px 0 0 config('colors.primary') !important;
    }

    .flatpickr-day.week.selected {
        box-shadow: -5px 0 0 config('colors.primary'), 5px 0 0 config('colors.primary') !important;
    }

    .flatpickr-months .flatpickr-prev-month:hover,
    .flatpickr-months .flatpickr-next-month:hover {
        color: config('colors.blue-dark') !important;
    }

    .flatpickr-day.today {
        border-color: config('colors.blue-dark') !important;
    }

    .flatpickr-day.today:hover,
    .flatpickr-day.today:focus {
        color: config('colors.white') !important;
        background: config('colors.blue-dark') !important;
        border-color: config('colors.blue-dark') !important;
    }
</style>
