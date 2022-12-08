<template>
    <!-- || closing => Prevents the sidebox's content from dissapering before the animation is done -->
    <Teleport to="#sidebox-container" v-if="open || closing">
        <div class="sidebox"
            :class="mergedClasses"
            v-click-outside="handleClickOutside"
        >
            <div class="sidebox--close button" @click="$emit('close')">
                <img src="~/assets/icons/menu-close.svg" />
            </div>
            
            <div class="sidebox--content mt-20">
                <slot></slot>
            </div>
        </div>
    </Teleport>
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
        classes: {
            type: [String, Array, Object],
            default: '',
        }
    },
    data: () => ({
        isClosable: false,
        closing: false,
    }),
    computed: {
        mergedClasses: function() {
            const value = this.classes
            let classes = {}

            if (typeof value === 'string') {
                classes[value] = true
            }
            else if (Array.isArray(value)) {
                value.forEach(c => classes[c] = true)
            }
            else {
                classes = value
            }

            return {
                ...classes,
                'open': this.open,
                'right': this.position === 'right',
                'left': this.position === 'left',
            }
        }
    },
    watch: {
        open(isOpen) {
            if (isOpen) {
                this.handleOpen()
            }
            else {
                this.handleClose()
            }
        },
    },
    methods: {
        handleOpen() {
            this.isClosable = false // Prevents the sidebox from being closable before the animation is done

            this.$nextTick(() => {
                const tl = this.$gsap.timeline()
                tl.to(['.sidebox-anchor', '.sidebox'], { duration: 0.3, x: this.position === 'left' ? 640 : -640 })
                tl.to('#sidebox-overlay', { duration: 0.3, opacity: 0.6, pointerEvents: 'all' }, '<')
                tl.eventCallback('onComplete', () => { this.isClosable = true })
            })
        },
        handleClose() {
            this.closing = true // Prevents the sidebox's content from dissapering before the animation is done

            const tl = this.$gsap.timeline()
            tl.to(['.sidebox-anchor', '.sidebox'], { duration: 0.3, x: 0 })
            tl.to('#sidebox-overlay', { duration: 0.3, opacity: 0, pointerEvents: 'none' }, '<')
            tl.eventCallback('onComplete', () => { this.closing = false })
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
$sidebox-width-desktop: 640px;
$sidebox-width-mobile: 100%;

#__layout {
    &:after {
        pointer-events: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color-darken-web-blue;
        opacity: 0;
        // transition: opacity 0.3s ease-in-out;
    }
}

// body.sidebox-open {
//     overflow: hidden;

//     // .sidebox-anchor:before {
//     //     opacity: 0.6;
//     // }
// }

.sidebox {
    position: fixed;
    top: 0;
    background-color: $color-web-background;
    
    height: 0;
    width: $sidebox-width-mobile;
    z-index: 10;
    padding: 30px 20px;

    @include lg() {
        height: 100vh;
        width: $sidebox-width-desktop;
        padding: 50px 80px;

        &.left {
            left: - $sidebox-width-desktop;
        }
        &.right {
            right: - $sidebox-width-desktop;
        }
    }

    &.open {
        height: 100vh;

        // &:before {
        //     opacity: 0.6;
        // }
    }

    // &:before {
    //     pointer-events: none;
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     width: 100vw;
    //     height: 100vh;
    //     background-color: $color-darken-web-blue;
    //     opacity: 0;
    //     z-index: 20;
    //     transition: opacity 0.3s ease-in-out;
    // }
}

.sidebox--content {
    position: relative;
    transition: transform 0.3s ease-in-out;
    width: 100%;
}

.sidebox--close {
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