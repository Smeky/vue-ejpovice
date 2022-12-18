<template>
    <div class="about-schedule-item gap-x-1" :class="{ 'about-schedule-item--done': finished }">
        <div>
            <img v-if="finished" src="~/assets/icons/schedule-done.svg" />
            <img v-else src="~/assets/icons/schedule-progress.svg" />
        </div>

        <span class="text-md-capital uppercase mt-3 mb-1">{{ label }}</span>
        <span class="text-sm-title">{{ date }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        finished: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss">
.about-schedule-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    flex: 1;
    padding: 30px;
    background-color: $color-medium-divider;
}

.about-schedule-item--done {
    background-color: $color-main-green;
}
</style>
