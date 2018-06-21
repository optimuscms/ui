<template>
    <modal :active="isActive" @close="close">
        <div class="modal-content">
            <div class="alert">
                <div class="alert-content">
                    <div class="content has-text-grey-darker has-text-centered">
                        {{ message }}
                    </div>
                </div>

                <footer class="modal-card-foot">
                    <a class="button is-success" @click="close">
                        <slot name="confirmButtonText">Ok</slot>
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

        data() {
            return {
                isActive: false,
                message: ''
            }
        },

        methods: {
            open(message) {
                this.message = message;
                this.isActive = true;
            },

            close() {
                this.$emit('close');
                this.isActive = false;
            }
        }
    }
</script>
