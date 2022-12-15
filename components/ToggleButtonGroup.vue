<template>
    <div>
        <div class="toggle-button-group gap-3">
            <div v-for="item in items" 
                :key="`tbutton-${item.id}`" 
                class="toggle-button-group--item"
                :class="{ 'toggle-button-group--item--active': item.id === selected }"
            >
                <ButtonRounded no-hover class="button--blue" @click="$emit('click', item.id)">
                    {{ item.label }}
                </ButtonRounded>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        items: {
            type: Array,
            required: true,
        },
        selected: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss">
.toggle-button-group {
    display: flex;
    flex-direction: row;
}

.toggle-button-group--item {
    .button-rounded {
        transition: color 0.2s ease-in-out;

        &:before {
            transition: all 0.2s ease-in-out;
        }
    }

    &:not(&--active) {
        .button-rounded {
            color: rgba($color-main-web-blue, 0.7);
            outline: 2px solid rgba($color-main-web-blue, 0.5);
            transition: all 0.2s ease-in-out;

            &:before {
                background-color: transparent;
            }

            &:hover {
                color: $color-main-web-blue;
                outline-color: $color-main-web-blue;
            }
        }
    }
}
</style>
