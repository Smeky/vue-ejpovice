
export const state = () => ({
    isMobile: false,
    isMenuOpen: false,
    isNavbarStatic: false,

    navigation: [
        { label: 'Kontakt',      route: 'contact' },
        { label: 'Galerie',      route: 'gallery' },
        { label: 'Ke stažení',   route: 'download' },
        { label: 'Financování',  route: 'financing' },
        { label: 'Pasivní domy', route: 'passive' },
        { label: 'Standardy',    route: 'standards' },
        { label: 'Lokalita',     route: 'locality' },
        { label: 'Ceník',        route: 'prices' },
        { label: 'O projektu',   route: 'about' },
    ],
})

export const mutations = {
    SET_IS_MOBILE: (state, isMobile) => { state.isMobile = isMobile },
    SET_MENU_OPEN: (state, value) => { state.isMenuOpen = value },
    SET_NAVBAR_STATIC: (state, value) => { state.isNavbarStatic = value },
    SET_NAVIGATION: (state, navigation) => { state.navigation = navigation },
}

export const getters = {

}

export const actions = {
    toggleMenu({ commit, state }) {
        commit('SET_MENU_OPEN', !state.isMenuOpen)
    },
    closeMenu({ commit }) {
        commit('SET_MENU_OPEN', false)
    },
    
    async fetchNavigation({ state, commit }) {
        if (state.navigation.length > 0)
            return state.navigation
        
        const res = await this.$axios.$get('/api/navigation')
        const data = res.map(item => ({
            label: item.title,
            url: item.path,
        }))

        commit('SET_NAVIGATION', data)
        return data
    }
}
