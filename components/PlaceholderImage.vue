<template>
    <img :src="`https://via.placeholder.com/${width}x${height}`" />
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: 0,
        },
        height: {
            type: String,
            default: 0,
        },
    }
}
</script>

<style lang="scss">

</style>
