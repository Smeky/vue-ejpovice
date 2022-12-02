<template>
    <SideBox :open="$store.state.isMenuOpen" @close="$store.dispatch('closeMenu')" position="left">
        <div class="menu">
            <div class="flex flex-col justify-between h-full ml-10 lg:ml-20">
                <Loading :loading="!$store.state.navigation.length">
                    <div class="menu__items flex flex-col gap-y-8">
                            <span v-for="item in $store.state.navigation" 
                                  :key="item.label"
                                  class="text-web-menu color-main-text"
                            >
                                {{ item.label}}
                            </span>
                    </div>
                </Loading>

                <div class="menu__items flex flex-col gap-y-3 text-sm mt-16">
                    <span class="text-sm-paragraph color-main-text">
                        Prohlášení developera
                    </span>
                    <span class="text-sm-paragraph color-main-text">
                        Cookies
                    </span>
                </div>
            </div>
        </div>
    </SideBox>
</template>

<script>
export default {
    async fetch() {
        await this.$store.dispatch('fetchNavigation')
    }
}
</script>

<style lang="scss">
$menu-width-desktop: 640px;
$menu-width-mobile: 100%;

.menu-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    visibility: hidden;
    
    background-color: $color-soft-divider;
    transition: all 0.4s ease-in-out;

    height: 0;
    width: $menu-width-mobile;

    @include lg() {
        height: 100%;
        width: $menu-width-desktop;
        left: -$menu-width-desktop;
    }

    &.open {
        visibility: visible;
        height: 100%;

        @include lg() {
            left: 0;
        }
    }
}

.menu {
    width: 100%;
    white-space: nowrap;

    &__close {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 100%;
        background-color: transparent;
        transition: all 0.2s ease-in-out;
        
        > img {
            transition: all 0.2s ease-in-out;
        }

        &:hover {
            background-color: #E6E6E6;

            > img {
                transform: scale(0.7)
            }
        }
    }

    // Pointer stuff for menu items
    &__items {
        > span {
            cursor: pointer;

            &:hover {
                @include text-hover-underline();
            }
        }
    }
}
</style>
