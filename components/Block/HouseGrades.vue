<template>
    <div class="house-grades poster-height lg:px-28 py-16">
        <img class="house-grades--bg" src="~/assets/images/Ejpovice_0005.jpg" />

        <div class="mt-28 lg:mt-0">
            <h2 class="text-lg-title color-white lg:w-[600px] lg:mb-28 mb-16">
                Pasivní domy s řadou moderních technologií.
            </h2>
            
            <NuxtLink to="passive_houses">
                <ButtonRounded large iconPosition="right" class="button--white z-[1]">
                    <span>více o pasivních domech</span>
                    <template v-slot:icon>
                        <IconArrow color="#333" />
                    </template>
                </ButtonRounded>
            </NuxtLink>
        </div>

        <GradesRectangle @click="handleGradeClick" class="mx-auto" />
        <GradesSideboxes :open="openedSidebox" @close="openedSidebox = null" />
    </div>
</template>

<script>
export default {
    data: () => ({
        openedSidebox: null
    }),
    methods: {
        handleGradeClick(name) {
            this.openedSidebox = name
        }
    }
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
