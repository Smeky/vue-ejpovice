<template>
    <div>
        <SideBox v-for="sidebox in sideboxes"
                 :key="`sidebox-${sidebox.name}`"
                 position="right"
                 :classes="sidebox.sideboxClass"
                 :open="open === sidebox.name"
                 @close="$emit('close')" 
        >
            <div class="flex items-center mb-28">
                <Component :is="sidebox.icon" :color="sidebox.iconColor"></Component>
                <h2 class="text-lg-button uppercase ml-5">
                    {{ sidebox.title }}
                </h2>
            </div>

            <div v-for="(paragraph, index) in sidebox.paragraphs"
                 :key="`sidebox-${sidebox.name}-p${index}`"
                 class="mb-16 lg:mb-28"
            >
                <h3 class="text-sm-title mb-4">{{ paragraph.title }}</h3>
                <p class="text-lg-paragraph mb-16">{{ paragraph.text }}</p>
            </div>

            <div class="grade--button" @click="$emit('next')">
                <div class="grade--button--icon" >
                    <IconArrow :color="sidebox.buttonColors.icon" />
                </div>

                <span class="text-lg-button uppercase ml-5">
                    další: vysoký komfort
                </span>
            </div>
        </SideBox>
    </div>
</template>

<script>
export default {
    emits: ['close', 'next'],
    props: {
        // Name of opened sidebox. If null, no sidebox is opened.
        open: {
            type: String,
            default: null,
            validator: value => ['health', 'comfort', 'savings', 'gentle', null].includes(value)
        }
    },
    data: () => ({
        sideboxes: [
            {
                name: 'health',
                icon: 'IconGradeHealth',
                iconColor: '#fff',
                title: 'zdravé bydlení',
                sideboxClass: ['grade--health'],
                buttonColors: { icon: '#333', bg: '#fff' },
                paragraphs: [
                    { 
                        title: 'Zdravé klima bez prachu a pilu',
                        text: 'Čerstvý vzduch z venku prochází do domu přes prachové a pylové filtry. Výskyt prachu, nečistot a dráždivých alergenů je tak v našich domech téměř omezen. Kvalitní zateplení a technologie řízeného větrání s rekuperací tepla udržují příjemné vnitřní klima v zimě i v létě, aniž byste potřebovali klimatizaci.',
                    }, {
                        title: 'Nastavitelná vlhkost vzduchu',
                        text: 'Optimální hladinu vlhkosti společně s nízkou hladinou škodlivého CO2 udržuje systém automatického větrání, který ji průběžně kontroluje pomocí speciálních čidel. V našich domech se nemnoží plísně, roztoči ani bakterie. Celý systém je nepostradatelný pro celodenní přísun čerstvého vzduchu.',
                    }
                ]
            },
            {
                name: 'comfort',
                icon: 'IconGradeComfort',
                iconColor: '#333',
                title: 'vysoký komfort',
                sideboxClass: 'grade--comfort',
                buttonColors: { icon: '#fff', bg: '#333' },
                paragraphs: [
                    { 
                        title: 'Důmyslně řešené interiéry',
                        text: 'Vnitřní dispozice našich domů jsou promyšleny do posledního detailu. Maximální pohodlí zajistí kvalitní přírodní materiály, dostatek úložných prostor, prostorné místnosti nebo dostatečné prosklení na všechny světové strany',
                    }, {
                        title: 'Lokalita plná zeleně',
                        text: 'Hlavním kritériem pro výběr této lokality byla nespoutaná příroda v těsné blízkosti budoucí výstavby s možností plnohodnotného volnočasového vyžití, které Vám přilehlá přírodní rezervace nabízí.',
                    }
                ]
            },
            {
                name: 'savings',
                icon: 'IconGradeSavings',
                iconColor: '#fff',
                title: 'úspora nákladů',
                sideboxClass: 'grade--savings',
                buttonColors: { icon: '#333', bg: '#fff' },
                paragraphs: [
                    { 
                        title: 'Minimální náklady na vytápění',
                        text: 'Naše pasivní domy a energeticky pasivní domy dokážou uspořit až 85 % nákladů na vytápění oproti běžným novostavbám. Takto nízké spotřeby dosahujeme díky optimálnímu využití sluneční energie, špičkovým izolacím a teplovzdušnému vytápění s rekuperací tepla.',
                    }, {
                        title: 'Obnovitelné zdroje energie',
                        text: 'K běžně nakupované elektrické energii z distribuční sítě využíváme přírodní obnovitelné zdroje jako jsou například fotovoltaické panely pro výrobu elektrické energie, solární panely pro ohřev užitkové vody nebo teplovzdušné vytápění pro výrobu tepla.',
                    }
                ]
            },
            {
                name: 'gentle',
                icon: 'IconGradeGentle',
                iconColor: '#333',
                title: 'šetrnost stavby',
                sideboxClass: 'grade--gentle',
                buttonColors: { icon: '#fff', bg: '#333' },
                paragraphs: [
                    { 
                        title: 'Nízká zátěž životního prostředí',
                        text: 'Provoz našich pasivních domů zatěžuje přírodu až 5x méně než běžná výstavba. Používáním moderních technologií a přírodních zdrojů snižujeme spotřebu energií na minimum a dosahujeme výrazného snížení škodlivých emisí do ovzduší.',
                    }, {
                        title: 'Náskok díky moderním technologiím',
                        text: 'Vzhledem k použití nejmodernějších technologií a špičkových materiálů můžeme nabídnout opravdu luxusní pasivní domy. Díky zdravému vnitřnímu prostředí a promyšleným dispozicím poskytnou maximální komfort celé Vaší rodině. Zároveň šetří životní prostředí i Vaši peněženku.',
                    }
                ]
            }
        ]
    }),
}
</script>

<style lang="scss">
.sidebox.grade--health {
    background-color: $color-grades-a;
    color: $color-white;

    .grade--button--icon {
        background-color: $color-white;
    }
}
.sidebox.grade--comfort {
    background-color: $color-grades-b;
    color: $color-main-text;

    .grade--button--icon {
        background-color: $color-main-text;
    }
}
.sidebox.grade--savings {
    background-color: $color-grades-c;
    color: $color-white;

    .grade--button--icon {
        background-color: $color-white;
    }
}
.sidebox.grade--gentle {
    background-color: $color-grades-d;
    color: $color-main-text;

    .grade--button--icon {
        background-color: $color-main-text;
    }
}

.sidebox .grade--button {
    @include button-base();

    display: flex;
    align-items: center;
    width: fit-content;

    &--icon {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
}

</style>
