<template>
    <div class="block-landing-poster poster-height">
        <div class="block-landing-poster--background">
            <slot></slot>
        </div>
        
        <div class="block-landing-poster--content">
            <h1 class="text-cta-title">
                {{ title }}
            </h1>

            <ButtonIcon @click.native="$emit('click')">
                <IconArrow class="rotate-90 scale-75" color="#333" />
            </ButtonIcon>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.block-landing-poster {
    position: relative;
    color: $color-white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: linear-gradient(to top, $color-gradient-green, transparent 50%);
}

.block-landing-poster--background {
    > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
    }
}

.block-landing-poster--content {
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 110px;

    @include lg() {
        margin-bottom: 130px;
    }
}
</style>
