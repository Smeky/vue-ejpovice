<template>
    <div class="download-page">
        <div class="download-page--headline">
            <h1 class="text-lg-title">Dokumenty ke stažení</h1>
        </div>

        <div class="download-page--content mt-md mb-gt">
            <BlockContainer>
                <ToggleButtonGroup :items="items" :selected="selectedItem" />

                <div class="my-sm">
                    <h3 class="text-sm-title mb-5">Smlouvy</h3>

                    <div>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                    </div>
                </div>

                <div class="my-sm">
                    <h3 class="text-sm-title mb-5">Standardy</h3>

                    <div>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                    </div>
                </div>

                <div class="my-sm">
                    <h3 class="text-sm-title mb-5">Půdorysy</h3>

                    <div>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                    </div>
                </div>

                <div class="my-sm">
                    <h3 class="text-sm-title mb-5">Stavba</h3>

                    <div>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                        <DownloadPageRow url="">Rezervační smlouva</DownloadPageRow>
                    </div>
                </div>
            </BlockContainer>
        </div>

        <BlockFreeSpaces />
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedItem: 'download-1',
        items: [
            { id: 'download-1', label: 'Všechny' },
            { id: 'download-2', label: 'Smlouvy' },
            { id: 'download-3', label: 'Standardy' },
            { id: 'download-4', label: 'Půdorysy' },
            { id: 'download-5', label: 'Stavba' },
        ]
    }),
    mounted() {
        this.$store.commit('SET_NAVBAR_STATIC', true);
    },
    beforeDestroy() {
        this.$store.commit('SET_NAVBAR_STATIC', false);
    }
}
</script>

<style lang="scss">
.download-page .block-container {
    max-width: 1020px;
    padding: 0 20px;
}

// Toggle button group
.download-page .toggle-button-group {
    flex-wrap: wrap;

    .button-rounded {
        height: 36px;
        line-height: 1;
    }
}

.download-page--headline {
    display: flex;
    justify-content: center;
    align-items: center;

    color: $color-white;
    background-color: $color-main-web-blue;
    
    padding: 60px 20px;
    padding-top: 130px; // Position under navbar, can't use margin as that flickers on page leave

    @include lg() {
        padding: 120px;
        padding-top: 190px; // Position under navbar
    }
}
</style>
