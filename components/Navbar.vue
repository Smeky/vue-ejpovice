<template>
    <!-- Desktop navbar -->
    <div id="navbar" class="navbar" v-if="!$store.state.isMobile" :class="{ 'navbar__scrolled': isScrolled }">
        <div class="navbar__func flex gap-x-4 h-fit" @click="$store.dispatch('toggleMenu')">
            <img src="~/assets/icons/burger.svg" />
            <span class="text-navbar">Menu</span>
        </div>
        <NuxtLink class="flex uppercase gap-x-4 h-fit" to="/">
            <img src="~/assets/icons/nav-logo.svg" />
            <div class="flex flex-col leading-none">
                <span>domy</span>
                <span>ejpovice II.</span>
            </div>
        </NuxtLink>

        <div class="navbar__func flex gap-x-8 h-fit">
            <span class="whitespace-nowrap text-navbar">Vyberte si</span>
            <img src="~/assets/icons/nav-home.svg" />
        </div>
    </div>

    <!-- Mobile navbar -->
    <div class="navbar navbar__mobile" v-else> <!-- $store.state.isMobile -->
        <NuxtLink class="flex uppercase gap-x-4 h-fit" to="/">
            <img src="~/assets/icons/nav-logo.svg" />
            <div class="flex flex-col leading-none">
                <span>domy</span>
                <span>ejpovice II.</span>
            </div>
        </NuxtLink>

        <div @click="$store.dispatch('toggleMenu')">
            <img src="~/assets/icons/burger.svg" />
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isScrolled: false,
        }
    },
    mounted() {
        // If we scroll down, navbar should change class
        window.addEventListener("scroll", this.handleScroll)
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0
        }
    }
}
</script>

<style lang="scss">
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    height: 150px;
    width: 100vw;
    padding: 0 60px;

    @include lg() {
        &__scrolled {
            background-color: #12465C;
            height: 70px;
        }
    }

    &__mobile {
        height: 70px;
        padding: 0 20px;
        background-color: #12465C;
    }

    &__func {
        cursor: pointer;
        user-select: none;

        &:hover {
            span {
                @include text-hover-underline();
            }
        }
    }

    > .flex {
        align-items: center;
        padding: 8px 12px;
    }
}
</style>
