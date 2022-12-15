<template>
    <!-- Desktop navbar -->
    <div id="navbar" class="navbar" v-if="!$store.state.isMobile" :class="{ 'navbar--static': $store.state.isNavbarStatic }">
        <div class="navbar--func flex gap-x-4 h-fit" @click="$store.dispatch('toggleMenu')">
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

        <div class="navbar--func flex gap-x-8 h-fit">
            <NuxtLink to="prices" class="whitespace-nowrap text-navbar">Vyberte si</NuxtLink>
            <img src="~/assets/icons/nav-home.svg" />
        </div>
    </div>

    <!-- Mobile navbar -->
    <div class="navbar navbar--mobile" v-else> <!-- $store.state.isMobile -->
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
import { useTimeline } from "~/composables/useTimeline"

export default {
    setup() {
        return { ...useTimeline() }
    },
    data: () => ({
        isScrolled: false,
    }),
    mounted() {
        // If we scroll down, navbar should change class
        window.addEventListener("scroll", this.handleScroll)
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (this.$store.state.isMobile || this.$store.state.isNavbarStatic)
                return

            const prev = this.isScrolled
            this.isScrolled = window.scrollY > 75

            if (prev === this.isScrolled)
                return

            this.timeline.to('#navbar', {
                duration: 0.3,
                backgroundColor: this.isScrolled ? "#12465C" : "transparent",
                height: this.isScrolled ? "70px" : "150px",
            })
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


    &--mobile {
        height: 70px;
        padding: 0 20px;
        background-color: #12465C;
    }

    &--func {
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

.navbar--static {
    background-color: #12465C !important;
    height: 70px !important;
}
</style>
