<template>
    <div class="home flex overflow-x-hidden">
        <!-- Slidebox-anchor moves the navbar as well as the block bellow when sidebox gets opened -->
        <Navbar class="sidebox-anchor" />
        <Menu />

        <div class="sidebox-anchor">
            <Homescreen />

            <!-- Placeholder for scroll -->
            <div class="bg-white max-w-3xl mx-4 md:mx-auto my-14 text-center">
                <h2 class="text-2xl my-4">Scroll placeholder</h2>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage'
}
</script>

<style lang="scss">
.home {
    margin-left: 0;
    transition: all 0.4s ease-in-out;

    &::after {
        content: '';
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.3s ease-in-out;
        background-color: rgba($color-darken-web-blue, 0);
    }

    @include lg() {
        &.menu-open {
            margin-left: 640px;

            // Add overlay effect
            &::after {
                background-color: rgba($color-darken-web-blue, 0.5);
            }
        }
    }
}
</style>
