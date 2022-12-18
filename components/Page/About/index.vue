<template>
    <div class="page-about">
        <BlockLandingPoster title="O projektu" @click="$scrollTo('#AboutAnchor')">
            <img src="~/assets/images/Ejpovice_0004.jpg" alt="Ejpovice. Klidná lokalita v sousedství Plzně." />
        </BlockLandingPoster>

        <div class="mt-sm mb-gt" id="AboutAnchor">
            <BlockContainer>
                <BlockCardNew 
                    class="mb-gt"
                    flip
                    title="12 domů, 4 pozemky"
                    text="Projekt Domy Ejpovice tvoří celkem 12 pasivních domů rozdělených na 8 bungalovů a 6 moderních kostek s vlastní zahradou, terasou a parkovacím stáním. Architektonicky výrazná novostavba bude citlivě vybudována k již dříve realizované etapě a díky své poloze v neprůjezdné ulici nabídne klidné bydlení, ideální nejen pro rodiny s dětmi."
                    :image="require('~/assets/images/DJI_0137_v25.jpg')"
                />

                <BlockCardNew 
                    class="mb-gt"
                    title="Mimořádně úsporné pasivní domy"
                    text="Domy v projektu jsou navrženy s důrazem na zdravé a zároveň energeticky soběstačné bydlení. Energetickým úsporám a nízkým nákladům na provoz našich pasivních domů napomáhají okna s izolačními trojskly, nadstandardní zateplení obvodových stěn i systém automatického větrání s rekuperací tepla i chlazením. O tepelnou pohodu se postará elektrické tepelné čerpadlo s rekuperací doplněné o ohřev vody. "
                    :image="require('~/assets/images/DJI_0137_v25.jpg')"
                >
                    <template #button>
                        <NuxtLink :to="{ name: 'passive' }">
                            <ButtonRounded large iconPosition="right" class="button--green">
                                více o pasivních domech
                                <template #icon><IconArrow color="#fff" /></template>
                            </ButtonRounded>
                        </NuxtLink>
                    </template>
                </BlockCardNew>

                <BlockCardNew 
                    class="mb-gt"
                    flip
                    title="Vysoký standard výstavby"
                    text="Při stavbě a vybavení našich domů dbáme na nejvyšší kvalitu zpracování i životnost materiálů. Domy budou navíc doplněny o kryté parkovací stání a uzavřený sklad pro zahradnické potřeby a střeženy moderním zabezpečovacím systémem."
                    :image="require('~/assets/images/DJI_0137_v25.jpg')"
                >
                    <template #button>
                        <NuxtLink :to="{ name: 'standards' }">
                            <ButtonRounded large iconPosition="right" class="button--green">
                                více o standardech domů
                                <template #icon><IconArrow color="#fff" /></template>
                            </ButtonRounded>
                        </NuxtLink>
                    </template>
                </BlockCardNew>

                <PageAboutSchedule />

                <BlockCardNew 
                    class="my-gt"
                    flip
                    title="Klidná lokalita v sousedství Plzně"
                    text="Řadu benefitů nabízí také umístění projektu v klidné části Ejpovic u Plzně. Poznejte její bezkonkurenční dostupnost i krásu blízkého okolí."
                    :image="require('~/assets/images/DJI_0137_v25.jpg')"
                >
                    <template #button>
                        <NuxtLink :to="{ name: 'locality' }">
                            <ButtonRounded large iconPosition="right" class="button--green">
                                více o lokalitě
                                <template #icon><IconArrow color="#fff" /></template>
                            </ButtonRounded>
                        </NuxtLink>
                    </template>
                </BlockCardNew>
            </BlockContainer>
        </div>

        <BlockFinancing />
        <BlockFreeSpaces />
    </div>
</template>

<script>
export default {
    head: () => ({
        title: 'O projektu | Ejpovice',
    })
}
</script>

<style lang="scss">
.page-about .block-container {
    @include page-padding();
}
</style>
