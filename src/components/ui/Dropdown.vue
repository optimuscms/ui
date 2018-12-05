<template>
    <div ref="dropdown" class="dropdown" :class="{ 'is-active': isOpen }">
        <div class="dropdown-trigger" @click="isOpen = ! isOpen">
            <slot name="button" :is-open="isOpen">
                <a class="button" :class="buttonClass">
                    <span>{{ buttonText }}</span>

                    <span class="icon is-small">
                        <icon :icon="icon"></icon>
                    </span>
                </a>
            </slot>
        </div>
        
        <div class="dropdown-menu" @click="isOpen = false">
            <div class="is-scrollable">
                <div class="dropdown-content">
                    <slot>
                        <a
                            class="dropdown-item"
                            v-if="defaultOption"
                            @click="newValue = null"
                            :class="{ 'is-active': ! value }"
                        >{{ placeholder }}</a>
                        
                        <template v-for="option in options">
                            <slot name="option" :option="option">
                                <a
                                    :key="option.value"
                                    class="dropdown-item"
                                    @click="newValue = option.value"
                                    :class="{ 'is-active': option.value == value }"
                                >{{ option.label }}</a>
                            </slot>
                        </template>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                default: null
            },

            options: {
                type: Array,
                default: () => []
            },

            defaultOption: {
                type: Boolean,
                default: true
            },

            placeholder: {
                type: String,
                default: 'Please select'
            },

            buttonClass: {
                type: String,
                default: ''
            },

            icon: {
                type: [ String, Object ],
                default: 'angle-down'
            }
        },

        data() {
            return {
                isOpen: false,
                newValue: this.value
            }
        },

        computed: {
            buttonText() {
                let option = null;

                if (this.newValue) {
                    option = this.options.find(({ value }) => value == this.newValue);
                }

                return option ? option.label : this.placeholder;
            }
        },

        watch: {
            newValue(value) {
                this.$emit('input', value);
            }
        },

        created() {
            document.addEventListener('click', this.close);
        },

        destroyed() {
            document.removeEventListener('click', this.close);
        },

        methods: {
            close(event) {
                if (
                    (this.$refs.dropdown !== event.target)
                    && ! this.$refs.dropdown.contains(event.target)
                ) {
                    this.isOpen = false;
                }
            }
        }
    }
</script>
