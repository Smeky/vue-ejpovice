<template>
    <div class="grades-rectangle">
        <div class="grades-rectangle--grade grades-rectangle--grade--topleft">
            <img src="~/assets/icons/grade-health.svg" />
            <span class="text-sm-title color-white">zdravé bydlení</span>
            
            <WithArrow class="grades-rectangle--grade--more mt-4">
                <span class="text-mb-button color-white uppercase">více</span>
            </WithArrow>
        </div>
        <div class="grades-rectangle--grade grades-rectangle--grade--topright">
            <img src="~/assets/icons/grade-comfort.svg" />
            <span class="text-sm-title color-white">vysoký komfort</span>
            
            <WithArrow class="grades-rectangle--grade--more mt-4">
                <span class="text-mb-button color-white uppercase">více</span>
            </WithArrow>
        </div>
        <div class="grades-rectangle--grade grades-rectangle--grade--bottomleft">
            <img src="~/assets/icons/grade-savings.svg" />
            <span class="text-sm-title color-white">úspora nákladů</span>
            
            <WithArrow class="grades-rectangle--grade--more mt-4">
                <span class="text-mb-button color-white uppercase">více</span>
            </WithArrow>
        </div>
        <div class="grades-rectangle--grade grades-rectangle--grade--bottomright">
            <img src="~/assets/icons/grade-gentle.svg" />
            <span class="text-sm-title color-white">šetrnost stavby</span>
            
            <WithArrow class="grades-rectangle--grade--more mt-4">
                <span class="text-mb-button color-white uppercase">více</span>
            </WithArrow>
        </div>
    </div>
</template>



<script>
export default {

}
</script>

<style lang="scss">
$grades-rectangle-border-radius: 60px;

.grades-rectangle {
    width: 480px;
    height: 480px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 20px solid rgba(0, 0, 0, 0.05);
    border-radius: calc(#{$grades-rectangle-border-radius} + 20px);
    box-sizing: border-box;
}

.grades-rectangle--grade {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    @include button-base();

    > span {
        display: table;
        width: 50%;
        text-align: center;
        margin-top: 20px;
    }

    // > img {
    //     transition: transform 0.3s ease-in-out;
    // }
    // &:hover > img {
    //     transform: scale(0.8);
    // }

    // &--more {
    //     max-height: 0;
    //     opacity: 0;
    //     transition: all 0.3s ease-in-out;
    // }
    // &:hover &--more {
    //     max-height: 60px;
    //     opacity: 1;
    // }
    
    &--topleft {
        background-color: $color-support-a;
        border-top-left-radius: $grades-rectangle-border-radius;
    }
    &--topright {
        background-color: $color-support-b;
        border-top-right-radius: $grades-rectangle-border-radius;
    }
    &--bottomleft {
        background-color: $color-reservation;
        border-bottom-left-radius: $grades-rectangle-border-radius;
    }
    &--bottomright {
        background-color: $color-cta;
        border-bottom-right-radius: $grades-rectangle-border-radius;
    }
}
</style>
