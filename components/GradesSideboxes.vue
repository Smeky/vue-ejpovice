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
                <img :src="sidebox.icon" />
                <h2 class="text-lg-button uppercase ml-5">{{ sidebox.title }}</h2>
            </div>

            <div v-for="(paragraph, index) in sidebox.paragraphs"
                 :key="`sidebox-${sidebox.name}-p${index}`"
                 class="mb-16 lg:mb-28"
                 :class="sidebox.paragraphsClass"
            >
                <h3 class="text-sm-title mb-4">{{ paragraph.title }}</h3>
                <p class="text-lg-paragraph mb-16">{{ paragraph.text }}</p>
            </div>

            <div class="flex items-center">
                <div class="button--rounded button--white">
                    <IconArrow color="#000" />
                </div>

                <span class="text-lg-button uppercase ml-5">další: vysoký komfort</span>
            </div>
        </SideBox>
    </div>
</template>

<script>
export default {
    emits: ['close'],
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
                icon: require('~/assets/icons/grade-health.svg'),
                title: 'zdravé bydlení',
                textColor: '#fff',
                sideboxClass: 'grade-bg--health',
                paragraphsClass: 'color-white',
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
                icon: require('~/assets/icons/grade-comfort.svg'),
                title: 'vysoký komfort',
                sideboxClass: 'grade-bg--comfort',
                paragraphsClass: 'color-black',
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
                icon: require('~/assets/icons/grade-savings.svg'),
                title: 'úspora nákladů',
                sideboxClass: 'grade-bg--savings',
                paragraphsClass: 'color-white',
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
                icon: require('~/assets/icons/grade-gentle.svg'),
                title: 'šetrnost stavby',
                sideboxClass: 'grade-bg--gentle',
                paragraphsClass: 'color-black',
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
.sidebox.grade-bg--health {
    background-color: $color-grades-a;
}
.sidebox.grade-bg--comfort {
    background-color: $color-grades-b;
}
.sidebox.grade-bg--savings {
    background-color: $color-grades-c;
}
.sidebox.grade-bg--gentle {
    background-color: $color-grades-d;
}
</style>
