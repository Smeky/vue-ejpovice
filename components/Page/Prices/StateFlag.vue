<template>
    <div class="prices-state-flag" :class="StateToClass[state]">
        <span class="text-sm-ui-desc color-white">{{ StateToText[state] }}</span>
    </div>
</template>

<script>
export default {
    data() {
        this.StateToClass = {
            sold: 'prices-state-flag--sold',
            free: 'prices-state-flag--free',
            reservation: 'prices-state-flag--reservation',
        }

        this.StateToText = {
            sold: 'Prodáno',
            free: 'Volný',
            reservation: 'Rezervace',
        }

        return {}
    },
    props: {
        state: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.prices-state-flag {
    display: inline-flex;
    padding: 10px 15px;
    border-radius: 40px;

    @mixin state-icon($filename) {
        content: "";
        background-image: url('~/assets/icons/' + $filename);
        background-repeat: no-repeat;
        background-position: center;
        width: 20px;
        height: 20px;
        margin-right: 4px;
        margin-top: auto;
    }
    
    &--sold {
        background-color: $color-sold;
        &:before { @include state-icon('table-sold.svg') }
    }
    &--free {
        background-color: $color-free;
        &:before { @include state-icon('table-free.svg') }
    }
    &--reservation {
        background-color: $color-reservation;
        &:before { @include state-icon('table-reserved.svg') }
    }
}
</style>
