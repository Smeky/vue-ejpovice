<template>
    <div class="homescreen relative">
        <PageHomeSlides class="absolute" />

        <div class="absolute bottom-0 flex flex-col lg:flex-row lg:justify-between w-full p-5 lg:p-24">
            <div class="homescreen__hero -mb-6 lg:mb-0">
                <span class="text-gt-title">Domy a pozemky v Ejpovicích u Plzně</span>

                <div class="hidden lg:flex mt-14">
                    <div class="homescreen__hero-more flex gap-x-5 items-center hover:cursor-pointer">
                        <div class="grid place-items-center">
                            <img src="~/assets/icons/more.svg" />
                        </div>
                        <span v-scroll-to="'#AboutProject'" class="uppercase text-lg-button">
                            více o projektu
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <div class="flex flex-col items-end justify-end gap-y-4 w-fit">
                    <span class="leading-none text-sm-num mb-1">/ 32</span>
                    <span class="leading-none -mt-5 text-lg-num">26</span>
                    
                    <NuxtLink :to="{ name: 'prices' }">
                        <ButtonLeaf>vyberte si</ButtonLeaf>
                    </NuxtLink>
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
    color: $color-white;
    width: 100vw;
    height: 100vh;
    background-color: $color-darken-web-blue;
    user-select: none;

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
        max-width: 210px;

        @include lg() {
            max-width: 555px;
        }
    }
    &__hero-more {
        > div {
            width: 40px;
            height: 40px;
            background-color: $color-white;
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
}
</style>