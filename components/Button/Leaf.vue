<template>
    <div class="button-leaf" :class="{ 'button-leaf--dark': dark }">
        <ButtonContent class="font-medium uppercase text-gt-button">
            <slot></slot>
        </ButtonContent>
    </div>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.button-leaf {
    @include button-base();

    display: flex;
    color: $color-black;
    letter-spacing: 5px;
    
    position: relative;
    width: 300px;
    height: 67px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 70px 0;
        background-color: $color-cta;
        transition: all 0.3s ease-in-out;
    }    

    @include lg() {
        width: 315px;
        height: 70px;

        &:hover {
            &:before {
                transform: scaleX(1.1);
            }
        }
    }
}

.button-leaf--dark {
    color: $color-white;

    &:before {
        background-color: $color-main-text;
    }
}
</style>
