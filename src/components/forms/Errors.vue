<template>
    <div>
        <notification class="is-danger" :closeable="false">
            <ul>
                <template v-for="errorGroup in errors">
                    <li :key="index" v-for="(error, index) in errorGroup">
                        {{ error }}
                    </li>
                </template>
            </ul>
        </notification>
    </div>
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
