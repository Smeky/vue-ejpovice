<template>
    <div class="page-passive">
        <BlockLandingPoster title="Pasivní domy" class="mb-md" @click="$scrollTo('#PassiveAnchor')">
            <img src="~/assets/images/Ejpovice_0005.jpg" />
        </BlockLandingPoster>

        <BlockContainer id="PassiveAnchor">
            <BlockCardNew
                class="mb-gt"
                title="Mimořádně úsporné domy od Clima House"
                text="Zdravé bydlení v pasivním nadstandardu pro nás není jen prázdný pojem. Je základem naší filozofie, za kterou si pevně stojíme. Nestavíme jen domy. Vytváříme lidem skutečné domovy. A věříme jim natolik, že v nich bydlí nejen naši klienti, ale i my sami. V Ejpovicích jste našimi sousedy!"
                :image="require('~/assets/images/Ejpovice_0005.jpg')"
            />

            <BlockCardNew
                class="mb-gt"
                flip
                title="Proč našim domům věříme? Prozkoumejte jejich výhody."
                text="Naší specializací jsou pasivní domy, které ve spojení se špičkovými technologiemi, nadstandardním materiály a výjimečnou kvalitou provedení stavby přináší nespočet výhod pro své majitele."
            >
                <template #image>
                    <div class="grid place-items-center">
                        <GradesRectangle/>
                    </div>
                </template>
            </BlockCardNew>

            <div class="mb-gt">
                <h3 class="text-md-title text-center mb-md">Srovnání vlastností dnešních domů</h3>
                <PagePassiveComparison />
            </div>

            <div class="mb-lg">
                <h3 class="text-lg-title text-center mb-md">Řízené větrání s rekuperací tepla</h3>
                <PagePassiveVentilation />
            </div>

            <div class="mb-gt">
                <h3 class="text-md-title text-center mb-sm">Hlavní výhody</h3>
                <PagePassiveAdvantages />
            </div>

            <BlockCardNew
                class="mb-gt"
                title="V našich domech se již bydlí. Přijďte se podívat."
                text="První etapa projektu Domy Ejpovice je již dokončena a noví majitelé již bydlí. Prohlédněte si fotogalerii dokončených domů a nebo si rovnou sjednejte osobní schůzku a přijďte se k nám podívat."
                :image="require('~/assets/images/Ejpovice_0005.jpg')"
            >
                <template #button>
                    <NuxtLink :to="{ name: 'gallery' }">
                        <ButtonRounded large iconPosition="right" class="button--green">
                            prohlédnout fotogalerii
                            <template #icon><IconArrow color="#fff" /></template>
                        </ButtonRounded>
                    </NuxtLink>
                </template>
            </BlockCardNew>
        </BlockContainer>

        <BlockContact light />
        <BlockFreeSpaces />
    </div>
</template>

<script>
export default {
    head: () => ({
        title: 'Pasivní domy | Ejpovice',
    })
}
</script>

<style lang="scss">
.page-passive .block-container {
    @include page-padding();
}
</style>
