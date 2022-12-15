<template>
    <div class="locality-distance-block py-20">
        <div class="flex flex-col justify-center mr-32 max-w-[35%]">
            <h2 class="text-lg-title color-main-green">
                Perfektní dostupnost do města i na dálnici D5
            </h2>

            <p class="text-lg-paragraph my-8 lg:my-16">
                Do Plzně, Rokycan či na dálnici D5 (Praha / Rozvadov) dojedete v řádu minut. Zastávky MHD a vlaku se nachází v dochozí vzdálenosti od projektu. 
            </p>
        </div>

        <div class="locality-distance-block--bars gap-y-5">
            <div class="locality-distance-block--bar">
                <div id="distTrigger1">
                    <span class="text-md-capital uppercase">Autem do rokycan</span>
                    <span class="text-md-title">5 min.</span>
                </div>
            </div>
            <div class="locality-distance-block--bar">
                <div id="distTrigger2">
                    <span class="text-md-capital uppercase">Autem do OC rokycanská</span>
                    <span class="text-md-title">6 min.</span>
                </div>
            </div>
            <div class="locality-distance-block--bar">
                <div id="distTrigger3">
                    <span class="text-md-capital uppercase">Autem do centra Plzně</span>
                    <span class="text-md-title">10 min.</span>
                </div>
            </div>
            <div class="locality-distance-block--bar">
                <div id="distTrigger4">
                    <span class="text-md-capital uppercase">MHD na hlavní nádraží</span>
                    <span class="text-md-title">13 min.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTimeline } from '~/composables/useTimeline'

export default {
    mounted() {
        useTimeline({
            scrollTrigger: {
                trigger: '.locality-distance-block',
                start: 'top 70%',
                toggleActions: 'play none none none',
                onEnter: ({ animation }) => {
                    animation.to('#distTrigger1', { width: '65%', duration: 0.5 })
                    animation.to('#distTrigger2', { width: '70%', duration: 0.5 }, '<')
                    animation.to('#distTrigger3', { width: '90%', duration: 0.5 }, '<')
                    animation.to('#distTrigger4', { width: '95%', duration: 0.5 }, '<')
                },
            }
        })
    }
}
</script>

<style lang="scss">
.locality-distance-block {
    display: flex;

    > div {
        flex: 1;
    }
}

.locality-distance-block--bars {
    display: flex;
    flex-direction: column;
}

.locality-distance-block--bar {
    position: relative;
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;

    color: $color-white;
    background-color: $color-medium-divider;
    border-radius: 50px;
    overflow: hidden;

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: $color-main-green;
        border-radius: 50px;
        padding: 0 30px;
    }
}
</style>
