<template>
    <div class="button-gallery" 
        @click="$emit('click')"
        :class="{
            'button-gallery--outline': outline
        }"
    >
        <!-- Icon -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        outline: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.button-gallery {
    @include button-base();

    position: relative;

    width: 60px;
    height: 60px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    // Background & hover effect
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-color: transparent;
        z-index: -1;
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        &:before {
            background-color: $color-main-green;
            transform: scale(0.83);
        }
    }
}

.button-gallery--outline {
    &:before {
        outline: 1px solid $color-main-green;
    }
}

.button-gallery.button--blue {
    &.button-gallery--outline:before {
        outline-color: rgba($color-main-web-blue, 0.25);
    }

    &:hover {
        > svg {
            filter: brightness(0) invert(1);
        }
        
        &:before {
            background-color: $color-main-web-blue;
        }
    }
}
</style>
