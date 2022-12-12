<template>
    <SideBox :open="open" position="right" no-padding @close="$emit('close')">
        <div v-if="open" class="prices-detail">

            <div class="prices-detail--block">
                <h3 class="text-lg-title">{{ data.offer_type }} {{ data.number }}</h3>
                <PricesStateFlag :state="data.state" />

                <PlaceholderImage class="my-16" width="520" height="180" />

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
                        <span class="text-sm-title">{{ formatPrice(data.price) }}</span>
                    </div>
                </div>

                <div class="prices-detail--table mt-16">
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
                        <span class="text-dtable-value">{{ formatPriceWithCurrency(data.price) }}</span>
                    </div>
                </div>

                <div class="flex justify-center mt-16">
                    <ButtonRounded class="button--blue">
                        poptat tento dům
                    </ButtonRounded>
                </div>
            </div>

            <SideBoxDivider />

            <div class="prices-detail--block">
                <h3 class="text-lg-title">Půdorysy</h3>
                <ToggleButtonGroup class="mt-5" :items="groundPlans" :selected="selectedGroundPlan" @click="handleGroundPlanClick" />

                <div class="flex justify-center">
                    <PlaceholderImage class="my-16" width="380" height="640" />
                </div>

                <div class="prices-detail--table">
                    <div v-for="item in mock.pudorysy[selectedGroundPlan].items"
                        :key="`pdetail-flr-${item.id}`"
                    >
                        <div class="prices-detail--table--row">
                            <div>
                                <span class="uppercase text-dtable-desc mr-7">{{ item.id }}</span>
                                <span class="uppercase text-dtable-desc">{{ item.label }}</span>
                            </div>
                            <span class="text-dtable-value">{{ item.value }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <SideBoxDivider />

            <div class="prices-detail--block">
                <h3 class="text-lg-title mb-20">Umístění pozemku</h3>

                <PlaceholderImage class="mb-16" width="520" height="400" />
            </div>

            <SideBoxDivider />

            <div class="prices-detail--contact">
                <h3 class="text-md-title">
                    Poptat
                    <span class="lowercase">{{ data.offer_type }}</span>
                    {{ data.number }}
                </h3>
                <p class="text-md-paragraph mt-16">
                    Kontaktujte naši zákaznickou linku. Naši zkušení makléři vám poskytnou podrobné informace o nemovitosti a zároveň jsou připraveni pomoci i s nastavením výhodného financování vašeho nového bydlení.
                </p>
                <span class="text-md-capital uppercase tracking-wider mt-10">zákaznická linka</span>
                
                <a class="text-lg-title whitespace-nowrap underline decoration-2 mt-3" href="tel:+420800100164">
                    +420 800 100 164
                </a>

                <span class="text-sm-paragraph mt-8">Výhradní prodejce:</span>
                <span class="text-sm-paragraph">Broker Consulting, a. s.</span>
            </div>

            <ContactForm background-color="#4DA169" />
        </div>
    </SideBox>
</template>

<script>
import { formatPrice, formatPriceWithCurrency } from '~/utils/price'

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
    },
    data: () => ({
        selectedGroundPlan: null,
        mock: {
            pudorysy: {
                '1patro': {
                    label: 'I. patro',
                    items: [
                        { id: '1.1.01', label: 'zádveří', value: 3.98 },
                        { id: '1.1.02', label: 'šatna', value: 2.44 },
                        { id: '1.1.03', label: 'zádveří', value: 3.98 },
                        { id: '1.1.04', label: 'šatna', value: 2.44 },
                        { id: '1.1.05', label: 'zádveří', value: 3.98 },
                        { id: '1.1.06', label: 'šatna', value: 2.44 },
                        { id: '1.1.07', label: 'zádveří', value: 3.98 },
                        { id: '1.1.08', label: 'šatna', value: 2.44 },
                    ]
                },
                '2patro': {
                    label: 'II. patro',
                    items: [
                        { id: '1.2.01', label: 'zádveří', value: 3.98 },
                        { id: '1.2.02', label: 'šatna', value: 2.44 },
                        { id: '1.2.03', label: 'zádveří', value: 3.98 },
                        { id: '1.2.04', label: 'šatna', value: 2.44 },
                        { id: '1.2.05', label: 'zádveří', value: 3.98 },
                    ]
                }
            }
        }
    }),
    computed: {
        groundPlans() {
            return Object.keys(this.mock.pudorysy).map(key => ({
                id: key,
                label: this.mock.pudorysy[key].label,
            }))
        }
    },
    mounted() {
        this.selectedGroundPlan = Object.keys(this.mock.pudorysy)[0]
    },
    methods: {
        handleGroundPlanClick(id) {
            this.selectedGroundPlan = id
        },
        formatPrice: formatPrice,
        formatPriceWithCurrency: formatPriceWithCurrency,
    }
}
</script>

<style lang="scss">
.prices-detail--block {
    margin: 40px 20px;

    @include lg() {
        margin: 60px;
    }
}

.prices-detail--contact {
    display: flex;
    flex-direction: column;
    padding: 60px;
    background-color: $color-main-green-darken;
}

.prices-detail .contact-form {
    padding: 40px 20px;

    @include lg() {
        padding: 60px;
    }
}

.prices-detail .sidebox--divider {
    border-bottom-width: 5px;
}

.prices-detail--table-emphasized {
    display: flex;
    justify-content: space-between;
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