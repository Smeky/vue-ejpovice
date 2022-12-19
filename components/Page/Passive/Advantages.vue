<template>
    <div class="passive-advantages">
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-1.svg" />
            <span class="text-lg-capital uppercase">Čerstvý vzduch po celý rok</span>
        </div>
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-2.svg" />
            <span class="text-lg-capital uppercase">Nízká hladina škodlivého CO2</span>
        </div>
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-3.svg" />
            <span class="text-lg-capital uppercase">Optimální vlhkost 35-55 %</span>
        </div>
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-4.svg" />
            <span class="text-lg-capital uppercase">Vnitřní klima bez pylu a plísní</span>
        </div>
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-5.svg" />
            <span class="text-lg-capital uppercase">Stabilní vnitřní teplota po celý rok</span>
        </div>
        <div class="passive-advantages--item">
            <img src="~/assets/icons/passive-adv-6.svg" />
            <span class="text-lg-capital uppercase">Úspora na vytápění až 20 000 CZK</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.passive-advantages {
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 20px;

}

.passive-advantages--item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    outline: 1px solid $color-main-green;
    border-radius: 200px;

    width: 157px;
    height: 204px;
    padding: 40px;

    @include lg() {
        width: 200px;
        height: 260px;
        padding: 20px;
    }

    > img {
        margin-bottom: 20px;
        width: 30px;
        height: 30px;

        @include lg() {
            width: 50px;
            height: 50px;
        }
    }

    > span {
        text-align: center;
    }
}
</style>
