<template>
    <div class="grades-rectangle">
        <div v-for="(grade, index) in grades" :key="`grades-${index}`"
             class="grades-rectangle--grade-container"
             :class="grade.class"
        >
            <div class="grades-rectangle--grade py-8 lg:py-12">
                <img :src="grade.icon" />
                <span class="text-sm-title color-white">
                    {{ grade.title }}
                </span>
                
                <WithArrow class="grades-rectangle--grade--more mt-3 lg:mt-4">
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
$grades-rectangle-size-desktop: 480px;
$grades-rectangle-size-mobile: 334px;
$grades-rectangle-cell-size-desktop: 240px;
$grades-rectangle-cell-size-mobile: 167px;

.grades-rectangle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: content-box;

    border-color: rgba(0, 0, 0, 0.05);
    border-width: 10px;
    border-style: solid;
    border-radius: calc(#{$grades-rectangle-border-radius} + 10px);

    @include lg() {
        border-width: 20px;
        border-radius: calc(#{$grades-rectangle-border-radius} + 20px);
    }
    
    width: $grades-rectangle-size-mobile;
    height: $grades-rectangle-size-mobile;

    @include lg() {
        width: $grades-rectangle-size-desktop;
        height: $grades-rectangle-size-desktop;
    }
}

.grades-rectangle--grade-container {
    // Needs to be set so the grid items don't increase their height on hover
    height: $grades-rectangle-cell-size-mobile;
    width: $grades-rectangle-cell-size-mobile;

    @include lg() {
        height: $grades-rectangle-cell-size-desktop;
        width: $grades-rectangle-cell-size-desktop;
    }
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
        transition: all 0.3s ease-in-out;
        margin-top: 10px;

        @include lg() {
            margin-top: 20px;
        }
    }
    &:hover > span {
        @include lg() {
            margin-top: 5px;
            margin-bottom: 0px;
        }
    }

    > img {
        transition: all 0.3s ease-in-out;
        height: 20px;
        margin-top: -10px;

        @include lg() {
            height: 50px;
            margin-top: 0px;
        }
    }
    &:hover > img {
        @include lg() {
            transform: scale(0.80);
            margin-top: -10px;
        }
    }

    &--more {
        opacity: 1;
        transition: all 0.3s ease-in-out;

        @include lg() {
            opacity: 0;
        }
    }
    &:hover &--more {
        opacity: 1;
    }
    
    &--topleft {
        background-color: $color-grades-a;
        // background-color: $color-support-a;
        border-top-left-radius: $grades-rectangle-border-radius;
    }
    &--topright {
        background-color: $color-grades-b;
        // background-color: $color-support-b;
        border-top-right-radius: $grades-rectangle-border-radius;
    }
    &--bottomleft {
        background-color: $color-grades-c;
        // background-color: $color-reservation;
        border-bottom-left-radius: $grades-rectangle-border-radius;
    }
    &--bottomright {
        background-color: $color-grades-d;
        // background-color: $color-cta;
        border-bottom-right-radius: $grades-rectangle-border-radius;
    }
}
</style>
