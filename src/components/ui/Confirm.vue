<template>
    <modal :active="isActive" @close="close">
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
                    <a class="button"
                        :class="['is-' + type]"
                        @click="confirm">
                        <slot name="confirmButtonText">Confirm</slot>
                    </a>

                    <a class="button"
                        @click="close">
                        <slot name="cancelButtonText">Cancel</slot>
                    </a>
                </footer>
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from './Modal';

    export default {
        components: {
            Modal
        },

        props: {
            type: {
                type: String,
                default: 'success'
            }
        },

        data() {
            return {
                isActive: false,
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
                this.isActive = true;
            },

            close() {
                this.item = null;
                this.isActive = false;
            }
        }
    }
</script>
