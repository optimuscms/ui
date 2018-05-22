<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination" v-if="hasPages()">
        <a class="pagination-previous" v-if="hasPreviousPage()" @click="changePage(previousPage)">Previous</a>
        <span class="pagination-previous" disabled v-else>Previous</span>

        <a class="pagination-next" v-if="hasNextPage()" @click="changePage(nextPage)">Next</a>
        <span class="pagination-next" disabled v-else>Next</span>

        <ul class="pagination-list">
            <li :key="page" v-for="page in options.last_page">
                <span class="pagination-link is-current" v-if="isCurrent(page)">{{ page }}</span>
                <a class="pagination-link" @click="changePage(page)" v-else>{{ page }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            options: Object
        },

        computed: {
            previousPage() {
                return this.options.current_page - 1;
            },

            nextPage() {
                return this.options.current_page + 1;
            }
        },

        methods: {
            hasPages() {
                return this.options && this.options.last_page > 1;
            },

            hasPreviousPage() {
                return this.previousPage > 0;
            },

            hasNextPage() {
                return this.nextPage <= this.options.last_page;
            },

            isCurrent(page) {
                return this.options.current_page === page;
            },

            changePage(page) {
                if (page < 1 || page > this.options.last_page) {
                    return;
                }

                this.options.current_page = page;
                this.$emit('change-page', page);
            }
        }
    }
</script>
