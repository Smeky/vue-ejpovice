<template>
    <div class="grades-rectangle">
        <div v-for="(grade, index) in grades" :key="`grades-${index}`"
             class="grades-rectangle--grade-container"
             :class="grade.class"
        >
            <div class="grades-rectangle--grade py-12">
                <img :src="grade.icon" />
                <span class="text-sm-title color-white">
                    {{ grade.title }}
                </span>
                
                <WithArrow class="grades-rectangle--grade--more mt-4">
                    <span class="text-md-button color-white uppercase">více</span>
                </WithArrow>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data: () => ({
        grades: [
            {
                icon: require('~/assets/icons/grade-health.svg'),
                title: 'zdravé bydlení',
                class: 'grades-rectangle--grade--topleft'
            },
            {
                icon: require('~/assets/icons/grade-comfort.svg'),
                title: 'vysoký komfort',
                class: 'grades-rectangle--grade--topright'
            },
            {
                icon: require('~/assets/icons/grade-savings.svg'),
                title: 'úspora nákladů',
                class: 'grades-rectangle--grade--bottomleft'
            },
            {
                icon: require('~/assets/icons/grade-gentle.svg'),
                title: 'šetrnost stavby',
                class: 'grades-rectangle--grade--bottomright'
            }
        ]
    })
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
    box-sizing: content-box;
}

.grades-rectangle--grade-container {
    // Needs to be set so the grid items don't increase their height on hover
    height: 240px;
    width: 240px;
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
        transition: all 0.3s ease-in-out;
    }
    &:hover > span {
        margin-top: 5px;
        margin-bottom: 0px;
    }

    > img {
        transition: all 0.3s ease-in-out;
    }
    &:hover > img {
        transform: scale(0.80);
        margin-top: -10px;
    }

    &--more {
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }
    &:hover &--more {
        opacity: 1;
    }
    
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
