<template>
    <div class="about-schedule">
        <h3 class="text-md-title mb-sm">Harmonogram výstavby</h3>
        <div class="about-schedule--bar mb-sm">
            <PageAboutScheduleItem
                v-for="item in items"
                :key="item.id"
                :label="item.label"
                :date="item.date"
                :finished="item.finished"
            />
        </div>

        <p class="text-sm-paragraph max-w-[480px] mb-8">
            V závislosti na stavu výstavby je třeba věnovat pozornost podmínkám financování. Podrobné informace žádejte od našich makléřů prodeje.
        </p>

        <div>
            <NuxtLink :to="{ name: 'financing' }">
                <ButtonRounded outline>
                    více o financování
                </ButtonRounded>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { id: 'schedule1', label: 'zahájení stavby',  date: '04/2022', finished: true },
            { id: 'schedule2', label: 'hrubá stavba',     date: '04/2022', finished: false },
            { id: 'schedule3', label: 'omítky',           date: '04/2022', finished: false },
            { id: 'schedule4', label: 'kolaudace',        date: '04/2022', finished: false },
            { id: 'schedule5', label: 'předání klientům', date: '04/2022', finished: false },
        ]
    })
}
</script>

<style lang="scss">
.about-schedule {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-schedule--bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1px;
    border-radius: 80px;
    overflow: hidden;
}
</style>
