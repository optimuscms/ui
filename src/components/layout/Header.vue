<template>
    <header class="background is-white has-border-bottom p-4">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <h1 class="title has-text-weight-light">{{ title }}</h1>
                </div>
            </div>

            <div class="level-right">
                <slot></slot>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>