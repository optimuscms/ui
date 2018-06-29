<template>
    <div>
        <router-view></router-view>

        <media-manager></media-manager>
    </div>
</template>

<script>
    import MediaManager from '@optimuscms/media-manager/src/components/Manager';

    export default {
        components: {
            MediaManager
        }
    }
</script>
