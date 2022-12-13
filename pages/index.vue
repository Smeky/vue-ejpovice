<template>
    <div class="home flex overflow-x-hidden">
        <!-- Slidebox-anchor moves the navbar as well as the block bellow when sidebox gets opened -->
        <div>
            <Homescreen />

            <div id="AboutProject" class="my-gt mx-5 flex-center">
                <div class="flex-center flex-col lg:w-[800px] text-center">
                    <h2 class="text-lg-title color-main-green lg:mx-24">
                        Prodej 30 pasivních domů a 4 pozemků v těsné blízkosti Plzně i přírody.
                    </h2>

                    <p class="text-md-paragraph my-sm">
                        Projekt Domy Ejpovice nabízí k prodeji elegantní pasivní domy s prostornou zahradou, terasou i vlastním parkováním, situovaných v atraktivní lokalitě Plzeň - Ejpovice. Domy ztělesňují nový koncept moderního bydlení, v jehož rámci je kladen důraz na vytvoření komfortního domova v klidném přírodním prostředí a také energetickou soběstačnost. Projekt je výsledkem již úspěšně dokončené I. etapy.
                    </p>
                    
                    <NuxtLink to="about_project">
                        <ButtonRounded large iconPosition="right" class="button--green">
                            více o projektu
                            <template v-slot:icon>
                                <IconArrow color="#fff" />
                            </template>
                        </ButtonRounded>
                    </NuxtLink>

                    <div class="button--rounded button--main-green text-lg-button">
                        <IconArrow color="#fff" class="ml-3" />
                    </div>
                </div>
            </div>

            <Poster class="flex items-end" :image="require('~/assets/images/Ejpovice_poster.png')">
                <BlockContainer>
                    <div class="lg:mb-32 mb-16">
                        <h2 class="text-lg-title color-white lg:w-[600px] lg:mb-16 mb-8">
                            Ejpovice. Klidná lokalita v sousedství Plzně.
                        </h2>
                        
                        <NuxtLink to="locality">
                            <ButtonRounded large iconPosition="right" class="button--white">
                                <span>více o lokalitě</span>
                                <template v-slot:icon>
                                    <IconArrow color="#333" />
                                </template>
                            </ButtonRounded>
                        </NuxtLink>
                    </div>
                </BlockContainer>
            </Poster>

            <div class="my-lg flex-center">
                <div class="flex-center flex-col lg:w-[800px]">
                    <h2 class="text-lg-title text-center mb-md lg:mx-24">
                        Energeticky soběstačné a úsporné bydlení
                    </h2>

                    <FlagEnergySavings />
                </div>
            </div>

            <BlockHouseGrades class="flex items-center" />

            <BlockContainer>
                <BlockCard class="my-gt" :image="require('~/assets/images/18775.png')">
                    <div class="flex flex-col">
                        <h2 class="text-lg-title color-main-green">
                            Standardy ve znamení designu a kvality.
                        </h2>

                        <p class="text-lg-paragraph my-8 lg:my-16">
                            Prohlédněte si široký seznam vybavení, materiálů a technologií, které jsou součástí standardu každého našeho domu.
                        </p>
                        
                        <div>
                            <NuxtLink to="standards">
                                <ButtonRounded large iconPosition="right" class="button--green">
                                    více o standardech
                                    <template v-slot:icon>
                                        <IconArrow color="#fff" />
                                    </template>
                                </ButtonRounded>
                            </NuxtLink>
                        </div>
                    </div>
                </BlockCard>
            </BlockContainer>

            <BlockFreeSpaces />
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    layout: 'default'
}
</script>

<style lang="scss">
.home {
    margin-left: 0;
    transition: all 0.4s ease-in-out;

    &::after {
        content: '';
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.3s ease-in-out;
        background-color: rgba($color-darken-web-blue, 0);
    }

    @include lg() {
        &.menu-open {
            margin-left: 640px;

            // Add overlay effect
            &::after {
                background-color: rgba($color-darken-web-blue, 0.5);
            }
        }
    }
}

.home .block-container {
    padding-left: 20px;
    padding-right: 20px;

    @include lg() {
        padding-left: 120px;
        padding-right: 120px;
    }
}
</style>
