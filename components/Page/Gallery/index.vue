<template>
    <div class="gallery-page">
        <div class="gallery-page--landing" :class="{ 'poster-height': !$store.state.isMobile }">
            <img v-if="!$store.state.isMobile" src="~/assets/images/Ejpovice_0006.jpg" />

            <PageGalleryControls />
        </div>

        <div class="mb-gt"></div>
        <BlockContainer>
            <div class="flex justify-between">
                <span class="text-md-title">Aktuálně z výstavby</span>
                <div v-if="!$store.state.isMobile" class="flex">
                    <ButtonGallery outline class="button--blue mr-2">
                        <IconArrow class="rotate-180" color="#12465C" />
                    </ButtonGallery>

                    <ButtonGallery outline class="button--blue ">
                        <IconArrow color="#12465C" />
                    </ButtonGallery>
                </div>
            </div>

            <div class="flex gap-x-5 mt-sm">
                <PageGalleryCard title="Červenec 2022">
                    <PlaceholderImage width="375" height="475" />
                </PageGalleryCard>
                <PageGalleryCard title="Červenec 2022">
                    <PlaceholderImage width="375" height="475" />
                </PageGalleryCard>
                <PageGalleryCard title="Červenec 2022">
                    <PlaceholderImage width="375" height="475" />
                </PageGalleryCard>
            </div>
        </BlockContainer>
        <div class="mt-gt"></div>

        <BlockFreeSpaces />
    </div>
</template>

<script>
export default {
    head: () => ({
        title: 'Galerie | Ejpovice',
    })
}
</script>

<style lang="scss">
.gallery-page--landing {
    position: relative;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.gallery-page .block-container {
    padding: 0 20px;

    @include lg() {
        padding: 0 120px;
    }
}

</style>
