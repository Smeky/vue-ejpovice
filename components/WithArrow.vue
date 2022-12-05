<template>
    <div class="inline-flex items-center">
        <span><slot></slot></span>
        <IconArrow :color="color" class="ml-2" />
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#fff'
        }
    }
}
</script>

<style lang="scss">

</style>
