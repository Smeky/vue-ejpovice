<template>
    <div>
        <SideBoxContainer />
        
        <Navbar class="sidebox-anchor" />
        <Menu />

        <div class="sidebox-anchor">
            <!-- Slidebox-anchor moves the navbar as well as the block bellow when sidebox gets opened -->
            <Nuxt />
        </div>

        <Footer class="sidebox-anchor" />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
