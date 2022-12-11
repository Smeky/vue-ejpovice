<template>
    <div class="prices-page">
        <PricesHouseSelect v-if="!$store.state.isMobile" />
        <img v-else src="~/assets/images/Ejpovice_0006_v25.png" class="object-cover w-full" />

        <div class="flex flex-col">
            <div class="flex flex-col mx-5 my-10 lg:pt-20 lg:pb-10 lg:px-32">
                <h2 class="text-md-title text-center mb-6 lg:mb-12">Ceník nemovitostí</h2>

                <div class="prices-page--table-controls">
                    <div class="flex" v-if="!$store.state.isMobile">
                        <ToggleSwitch :value="filterFree" @click="filterFree = !filterFree" />
                        <span class="text-sm-ui-desc leading-loose ml-3">Zobrazit jen volné</span>
                    </div>
                    
                    <ToggleButton 
                        :items="filterItems" 
                        :selected="selectedFilter" 
                        @click="handleFilterClick" />

                    <ButtonRounded outline class="button--white">
                        <template v-slot:icon>
                            <img width="20" height="20" src="~/assets/icons/cube.svg" />
                        </template>

                        Vybrat z mapy projektu
                    </ButtonRounded>
                </div>
            </div>

            <div class="prices-page--separator"></div>

            <PricesTableMobile v-if="$store.state.isMobile" :items="tableItems" @click="handleDetailClick" />
            <PricesTableDesktop v-else class="px-32 py-20" :items="tableItems" @click="handleDetailClick" />

            <BlockContact />
        </div>

        <PricesDetail :open="!!selectedDetail" :data="selectedDetail" @close="selectedDetail = null" />
    </div>
</template>

<script>
export default {
    data: () => ({
        filterFree: false,
        filterItems: ['Všechny', 'Jen Domy', 'Jen pozemky'],
        selectedFilter: 'Všechny',
        selectedDetail: null,
        tableItems: [
            { number: 'E1', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E2', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'sold' },
            { number: 'E3', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E4', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E5', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E6', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'reservation' },
            { number: 'E7', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E8', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E9', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'sold' },
            { number: 'E10', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'sold' },
            { number: 'E11', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
            { number: 'E12', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'reservation' },
            { number: 'E13', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'reservation' },
            { number: 'E14', offer_type: 'Pozemek', house_type: 'Bungalov + patro', disposition: '5+kk', use_area: '127', area: '500', price: 4990000, state: 'free' },
        ]
    }),
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    methods: {
        handleFilterClick(item) {
            this.selectedFilter = item
        },
        handleDetailClick(item) {
            this.selectedDetail = item
        }
    }
}
</script>

<style lang="scss">
.prices-page {

}

.prices-page--separator {
    @include lg() {
        width: 100%;
        height: 1px;
        background-color: rgba($color-main-text, 0.2);
    }
}

.prices-page--table-controls {
    display: flex;
    align-items: center;
    justify-content: center;

    @include lg() {
        justify-content: space-between;
    }

    // Todo: move this into a component
    .button--rounded {
        padding: 7px 25px;
        height: 40px;
        align-items: center;
        outline: 1px solid rgba($color-main-text, 0.2);

        &:hover {
            outline: 1px solid $color-main-text;
        }
    }
}
</style>
