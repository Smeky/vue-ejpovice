<template>
    <div class="button-leaf" :class="{ 'button-leaf--dark': dark }">
        <slot v-if="isSlotWrapped"></slot>

        <span v-else class="font-medium uppercase text-gt-button">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        // Check if button's text is wrapped in an element (e.g. <span>)
        isSlotWrapped() {
            return this.$slots.default && !!this.$slots.default[0].tag
        }
    }
}
</script>

<style lang="scss">
.button-leaf {
    @include button-base();

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $color-cta;
    color: $color-black;
    border-radius: 70px 0;
    letter-spacing: 5px;
    transition: all 0.3s ease-in-out;

    width: 300px;
    height: 67px;

    @include lg() {
        width: 315px;
        height: 70px;

        &:hover {
            width: 335px;
            transform: translateX(10px);
        }
    }
}

.button-leaf--dark {
    background-color: $color-main-text;
    color: $color-white;
}
</style>
