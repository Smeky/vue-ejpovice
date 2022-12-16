<template>
    <div class="download-page">
        <div class="download-page--headline">
            <h1 class="text-lg-title">Dokumenty ke stažení</h1>
        </div>

        <div id="dwlAnchorAll" class="download-page--content mt-md mb-gt">
            <BlockContainer>
                <ToggleButtonGroup :items="items" :selected="selectedItem" @click="onToggleClick" />

                <div id="dwlAnchor1" class="my-sm">
                    <h3 class="text-sm-title mb-5">Smlouvy</h3>

                    <div>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                    </div>
                </div>

                <div id="dwlAnchor2" class="my-sm">
                    <h3 class="text-sm-title mb-5">Standardy</h3>

                    <div>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                    </div>
                </div>

                <div id="dwlAnchor3" class="my-sm">
                    <h3 class="text-sm-title mb-5">Půdorysy</h3>

                    <div>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                    </div>
                </div>

                <div id="dwlAnchor4" class="my-sm">
                    <h3 class="text-sm-title mb-5">Stavba</h3>

                    <div>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                        <PageDownloadRow url="">Rezervační smlouva</PageDownloadRow>
                    </div>
                </div>
            </BlockContainer>
        </div>

        <BlockFreeSpaces />
    </div>
</template>

<script>
export default {
    name: 'DownloadPage',
    head: () => ({
        title: 'Ke stažení | Ejpovice',
    }),
    data: () => ({
        selectedItem: 'All',
        items: [
            { id: 'All', label: 'Všechny' },
            { id: '1', label: 'Smlouvy' },
            { id: '2', label: 'Standardy' },
            { id: '3', label: 'Půdorysy' },
            { id: '4', label: 'Stavba' },
        ]
    }),
    mounted() {
        this.$store.commit('SET_NAVBAR_STATIC', true);
    },
    beforeDestroy() {
        this.$store.commit('SET_NAVBAR_STATIC', false);
    },
    methods: {
        onToggleClick(id) {
            this.$scrollTo(`#dwlAnchor${id}`, 500, { offset: -100 })
        }
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
