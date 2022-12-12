<template>
    <button type="submit" class="contact-form-submit">
        <span class="uppercase text-lg-button">odeslat formulář</span>
    </button>
</template>

<style lang="scss">
.contact-form-submit {
    @include button-base();
    
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $color-white;

    width: 220px;
    height: 68px;

    @include lg() {
        width: 232px;
        height: 69px;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color-main-text;
        z-index: -1;
        transition: all 0.2s ease-in-out;
    }

    @include lg() {
        &:hover {
            &:before {
                transform: scale(0.9);
            }
        }
    }
}
</style>
