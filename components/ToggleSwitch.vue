<template>
    <div class="toggle-switch" :class="{ 'toggle-switch--active': value }" @click="$emit('click')">
        
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.toggle-switch {
    position: relative;
    width: 48px;
    height: 26px;
    border: 2px solid $color-main-web-blue;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 16px;
        height: 16px;
        background-color: $color-main-web-blue;
        border-radius: 50%;
        transition: 0.2s ease-in-out;
    }
}

.toggle-switch--active {
    background-color: $color-main-web-blue;

    &:after {
        left: 26px;
        background-color: $color-white;
    }
}
</style>
