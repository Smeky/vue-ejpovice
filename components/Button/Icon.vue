<template>
    <div class="button-icon">
        <!-- Icon -->
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.button-icon {
    @include button-base();

    position: relative;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    // Background & hover effect
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background-color: $color-white;
        z-index: -1;
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        &:before {
            transform: scale(1.15);
        }
    }
}
</style>
