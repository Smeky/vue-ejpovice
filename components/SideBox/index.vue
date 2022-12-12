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
            
            <div class="sidebox--content">
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script>
import { useTimeline } from '~/composables/useTimeline'

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
    setup() {
        return {
            ...useTimeline(),
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
            const isMobile = this.$store.state.isMobile

            // Next tick because the sidebox is not rendered yet
            this.$nextTick(() => {
                if (isMobile) {
                    this.timeline.to('.sidebox', { duration: 0.3, height: '100%' })
                }
                else {
                    this.timeline.to(['.sidebox-anchor', '.sidebox'], { duration: 0.3, x: this.position === 'left' ? 640 : -640 })
                    this.timeline.to('#sidebox-overlay', { duration: 0.3, opacity: 0.6, pointerEvents: 'all' }, '<')
                    this.timeline.to('body', { overflow: 'hidden' }, '<')
                }

                this.timeline.eventCallback('onComplete', () => { this.isClosable = true })
            })
        },
        handleClose() {
            this.closing = true // Prevents the sidebox's content from dissapering before the animation is done
            const isMobile = this.$store.state.isMobile

            if (isMobile) {
                this.timeline.to('.sidebox', { duration: 0.3, height: '0%' })
            }
            else {
                this.timeline.to(['.sidebox-anchor', '.sidebox'], { duration: 0.3, x: 0 })
                this.timeline.to('#sidebox-overlay', { duration: 0.3, opacity: 0, pointerEvents: 'none' }, '<')
                this.timeline.set('body', { overflow: '' }, '<')
            }

            this.timeline.eventCallback('onComplete', () => { this.closing = false })
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

.sidebox {
    position: fixed;
    top: 0;
    background-color: $color-web-background;
    overflow: auto;
    height: 0;
    width: $sidebox-width-mobile;
    z-index: 10;

    @include lg() {
        height: 100vh;
        width: $sidebox-width-desktop;

        &.left {
            left: - $sidebox-width-desktop;
        }
        &.right {
            right: - $sidebox-width-desktop;
        }
    }
}

.sidebox--content {
    position: relative;
    width: 100%;
    padding: 60px 20px;

    @include lg() {
        padding: 100px 80px;
    }
}

.sidebox--close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    
    display: flex;
    margin-top: 16px;
    margin-right: 16px;
    cursor: pointer;

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