<template>
    <div class="flag-energy-savings">
        <span class="text-lg-capital uppercase mb-5 lg:mb-0">energetická třída domů</span>

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
$flag-arrow-width-mobile: 34px;
$flag-arrow-width-desktop: 39px;

.flag-energy-savings {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include lg() {
        flex-direction: row;
    }
}

.flag-enery-savings--flag {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 13px 30px;
    color: $color-white;
    background: linear-gradient(to right, $color-main-web-blue, $color-cta);

    margin-right: $flag-arrow-width-mobile; 

    @include lg() {
        margin-right: $flag-arrow-width-desktop;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 0;
        height: 0;

        border-top: 37px solid transparent;
        border-left: $flag-arrow-width-mobile solid $color-cta;
        border-bottom: 37px solid transparent;

        @include lg() {
            border-top: 43px solid transparent;
            border-left: $flag-arrow-width-desktop solid $color-cta;
            border-bottom: 43px solid transparent;
        }
    }
}
</style>