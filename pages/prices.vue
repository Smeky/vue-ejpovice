<template>
    <div>
        <PricesHouseSelect />

        <div class="flex flex-col">
            <div class="flex flex-col p-10 px-32">
                <h2 class="text-md-title text-center mb-12">Ceník nemovitostí</h2>

                <div class="flex justify-between">
                    <div class="flex">
                        <Toggle :value="filterFree" @click="filterFree = !filterFree" />
                        <span class="ml-3">Zobrazit jen volné</span>
                    </div>
                    <div>Všechny / Jen Domy / Jen pozemky</div>
                    <div>Vybrat z mapy projektu</div>
                </div>
            </div>

            <PricesTable class="px-32 py-20" />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        filterFree: false,
    }),
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
