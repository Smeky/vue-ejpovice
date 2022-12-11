<template>
    <SideBox :open="open" position="right">
        <div v-if="open" class="prices-detail">
            <h2>{{ data.offer_type }} {{ data.number }}</h2>
            <PricesStateFlag :state="data.state" />

            <img />

            <div class="prices-detail--table-emphasized">
                <div class="flex flex-col">
                    <span class="uppercase text-dtable-desc">dispozice</span>
                    <span class="text-sm-title">{{ data.disposition }}</span>
                </div>
                <div class="flex flex-col">
                    <span class="uppercase text-dtable-desc">pozemek</span>
                    <span class="text-sm-title">{{ data.area }} m²</span>
                </div>
                <div class="flex flex-col">
                    <span class="uppercase text-dtable-desc">cena</span>
                    <span class="text-sm-title">{{ data.price }}</span>
                </div>
            </div>

            <div class="prices-detail--table">
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">číslo</span>
                    <span class="text-dtable-value">{{ data.number }}</span>
                </div>
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">typ domu</span>
                    <span class="text-dtable-value">{{ data.house_type }}</span>
                </div>
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">dispozice</span>
                    <span class="text-dtable-value">{{ data.disposition }}</span>
                </div>
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">užitná plocha</span>
                    <span class="text-dtable-value">{{ data.use_area }} m²</span>
                </div>
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">velikost pozemku</span>
                    <span class="text-dtable-value">{{ data.area }} m²</span>
                </div>
                <div class="prices-detail--table--row">
                    <span class="uppercase text-dtable-desc">cena vč. dph</span>
                    <span class="text-dtable-value">{{ data.price }}</span>
                </div>
            </div>
        </div>
    </SideBox>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object,
            default: () => ({}),
        }
    }
}
</script>

<style lang="scss">
.prices-detail {
    
}

.prices-detail--table-emphasized {
    display: flex;
}

.prices-detail--table {
    &--row {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid $color-medium-divider;
    }
}
</style>