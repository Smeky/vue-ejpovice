<template>
    <div class="block-financing poster-height">
        <BlockContainer>
            <div class="block-financing--logo">
                <img src="~/assets/images/logo_BC_white.png" alt="Broker Consulting" />
            </div>

            <div>
                <div class="block-financing--content mx-32">
                    <h3 class="text-md-title mb-16">Výhodné financování<br>od specialistů</h3>
                    <p class="text-md-paragraph mb-16">Rádi Vám pomůžeme s nastavením výhodného financování vašeho nového bydlení či investičního nákupu. Díky bohatým zkušenostem a pevné vyjednávací pozici vám vyjednáme ty nejlepší podmínky napříč celým bankovním sektorem.</p>

                    <NuxtLink :to="{ name: 'financing' }">
                        <ButtonRounded large iconPosition="right" class="button--white">
                            více o financování
                            <template #icon><IconArrow color="#333" /></template>
                        </ButtonRounded>
                    </NuxtLink>
                </div>
            </div>
        </BlockContainer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.block-financing {
    background-color: $color-dark-green;
    color: $color-white;
    
    @include lg() {
        background-image: url('~/assets/images/block_financing_bg.svg');
        background-repeat: no-repeat;
    }

    > .block-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;

        > * {
            flex: 1;
        }
    }
}

.block-financing--logo {
    display: flex;
    justify-content: center;
    margin: auto;

    @include lg() {
        > img {
            width: 240px;
            height: 90px;
        }
    }
}

.block-financing--content {
    max-width: 600px;
}
</style>
