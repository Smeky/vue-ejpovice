<template>
    <div class="poster poster-height">
        <img class="poster--bg" :src="image" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.poster {
    position: relative;
}

.poster--bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
}

</style>