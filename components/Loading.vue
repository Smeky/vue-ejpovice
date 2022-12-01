<template>
    <div v-if="loading" class="loading">
        <div class="spinner"></div>
    </div>

    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true,
        }
    },
}
</script>

<style lang="scss">
.spinner {
    position: relative;
}

.spinner::after {
  content: '';
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border-radius: 50%;
  
  border-top: 4px solid rgba($color-main-web-blue, 1.0);
  border-left: 4px solid rgba($color-main-web-blue, 1.0);
  border-bottom: 4px solid rgba($color-main-web-blue, 1.0);
  border-right: 4px solid rgba($color-main-web-blue, 0.0);
  animation: spinner .6s linear infinite;
}

@keyframes spinner {
  to {transform: rotate(360deg);}
}

.loaded-fade-enter-active, .loaded-fade-leave-active {
  transition: opacity .3s;
}
</style>