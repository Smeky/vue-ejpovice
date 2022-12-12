<template>
    <div class="button-rounded" 
        :class="{
            'button-rounded--large': large,
            'button-rounded--outline': outline
        }"
        @click="$emit('click')"
    >
        
        <ButtonContent class="uppercase font-medium" :class="{
                'text-md-button': !large,
                'text-lg-button': large,
            }"
        >
            <div v-if="iconPosition === 'left'" class="mr-2">
                <slot name="icon"></slot>
            </div>

            <slot></slot>
            
            <div v-if="iconPosition === 'right'" class="ml-2">
                <slot name="icon"></slot>
            </div>
        </ButtonContent>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        large: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    }
}
</script>

<style lang="scss">
$button-rounded-height: 40px;
$button-rounded-height-large: 50px;

.button-rounded .button--content {
    height: calc($button-rounded-height / 2);
}
.button-rounded.button-rounded--large .button--content {
    height: calc($button-rounded-height-large / 2);
}

.button-rounded {
    @include button-base();
    
    position: relative;
    display: inline-flex;
    height: $button-rounded-height;
    padding: 16px 25px;
    border-radius: 50px;

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
            transform: scaleX(1.07);
        }
    }

    &.button--white {
        color: $color-main-text;
    
        &:before {
            background-color: $color-white;
        }
    }

    &.button--green {
        color: $color-white;
    
        &:before {    
            background-color: $color-main-green;
        }
    }

    &.button--blue {
        color: $color-white;
    
        &:before {    
            background-color: $color-main-web-blue;
        }
    }
}

.button-rounded--large {
    height: $button-rounded-height-large;
}

.button-rounded--outline {
    padding: 7px 25px;

    &:before {
        outline: 1px solid rgba($color-main-text, 0.2);
    }

    &:hover {
        &:before {
            transform: scaleX(1); // negate the original hover effect
            outline: 1px solid $color-main-text;
        }
    }
}
</style>
