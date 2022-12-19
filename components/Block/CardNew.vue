<template>
    <div class="card-block-new" :class="{ 'card-block--flipped': flip }">
        <template v-if="$slots.image">
            <slot name="image"></slot>
        </template>

        <div v-else class="card-block--image">
            <img :src="image">
        </div>

        <div class="card-block--content p-5 lg:p-28 mb-16 lg:mb-0">
            <h2 class="text-lg-title color-main-green">{{ title }}</h2>
            <p class="text-lg-paragraph">{{ text }}</p>
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            required: true
        },
        text: {
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
.card-block-new {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include lg() {
        flex-direction: row;
    }

    > div {
        flex: 1;
        max-width: 720px;
    }
}

.card-block--flipped {
    @include lg() {
        > div:last-child {
            order: -1;
        }
    }
}

.card-block--content {
    > *:not(:last-child) {
        margin-bottom: 30px;

        @include lg() { margin-bottom: 60px; }
    }
}

// .card-block {
//     display: grid;
//     justify-content: space-between;

//     grid-template-columns: 1fr;

//     @include lg() {
//         grid-template-columns: minmax(0, 720px) minmax(0, 720px);
//     }
// }

// .card-block--image {
//     width: fit-content;

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }

//     order: 1;
//     @include lg() {
//         order: 0;
//     }
// }
</style>
