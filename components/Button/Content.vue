<template>
    <div class="button--content">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.button--content {
    display: inline-flex;
    align-items: center;
    width: fit-content;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
