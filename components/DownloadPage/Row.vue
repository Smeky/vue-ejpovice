<template>
    <div class="download-page-row" @click="$emit('click')">
        <div class="flex flex-col">
            <span class="text-md-ui-desc">Rezervační smlouva</span>
            <span class="text-sm-paragraph">(PDF)</span>
        </div>

        <div class="download-page-row--download">
            <span class="text-md-button uppercase mr-5">Stáhnout soubor</span>
            <ButtonIcon>
                <IconDownload color="#333" />
            </ButtonIcon>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.download-page-row {
    @include button-base();
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    border-bottom: 1px solid $color-medium-divider;

    &:first-child {
        border-top: 1px solid $color-medium-divider;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% + 2px); // +2px to cover the border
        background-color: $color-medium-divider;
        opacity: 0;
        z-index: -1;
        margin-top: -1px;
        transition: all 0.2s ease-in-out;
    }

    .button-icon {
        &:before {
            background-color: transparent;
            outline: 1px solid $color-main-green;
        }
    }

    &:hover {
        &:before {
            opacity: 1;
            transform: scaleX(1.05)
        }

        .download-page-row--download {
            > span {
                text-decoration: underline;
            }
            
            .button-icon:before {
                transform: scale(1.15);
                background-color: $color-main-green;
            }
        }
    }
}

.download-page-row--download {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
