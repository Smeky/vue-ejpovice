<template>
    <div class="passive-comparison">
        <div v-for="(item, index) in items" :key="`pass-comp-${index}`" class="passive-comparison--item">
            <div>
                <h3 class="text-sm-title mb-10">{{ item.title }}</h3>
                <p class="text-md-capital uppercase mb-5">charakteristika</p>
                <p class="text-md-paragraph">{{ item.description }}</p>
            </div>
            <div>
                <p class="text-md-capital uppercase mb-5">Potřeba tepla na vytápění</p>
                <h3 class="text-sm-title">{{ item.energy }}</h3>
                <p class="text-md-capital uppercase">[kWh/(m2a)]</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'Domy běžné v 70 - 80 letech', energy: 'Nad 200', description: 'Zastaralá otopná soustava, zdroj tepla je velkým zdrojem emisí; větrá se pouhým otevřením oken, nezateplené, špatně izolující konstrukce, přetápí se' },
            { title: 'Současná novostavba', energy: '80 - 140', description: 'Klasické vytápění pomocí plynového kotle o vysokém výkonu, větrání otevřením okna, konstrukce na úrovni požadavků normy' },
            { title: 'Nízkoenergetický dům', energy: 'Méně než 50', description: 'Otopná soustava o nižším výkonu, využití obnovitelných zdrojů, dobře zateplené konstrukce, řízené větrání' },
            { title: 'Pasivní dům', energy: 'Méně než 15', description: 'Řízené větrání s rekuperací tepla, vynikající parametry tepelné izolace, velmi těsné konstrukce' },
        ]
    })
}
</script>

<style lang="scss">
.passive-comparison {
    display: flex;
    flex-direction: row;
    text-align: center;

    overflow: visible;
    width: fit-content;

    @include lg() {
        margin-left: auto;
        margin-right: auto;
    }
}

.passive-comparison--item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: $color-soft-divider;

    padding: 40px;
    width: 265px;
    height: 481px;

    @include lg() {
        width: 350px;
        height: 504px;
    }

    h3 {
        margin-left: 40px;
        margin-right: 40px;
    }

    &:nth-of-type(2) {
        background-color: $color-medium-divider;
    }
    &:nth-of-type(4) {
        background-color: $color-main-green;
        padding: 60px;
        margin-top: -20px;

        h3 {
            color: $color-white;
            margin-left: 60px;
            margin-right: 60px;
        }

        width: 305px;
        height: 521px;

        @include lg() {
            width: 390px;
            height: 544px;
        }
    }
}
</style>
