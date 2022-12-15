<template>
    <div class="house-grades poster-height">
        <img class="house-grades--bg" src="~/assets/images/Ejpovice_0005.jpg" />
        
        <BlockContainer class="py-8 lg:py-16">
            <div class="flex flex-col mt-28 lg:mt-0 max-w-[600px]">
                <h2 class="text-lg-title color-white lg:mb-28 mb-16">
                    Pasivní domy s řadou moderních technologií.
                </h2>
                
                <NuxtLink :to="{ name: 'passive' }">
                    <ButtonRounded large iconPosition="right" class="button--white z-[1]">
                        <span>více o pasivních domech</span>
                        <template v-slot:icon>
                            <IconArrow color="#333" />
                        </template>
                    </ButtonRounded>
                </NuxtLink>
            </div>

            <GradesRectangle class="mx-auto" />
        </BlockContainer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.house-grades {
    position: relative;
    background: linear-gradient(to right, rgba($color-main-web-blue, 0.85), rgba($color-cta, 0.85));

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

.house-grades .block-container {
    display: flex;
    flex-direction: column-reverse;

    @include lg() {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap-reverse;
        align-items: center;

        > div:first-child {
            flex: 1;
            padding-right: 20px;
        }
    }

}
</style>
