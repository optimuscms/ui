<template>
    <div ref="dropdown" class="dropdown" :class="{ 'open': isOpen }">
        <div class="cursor-pointer" @click="isOpen = ! isOpen">
            <slot name="button" :is-open="isOpen">
                <span class="button">
                    <span>{{ buttonText }}</span>

                    <span class="icon">
                        <icon :icon="icon"></icon>
                    </span>
                </span>
            </slot>
        </div>
        
        <div class="dropdown-menu" @click="isOpen = false">
            <div class="dropdown-scroll">
                <div class="dropdown-content">
                    <a
                        class="dropdown-item"
                        @click="newValue = null"
                        :class="{ 'active': ! value }"
                    >{{ placeholder }}</a>
                    
                    <template v-for="option in options">
                        <slot name="option" :option="option">
                            <a
                                :key="option.value"
                                class="dropdown-item"
                                @click="newValue = option.value"
                                :class="{ 'active': option.value == value }"
                            >{{ option.label }}</a>
                        </slot>
                    </template>
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

            placeholder: {
                type: String,
                default: 'Please select'
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
                return this.value
                    ? this.options.find(({ value }) => value === this.value).label
                    : this.placeholder;
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
