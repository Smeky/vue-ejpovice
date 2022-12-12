<template>
    <div class="free-spaces poster-height">
        <div class="free-spaces--image">
            <img class="" src="~/assets/images/Free_spaces.png" />
        </div>

        <div class="free-spaces--content">
            <h2 class="text-cta-title color-white">26 volných</h2>
            
            <NuxtLink to="prices">
                <ButtonLeaf>vyberte si</ButtonLeaf>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.free-spaces {
    position: relative;

    &:after {
        content: '';
        pointer-events: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to top, rgba($color-gradient-green, 0.9) 0, transparent 100%);
    }
}

.free-spaces--image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color-gradient-green;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: cover;
    }
}

.free-spaces--content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    top: 50%;
    @include lg() {
        top: 80%;
    }
}
</style>
