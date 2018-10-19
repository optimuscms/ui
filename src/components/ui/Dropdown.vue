<template>
    <div ref="dropdown" class="dropdown" :class="{ 'active': isActive }">
        <div @click="isActive = ! isActive">
            <slot name="button"></slot>
        </div>
        
        <div class="dropdown-menu" @click="isActive = false">
            <div class="is-scrollable">
                <div class="dropdown-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false
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
                    this.isActive = false;
                }
            }
        }
    }
</script>
