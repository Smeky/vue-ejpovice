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
                    
                    <div class="button button--main-green text-lg-button uppercase">
                        <span>více o projektu</span>
                        <img class="ml-3" src="~/assets/icons/arrow-right.svg" />
                    </div>
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
