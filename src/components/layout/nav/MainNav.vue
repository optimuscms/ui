<template>
    <div class="side-primary relative w-24 z-50 bg-blue md:flex-no-shrink">
        <div class="flex h-full overflow-auto md:overflow-visible">
            <nav class="nav w-full relative">
                <slot></slot>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
    .side-primary {
        .nav {
            min-height: min-content;
            
            &:after {
                top: 0;
                right: 0;
                bottom: 0;
                z-index: 2;
                width: 1px;
                content: '';
                position: absolute;
                pointer-events: none;
                background-color: config('colors.white-a-01');
            }
        }
    }
    
    @screen lt-sm {
        .side-primary {
            top: 0;
            left: 0;
            bottom: 0;
            position: fixed;
            transform: translateX(-100%);
            transition: 180ms all ease-out;
        }

        .side-is-open {
            .side-primary {
                transform: translateX(0);
            }
        }
    }
</style>
