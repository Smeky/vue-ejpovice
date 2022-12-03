<template>
    <div class="flag-energy-savings">
        <span class="text-lg-capital uppercase">energetická třída domů</span>

        <div class="flag-enery-savings--flag ml-10">
            <span class="text-lg-title mr-5">A</span>
            <span class="text-lg-capital uppercase">mimořádně úsporná</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.flag-energy-savings {
    display: flex;
    align-items: center;
}

.flag-enery-savings--flag {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 13px 30px;
    color: $color-white;

    @include md() {
        flex-direction: row;
    }

    background: linear-gradient(to right, $color-main-web-blue, $color-cta);

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 0;

        @include md() {
            border-top: 43px solid transparent;
            border-left: 39px solid $color-cta;
            border-bottom: 43px solid transparent;
        }

        border-top: 37px solid transparent;
        border-left: 34px solid $color-cta;
        border-bottom: 37px solid transparent;
    }
}
</style>