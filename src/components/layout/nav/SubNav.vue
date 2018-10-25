<template>
    <div class="side-secondary w-64 z-10 bg-blue-darker md:relative md:flex-no-shrink">
        <a class="side-toggle w-5 h-full z-30 bg-blue-darker md:hidden" @click="sideToggle">
            <span class="dots">
                <i></i>
            </span>
        </a>

        <div class="flex h-full overflow-auto md:overflow-visible">
            <nav class="nav w-full relative px-6 py-8">
                <slot></slot>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false
            }
        },

        methods: {
            sideToggle() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.$emit('closed');
                } else {
                    this.isOpen = true;
                    this.$emit('opened');
                }
            }
        }
    }
</script>

<style lang="scss">
    .side-secondary {
        .nav {
            &:before {
                top: 0;
                left: 0;
                bottom: 0;
                width: 3px;
                content: '';
                position: absolute;
                pointer-events: none;
                background: linear-gradient(to right, rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, 0) 100%);
            }

            ul > li {
                display: block;
                margin-bottom: config('margin.4');

                &.divider {
                    height: 1px;
                    margin: config('margin.4') 0;
                    background-color: config('colors.blue');
                }
            }
        }
    }

    @screen lt-md {
        .side-secondary {
            top: 0;
            left: 0;
            bottom: 0;
            position: fixed;
            max-width: calc(90% - 6rem);
            transform: translateX(-100%);
            transition: 180ms all ease-out;

            .side-toggle {
                top: 0;
                bottom: 0;
                right: -1.2rem;
                position: absolute;
                box-shadow: 6px 0 6px 3px rgba(0, 0, 0, 0.2);
        
                .dots {
                    top: 50%;
                    left: 50%;
                    position: absolute;
                    transform: translate(-50%, -50%);
        
                    i,
                    i:before,
                    i:after {
                        width: 4px;
                        height: 4px;
                        display: block;
                        border-radius: 4px;
                        background-color: config('colors.blue-lighter');
                    }
        
                    i {
                        position: relative;
        
                        &:before,
                        &:after {
                            content: '';
                            position: absolute;
                        }
        
                        &:before {
                            transform: translateY(-10px);
                        }
        
                        &:after {
                            transform: translateY(10px);
                        }
                    }
                }
            }
        }

        .side-is-open {
            .side-secondary {
                transform: translateX(0);
                left: config('width.24');
            }
        }
    }

    @screen sm-only {
        .side-secondary {
            left: config('width.24');
        }
    }
</style>
