<template>
    <header class="bg-white border-b border-grey-light p-8">
        <div class="flex justify-between items-center">
            <div>
                <h1 class="title">{{ title }}</h1>
            </div>

            <div>
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