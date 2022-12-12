<template>
    <div class="block-customer-support">
        <span class="text-md-capital mb-3">zákaznická linka</span>
        
        <a class="text-lg-title whitespace-nowrap underline decoration-2 mb-3" href="tel:+420800100164">
            +420 800 100 164
        </a>
        
        <span class="text-tn-paragraph">Provoz linky: Nonstop 24/7</span>

        <ButtonLeaf v-if="withButton" dark class="mt-sm">
            napište nám
        </ButtonLeaf>

        <template v-if="withLogo">
            <img class="mt-10" src="~/assets/images/logo_OK.svg" />
            <span class="text-tn-paragraph mt-4">Výhradní prodejce: Broker Consulting, a. s.</span>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        'withButton': {
            type: Boolean,
            default: false
        },
        'withLogo': {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.block-customer-support {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-main-green;
}
</style>
