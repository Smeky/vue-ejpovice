<template>
        <div id="sidebox-container">
            <div id="sidebox-overlay"></div>
            <!-- Content is provided by a Teleport (it transports all uses of <SideBox> here) -->
        </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#sidebox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
    background-color: $color-darken-web-blue;
    opacity: 0;

    // Transition handled by GSAP
}
</style>
