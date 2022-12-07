<template>
    <div>
        <PricesHouseSelect />

        <div class="flex flex-col">
            <div class="flex flex-col p-10">
                <h2>Ceník nemovitostí</h2>

                <div>
                    <div>Zobrazit jen volné</div>
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
    mounted() {
        window.scrollTo(0, document.body.scrollHeight);
    }
}
</script>

<style lang="scss">

</style>
