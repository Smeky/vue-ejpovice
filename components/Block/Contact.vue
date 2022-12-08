<template>
    <div class="block-contact text-center">
        <div class="flex flex-col justify-center items-center mx-5 my-24 lg:mx-40 lg:my-32">
            <h2 class="text-lg-title">Sjednejte si schůzku</h2>
            
            <p class="text-md-paragraph my-16">
                Kontaktujte naši zákaznickou linku. Naši zkušení makléři vám poskytnou podrobné informace o nemovitosti a zároveň jsou připraveni pomoci i s nastavením výhodného financování vašeho nového bydlení.
            </p>

            <template v-if="!$store.state.isMobile">
                <img src="~/assets/images/logo_OK.svg" />
                <span class="text-tn-paragraph mt-4">Výhradní prodejce: Broker Consulting, a. s.</span>
            </template>
        </div>
        <div class="flex flex-col justify-center items-center mx-5 mb-24 lg:mx-40 lg:my-32">
            <span class="text-md-capital mb-3">zákaznická linka</span>
            
            <a class="text-lg-title whitespace-nowrap underline decoration-2 mb-3" href="tel:+420800100164">
                +420 800 100 164
            </a>
            
            <span class="text-tn-paragraph mb-sm">Provoz linky: Nonstop 24/7</span>

            <ButtonLeaf>
                <span>napište nám</span>
            </ButtonLeaf>

            <template v-if="$store.state.isMobile">
                <img class="mt-10" src="~/assets/images/logo_OK.svg" />
                <span class="text-tn-paragraph mt-4">Výhradní prodejce: Broker Consulting, a. s.</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.block-contact {
    display: flex;
    flex-direction: column;
    background-color: $color-main-green;

    @include lg() {
        flex-direction: row;
    }

    > div {
        flex: 1;
    }
}
</style>
