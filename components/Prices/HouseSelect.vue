<template>
    <div class="house-select">
        <div class="house-select--map">
            <img src="~/assets/images/Free_spaces.png" />

        </div>

        <div class="house-select--meta py-16 pl-16 pr-32">
            <div class="house-select--compass mt-auto">
                <img src="~/assets/images/fake_compass.svg" />
            </div>

            <div class="flex flex-col items-center">
                <div class="flex items-start relative">
                    <span class="leading-none color-white text-gt-title">26</span>
                    <span class="absolute left-full whitespace-nowrap color-white text-sm-num ml-2">
                        / 32
                    </span>
                </div>
                <span class="text-md-title color-white mb-8">volných</span>
                <div class="button--rounded button--white">
                    <span class="text-ptable-desc uppercase">vybrat z tabulky</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.house-select {
    position: relative;
    width: 100%;
    height: 100vh;
}

.house-select--map {
    > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        object-fit: cover;
    }
}

.house-select--meta {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
