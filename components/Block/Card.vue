<template>
    <div class="card-block--wrapper lg:mx-32">
        <div class="card-block">
            <div class="card-block--image">
                <img :src="image">
            </div>

            <div class="card-block--content p-5 lg:p-28 mb-16 lg:mb-0">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss">
.card-block {
    display: grid;
    justify-content: center;

    grid-template-columns: 1fr;

    @include lg() {
        grid-template-columns: minmax(0, 720px) minmax(0, 720px);
    }

}

.card-block--image {
    width: fit-content;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    order: 1;
    @include lg() {
        order: 0;
    }
}
</style>
