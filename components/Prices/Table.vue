<template>
    <div class="price-list-table">
        <div class="price-list-table--head uppercase text-dtable-value py-4">
            <span>číslo</span>
            <span>typ nabídky</span>
            <span>typ domu</span>
            <span>dispozice</span>
            <span>užitná plocha</span>
            <span>plocha pozemku</span>
            <span>cena</span>
            <span>stav</span>
        </div>
        <div v-for="item in data"
            :key="`table-${item.number}`"
            class="price-list-table--row text-ptable-value"
            @click="$emit('click', item)"
        >
            <span class="text-md-title">{{ item.number }}</span>
            <span>{{ item.offer_type }}</span>
            <span>{{ item.house_type }}</span>
            <span>{{ item.disposition }}</span>
            <span>{{ `${item.use_area} m²` }}</span>
            <span>{{ `${item.area} m²` }}</span>
            <span>{{ formatPrice(item.price) }}</span>

            <div class="price-list-table--row--state">
                <PricesStateFlag :state="item.state" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['click'],
    data: () => ({
        // Placeholder data
        data: [
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
    methods: {
        formatPrice(price) {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
        }
    }
}
</script>

<style lang="scss">
.price-list-table {
    display: flex;
    flex-direction: column;
}

.price-list-table--head,
.price-list-table--row {
    display: grid;
    grid-template-columns: 0.7fr 1fr 1.5fr 1fr 1fr 1fr 1.2fr 120px;

    span:last-child {
        text-align: right;
    }
}

.price-list-table--head {
    border-bottom: 2px solid #333333;
}

.price-list-table--row {
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
