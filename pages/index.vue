<template>
    <div class="home flex overflow-x-hidden">
        <!-- Slidebox-anchor moves the navbar as well as the block bellow when sidebox gets opened -->
        <Navbar class="sidebox-anchor" />
        <Menu />

        <div class="sidebox-anchor">
            <Homescreen />

            <div class="my-gt mx-5 flex-center">
                <div class="flex-center flex-col lg:w-[800px] text-center">
                    <h2 class="text-lg-title color-main-green lg:mx-24">
                        Prodej 30 pasivních domů a 4 pozemků v těsné blízkosti Plzně i přírody.
                    </h2>

                    <p class="text-md-paragraph my-sm">
                        Projekt Domy Ejpovice nabízí k prodeji elegantní pasivní domy s prostornou zahradou, terasou i vlastním parkováním, situovaných v atraktivní lokalitě Plzeň - Ejpovice. Domy ztělesňují nový koncept moderního bydlení, v jehož rámci je kladen důraz na vytvoření komfortního domova v klidném přírodním prostředí a také energetickou soběstačnost. Projekt je výsledkem již úspěšně dokončené I. etapy.
                    </p>
                    
                    <div class="button--rounded button--main-green text-lg-button">
                        <span class="uppercase">více o projektu</span>
                        <IconArrow color="#fff" class="ml-3" />
                    </div>
                </div>
            </div>

            <Poster :image="require('~/assets/images/Ejpovice_poster.png')">
                <div class="absolute bottom-0 left-0 lg:ml-32 lg:mb-32 ml-5 mb-16">
                    <h2 class="text-lg-title color-white lg:w-[600px] lg:mb-16 mb-8">
                        Ejpovice. Klidná lokalita v sousedství Plzně.
                    </h2>
                    
                    <div class="button--rounded button--white text-lg-button">
                        <span class="uppercase">více o lokalitě</span>
                        <IconArrow color="#333" class="ml-3" />
                    </div>
                </div>
            </Poster>

            <div class="my-lg flex-center">
                <div class="flex-center flex-col lg:w-[800px]">
                    <h2 class="text-lg-title text-center mb-md lg:mx-24">
                        Energeticky soběstačné a úsporné bydlení
                    </h2>

                    <FlagEnergySavings />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage'
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
</style>
