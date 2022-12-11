<template>
    <div class="prices-table-desktop">
        <div class="prices-table-desktop--head uppercase text-dtable-value py-4">
            <span>číslo</span>
            <span>typ nabídky</span>
            <span>typ domu</span>
            <span>dispozice</span>
            <span>užitná plocha</span>
            <span>plocha pozemku</span>
            <span>cena</span>
            <span>stav</span>
        </div>
        <div v-for="item in items"
            :key="`table-desk-${item.number}`"
            class="prices-table-desktop--row text-ptable-value"
            @click="$emit('click', item)"
        >
            <span class="text-md-title">{{ item.number }}</span>
            <span>{{ item.offer_type }}</span>
            <span>{{ item.house_type }}</span>
            <span>{{ item.disposition }}</span>
            <span>{{ `${item.use_area} m²` }}</span>
            <span>{{ `${item.area} m²` }}</span>
            <span>{{ formatPrice(item.price) }}</span>

            <div class="prices-table-desktop--row--state">
                <PricesStateFlag :state="item.state" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        // Todo: move elsewhere, utils?
        formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
        }
    }
}
</script>

<style lang="scss">
.prices-table-desktop {
    display: flex;
    flex-direction: column;
}

.prices-table-desktop--head,
.prices-table-desktop--row {
    display: grid;
    grid-template-columns: 0.7fr 1fr 1.5fr 1fr 1fr 1fr 1.2fr 120px;

    span:last-child {
        text-align: right;
    }
}

.prices-table-desktop--head {
    border-bottom: 2px solid #333333;
}

.prices-table-desktop--row {
    position: relative;
    border-top: 1px solid #dbe3e7;
    padding: 12px 0;
    cursor: pointer;

    span {
        margin: auto 0;
    }

    &--state {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    &:before {
        content: "";
        background-color: transparent;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: all 0.2s ease-in-out;
    }

    &:hover:before {
        background-color: #E6ECEE;
        width: calc(100% + 32px);
        left: -16px;
    }
}
</style>
