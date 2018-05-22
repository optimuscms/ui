<template>
    <notification class="is-danger" :active="errors.any()" :closeable="false">
        <ul>
            <template v-for="errorGroup in errors.all()">
                <li :key="index" v-for="(error, index) in errorGroup">
                    {{ error }}
                </li>
            </template>
        </ul>
    </notification>
</template>

<script>
    import Notification from '../ui/Notification';

    export default {
        components: {
            Notification
        },

        props: {
            errors: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
