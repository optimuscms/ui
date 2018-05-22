<template>
    <transition name="fade" mode="out-in"> 
        <div class="modal is-active" v-if="active">
            <div class="modal-background" @click="close"></div>
            
            <div class="modal-content">
                <div class="confirm">
                    <div class="confirm-content">
                        <div class="content has-text-grey-darker has-text-centered">
                            <slot v-bind="item">
                                Are you sure?
                            </slot>
                        </div>
                    </div>

                    <footer class="confirm-footer">
                        <button
                            class="button"
                            :class="['is-' + type]"
                            @click="confirm">
                            <slot name="confirmButtonText">Confirm</slot>
                        </button>

                        <button
                            class="button"
                            @click="close">
                            <slot name="cancelButtonText">Cancel</slot>
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'success'
            }
        },

        data() {
            return {
                active: false,
                item: null
            }
        },

        methods: {
            confirm() {
                this.$emit('confirm', this.item);
                this.close();
            },

            open(item) {
                this.item = item;
                this.active = true;
            },

            close(item) {
                this.item = null;
                this.active = false;
            }
        }
    }
</script>
