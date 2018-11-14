<template>
    <form @submit.prevent="submit">
        <div class="field has-addons">
            <label for="search" class="is-hidden">Search</label>

            <div class="control">
                <o-input
                    id="search"
                    type="search"
                    v-model="newValue"
                    :placeholder="placeholder"
                ></o-input>
            </div>

            <div class="control">
                <button class="button">
                    <span class="icon">
                        <icon icon="search"></icon>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: 'Search'
            },

            value: {
                type: String,
                default: null
            }
        },

        data() {
            return {
                newValue: this.value 
            }
        },

        methods: {
            submit() {
                this.$emit('input', this.newValue);
            }
        }
    }
</script>
