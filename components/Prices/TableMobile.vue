<template>
    <div class="prices-table-mobile">
        <div v-for="item in items" 
            :key="`table-mob-${item.number}`" 
            class="prices-table-mobile--row"
        >
            <div class="prices-table-mobile--row--divider"></div>

            <div class="prices-table-mobile--row--content m-5">
                <div class="flex justify-between">
                    <span class="text-md-title">
                        {{ item.offer_type }} {{ item.number }}
                    </span>

                    <PricesStateFlag :state="item.state" />
                </div>

                <div class="prices-table-mobile--row--items my-10">
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">typ nabídky</span>
                        <span class="text-ptable-value">{{ item.offer_type }}</span>
                    </div>
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">typ domu</span>
                        <span class="text-ptable-value">{{ item.house_type }}</span>
                    </div>
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">dispozice</span>
                        <span class="text-ptable-value">{{ item.disposition }}</span>
                    </div>
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">užitná plocha</span>
                        <span class="text-ptable-value">{{ `${item.use_area} m²` }}</span>
                    </div>
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">plocha pozemku</span>
                        <span class="text-ptable-value">{{ `${item.area} m²` }}</span>
                    </div>
                    <div class="prices-table-mobile--row--item">
                        <span class="text-ptable-desc uppercase">cena</span>
                        <span class="text-ptable-value">{{ formatPrice(item.price) }}</span>
                    </div>
                </div>

                <div class="inline-flex justify-center w-full">
                    <ButtonRounded outline @click="$emit('click', item)">
                        <template v-slot:icon>
                            <img src="~/assets/icons/eye.svg" />
                        </template>

                        detail nemovitosti
                    </ButtonRounded>
                </div>
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
.prices-table-mobile {

}

.prices-table-mobile--row--divider {
    display: block;
    height: 5px;
    width: 100%;
    background-color: $color-medium-divider;
}

.prices-table-mobile--row--items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    > div {
        display: flex;
        flex-direction: column;
    }
}
</style>
