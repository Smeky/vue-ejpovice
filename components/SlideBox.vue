<template>
    <div class="slidebox" 
        :class="{ 
            'open': open, 
            'right': position === 'right', 
            'left': position === 'left'
        }" 
        v-click-outside="handleClickOutside"
    >
        <div class="slidebox--close button" @click="$emit('close')">
            <img src="~/assets/icons/menu-close.svg" />
        </div>
        
        <div class="slidebox--content mt-20">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        position: {
            type: String,
            default: 'left',
        },
    },
    data: () => ({
        isClosable: false,
    }),
    mounted() {
        // If the slidebox is open on mount, we need to update the root classes
        this.updateBodyClass()
    },
    watch: {
        open() {
            this.updateBodyClass()
            this.handleClosableState()
        },
    },
    methods: {
        updateBodyClass() {
            if (this.open) {
                document.body.classList.add('slidebox-open', `slidebox--${this.position}`)
            } else {
                document.body.classList.remove('slidebox-open', `slidebox--${this.position}`)
            }
        },
        handleClosableState() {
            if (this.open) {
                setTimeout(() => {
                    this.isClosable = true
                }, 300)
            }
            else {
                this.isClosable = false
            }
        },
        handleClickOutside() {
            if (this.isClosable) {
                this.$emit('close')
            }
        },
    },
    emits: ['close'],
}
</script>

<style lang="scss">
$slidebox-width-desktop: 640px;
$slidebox-width-mobile: 100%;

.slidebox-anchor {
    transition: transform 0.4s ease-in-out;
}

body.slidebox-open {
    @include lg() {
        &.slidebox--left .slidebox-anchor {
            transform: translateX($slidebox-width-desktop);
        }
        &.slidebox--right .slidebox-anchor {
            transform: translateX(-$slidebox-width-desktop);
        }
    }
}

.slidebox {
    position: fixed;
    top: 0;

    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background-color: $color-web-background;

    height: 0;
    width: $slidebox-width-mobile;
    z-index: 10;

    @include lg() {
        height: 100vh;
        width: $slidebox-width-desktop;
        z-index: 0;
    }

    &.right {
        right: 0;
    }

    &.open {
        visibility: visible;
        height: 100vh;
    }
}

.slidebox--content {
    position: relative;
    transition: transform 0.3s ease-in-out;
    width: 100%;
}

.slidebox--close {
    position: absolute;
    top: 0;
    right: 0;
    
    display: flex;
    margin-top: 16px;
    margin-right: 16px;

    width: 40px;
    height: 40px;
    
    @include lg() {
        width: 50px;
        height: 50px;
    }

    border-radius: 100%;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    
    > img {
        transition: all 0.2s ease-in-out;
        margin: auto;
    }

    &:hover {
        background-color: #E6E6E6;

        > img {
            transform: scale(0.7)
        }
    }
}

</style>