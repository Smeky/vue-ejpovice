<template>
    <div class="toggle-button">
        <div v-for="item in items"
            :key="`toggle-button-${item}`"
            class="toggle-button--item"
            :class="{ 'toggle-button--item--selected': item === selected }"
            @click="$emit('click', item)"
        >
            <span class="text-ptable-value">{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        items: {
            type: Array,
            default: () => []
        },
        selected: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.toggle-button {
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.toggle-button--item {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    display: flex;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    border: 1px solid rgba($color-main-text, 0.2);
    transition: 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
        border: 1px solid $color-main-text;
    }

    &:first-child {
        border-start-start-radius: 20px;
        border-end-start-radius: 20px;
    }
    &:last-child {
        border-start-end-radius: 20px;
        border-end-end-radius: 20px;
    }
    
    > span {
        margin-top: auto;
        margin-bottom: auto;
    }

    &--selected {
        background-color: $color-main-web-blue;
        color: $color-white;
    }
}
</style>
