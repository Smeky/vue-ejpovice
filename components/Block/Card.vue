<template>
    <div class="card-block--wrapper">
        <div class="card-block" :class="{ 'card-block--flipped': flip }">
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
        flip: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.card-block {
    display: grid;
    justify-content: space-between;

    grid-template-columns: 1fr;

    @include lg() {
        grid-template-columns: minmax(0, 720px) minmax(0, 720px);
    }
}

.card-block--flipped {
    @include lg() {
        .card-block--image {
            order: 1;
        }
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
