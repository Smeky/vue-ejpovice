<template>
    <div class="locality-page">
        <BlockLandingPoster title="Lokalita" @click="$scrollTo('#LocalityAnchor')">
            <img src="~/assets/images/locality-poster.jpg" alt="Ejpovice. Klidná lokalita v sousedství Plzně." />
        </BlockLandingPoster>

        <div class="mt-md"></div>
        <BlockContainer id="LocalityAnchor">
            <BlockCard flip class="mb-gt" :image="require('~/assets/images/DJI_0137_v25.jpg')">
                <div class="flex flex-col">
                    <h2 class="text-lg-title color-main-green ">
                        <span>Klidné bydlení</span><br>
                        <span>v sousedství</span><br>
                        <span>města Plzně</span><br>
                    </h2>

                    <p class="text-lg-paragraph my-8 lg:my-16">
                        Obec Ejpovice se nachází v okrese Rokycany v Plzeňském kraji, na levém břehu řeky Klabavy zhruba šest kilometrů západně od Rokycan a deset kilometrů východně od Plzně.
                    </p>
                </div>
            </BlockCard>

            <BlockCard :image="require('~/assets/images/lokalita04.jpg')">
                <div class="flex flex-col">
                    <h2 class="text-lg-title color-main-green">
                        <span>Klidné bydlení</span><br>
                        <span>v sousedství</span><br>
                        <span>města Plzně</span><br>
                    </h2>

                    <p class="text-lg-paragraph my-8 lg:my-16">
                        Ve východní části Ejpovic, v blízkosti Ejpovického jezera, se nachází malebné území, které vytváří oázu klidného bydlení navozující harmonickou a přátelskou atmosféru doplněnou o bohatou infrastrukturu této lokality.
                    </p>
                </div>
            </BlockCard>

            <div class="flex flex-col lg:flex-row justify-between mt-gt mx-5 lg:mx-32">
                <h3 class="text-md-title mb-10 lg:mb-0">Lokalita na mapě</h3>
                <div class="flex flex-col lg:items-end">
                    <span class="text-md-capital tracking-wider uppercase">adresa</span>
                    <a class="text-sm-paragraph underline" href="https://goo.gl/maps/2Cr34UyB6J76gqPb7" target="_blank">
                        Polní, 337 01 Ejpovice
                    </a>
                </div>
            </div>
        </BlockContainer>

        <PlaceholderImage width="1680" height="840" class="mt-sm w-full object-fit" />

        <BlockContainer>
            <PageLocalityBars class="my-md mx-5 lg:mx-32" />
        </BlockContainer>

        <BlockFreeSpaces/>
    </div>
</template>

<script>
export default {
    head: () => ({
        title: 'Lokalita | Ejpovice',
    })
}
</script>

<style lang="scss">

</style>
