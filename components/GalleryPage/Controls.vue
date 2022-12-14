<template>
    <div class="gallery-landing-controls">
        <div class="gallery-landing-controls--item">
            <img src="~/assets/images/Ejpovice_0005.jpg" />
            <div>
                <span class="text-md-title">Vizualizace</span>

                <ButtonGallery outline class="mt-5">
                    <IconArrow />
                </ButtonGallery>
            </div>
        </div>
        <div class="gallery-landing-controls--item">
            <img src="~/assets/images/gallery_2.jpg" />
            <div>
                <span class="text-md-title">Lokalita</span>

                <ButtonGallery outline class="mt-5">
                    <IconArrow />
                </ButtonGallery>
            </div>
        </div>
        <div class="gallery-landing-controls--item">
            <img src="~/assets/images/gallery_3.jpg" />
            <div>
                <span class="text-md-title">Dokončené domy</span>

                <ButtonGallery outline class="mt-5">
                    <IconArrow />
                </ButtonGallery>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.gallery-landing-controls {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
}

// "Buttons" for lack of a better word
.gallery-landing-controls--item {
    @include button-base();

    position: relative;
    height: 100%;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    opacity: 0.9;
    background-color: $color-darken-web-blue;
    color: $color-white;
    overflow: hidden;

    // Linear gradient on right border for each button except last
    &:not(:last-child) {
        border-right-width: 1px;
        border-right-style: solid;
        border-image: linear-gradient(
            to bottom, 
            rgba($color-soft-divider, 0.1) 0%, 
            rgba($color-soft-divider, 0.4) 50%, 
            rgba($color-soft-divider, 0.1) 100%
        ) 1;
    }

    > img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;

        object-fit: cover;
        transform: scale(1.1);
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    &:hover {
        opacity: 1;

        > img {
            transform: scale(1);
            opacity: 1;
        }

        .button-gallery {
            &:before {
                background-color: $color-main-green;
                transform: scale(0.83);
            }
        }
    }
}

.gallery-landing-controls--item > div {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 160px;
}
</style>
