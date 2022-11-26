<template>
    <div class="homescreen relative">
        <HomescreenSlides class="absolute" />

        <div class="absolute bottom-0 flex flex-col lg:flex-row lg:justify-between w-full p-5 lg:p-24">
            <div class="homescreen__hero -mb-6 lg:mb-0">
                <span class="text-4xl lg:text-6xl">Domy a pozemky v Ejpovicích u Plzně</span>

                <div class="hidden lg:flex mt-14">
                    <div class="homescreen__hero-more flex gap-x-5 items-center hover:cursor-pointer">
                        <div class="grid place-items-center">
                            <img src="~/assets/icons/more.svg" />
                        </div>
                        <span class="uppercase font-medium">více o projektu</span>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="flex flex-col items-end gap-y-4 w-fit">
                    <span class="leading-none text-xs lg:text-sm">/ 32</span>
                    <span class="leading-none text-[60px] lg:text-[120px] -mt-5">26</span>
                    <div class="homescreen-select-btn grid place-items-center">
                        <span class="font-medium text-black uppercase">vyberte si</span>
                    </div>
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
.homescreen {
    color: $color-primary;
    width: 100vw;
    height: 100vh;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(to bottom, #11101A94 0, transparent 100%);
    }

    &__hero {
        max-width: 200px;

        @include lg() {
            max-width: 515px;
        }
    }
    &__hero-more {
        > div {
            width: 40px;
            height: 40px;
            background-color: $color-primary;
            border-radius: 100%;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            @include text-hover-underline();
            
            > div {
                transform: scale(1.25);
            }
        }
    }

    .homescreen-select-btn {
        cursor: pointer;
        user-select: none;
        background-color: #B0AA5A;
        border-radius: 70px 0;
        letter-spacing: 5px;
        transition: all 0.3s ease-in-out;
    
        // mobile
        width: 300px;
        height: 67px;

        // desktop
        @include lg() {
            width: 315px;
            height: 70px;

            &:hover {
                width: 335px;
                transform: translateX(10px);
            }
        }
    }
}
</style>