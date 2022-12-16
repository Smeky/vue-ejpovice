<template>
    <div class="gallery-card">
        <div class="gallery-card--image">
            <slot></slot>
        </div>
        <div class="gallery-card--content">
            <span class="text-sm-capital uppercase">průběh výstavby</span>
            <span class="text-sm-title">{{ title }}</span>
            
            <ButtonGallery class="mt-5">
                <IconArrow />
            </ButtonGallery>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss">
.gallery-card {
    @include button-base();

    position: relative;
    width: 375px;
    height: 475px;
    flex-shrink: 0;

    color: $color-white;
    background-color: rgba($color-darken-web-blue, 0.8);
    background-image: linear-gradient(to top, rgba($color-darken-web-blue, 1), transparent 50%);

    overflow: hidden;

    &:hover {
        .gallery-card--image {
            transform: scale(1.1);
        }

        .button-gallery {
            @include button-gallery-hover();
        }
    }
}

.gallery-card--image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.2s ease-in-out;

    > * {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.gallery-card--content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;

    > span {
        margin-left: 20px;
        margin-right: 20px;
    }

    > .button-gallery {
        margin-left: auto;
    }
}
</style>
