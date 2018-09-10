<template>
    <o-modal :active="isActive" @close="close">
        <div class="modal-content">
            <div class="alert">
                <div class="alert-content">
                    <div class="content has-text-grey-darker has-text-centered">
                        <slot></slot>
                    </div>
                </div>

                <footer class="modal-card-foot">
                    <a class="button is-success" @click="close">
                        <slot name="confirmButtonText">Ok</slot>
                    </a>
                </footer>
            </div>
        </div>
    </o-modal>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },

        methods: {
            open() {
                this.isActive = true;
            },

            close() {
                this.$emit('close');
                this.isActive = false;
            }
        }
    }
</script>
