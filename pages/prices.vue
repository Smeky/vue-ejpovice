<template>
    <div class="prices-page">
        <PricesHouseSelect />

        <div class="flex flex-col">
            <div class="flex flex-col pt-20 pb-10 px-32">
                <h2 class="text-md-title text-center mb-12">Ceník nemovitostí</h2>

                <div class="prices-page--table-controls">
                    <div class="flex">
                        <ToggleSwitch :value="filterFree" @click="filterFree = !filterFree" />
                        <span class="ml-3">Zobrazit jen volné</span>
                    </div>
                    
                    <ToggleButton 
                        :items="filterItems" 
                        :selected="selectedFilter" 
                        @click="handleFilterClick" />

                    <div class="button--rounded button--white flex whitespace-nowrap">
                        <img class="mr-3" width="20" height="20" src="~/assets/icons/cube.svg" />
                        <span class="text-md-button">Vybrat z mapy projektu</span>    
                    </div>
                </div>
            </div>

            <div class="prices-page--separator"></div>

            <PricesTable class="px-32 py-20" />

            <BlockContact />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        filterFree: false,
        filterItems: ['Všechny', 'Jen Domy', 'Jen pozemky'],
        selectedFilter: 'Všechny'
    }),
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    methods: {
        handleFilterClick(item) {
            this.selectedFilter = item
        }
    }
}
</script>

<style lang="scss">
.prices-page {

}

.prices-page--separator {
    // content: '';
    // display: block;
    width: 100%;
    height: 1px;
    // position: absolute;
    // bottom: -20%;
    // left: 0;
    background-color: rgba($color-main-text, 0.2);
}

.prices-page--table-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
