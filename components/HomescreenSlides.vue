<template>
    <div class="homescreen-slides w-full h-full">
        <transition name="fade-effect">
            <img class="absolute top-0 left-0" :src="images[slideIndex]" :key="`slide-${slideIndex}`" />
        </transition>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            slideIndex: -1,
            images: [
                require("~/assets/images/Ejpovice_0006.jpg"),
                require("~/assets/images/Ejpovice_0005.jpg"),
                require("~/assets/images/Ejpovice_0004.jpg"),
            ],
        }
    },
    mounted() {
        // If you change the interval here, you must also change animation duration!
        this.interval = setInterval(() => {
            this.slideIndex = (this.slideIndex + 1) % this.images.length
        }, 4000)

        this.slideIndex = 0
    },
    unmounted() {
        clearInterval(this.interval)
    },
}
</script>

<style lang="scss">
.homescreen-slides {
    z-index: -1;
    height: 70%;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        z-index: 1;
        background: linear-gradient(to top, $color-main-dark-web 0, transparent 100%);

        @include lg() {
            background: none;
        }
    }
    
    @include lg() {
        &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: rgba($color-main-dark-web, 0.4);
        }
    }

    @include lg() {
        height: 100%;
    }

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
    }

    @keyframes fadein-effect {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes zoomout-effect {
        0% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    .fade-effect-enter-active {
        animation: zoomout-effect 4s linear, fadein-effect 0.3s linear;
    }
    .fade-effect-leave-active {
        animation: fadein-effect 0.3s linear;
    }
}
</style>