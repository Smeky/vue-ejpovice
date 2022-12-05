<template>
    <div class="house-grades poster-height lg:px-28 py-16">
        <img class="house-grades--bg" src="~/assets/images/Ejpovice_0005.jpg" />

        <div class="mt-28 lg:mt-0">
            <h2 class="text-lg-title color-white lg:w-[600px] lg:mb-28 mb-16">
                Pasivní domy s řadou moderních technologií.
            </h2>
            
            <WithArrow class="button--rounded button--white button--grow-inplace text-lg-button" color="#333">
                <span class="uppercase">více o pasivních domech</span>
            </WithArrow>
        </div>

        <GradesRectangle class="mx-auto" />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.house-grades {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background: linear-gradient(to right, rgba($color-main-web-blue, 0.85), rgba($color-cta, 0.85));

    @include lg() {
        flex-direction: row;
        justify-content: space-between;
    }

    &--bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
}
</style>
