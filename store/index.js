
export const state = () => ({
    isMobile: false,
    isMenuOpen: false,

    navigation: [
        { label: 'Placeholders:', url: '' },
        { label: 'Home', url: '' },
        { label: 'About', url: '' },
        { label: 'Contact', url: '' },
    ],
})

export const mutations = {
    SET_IS_MOBILE: (state, isMobile) => { state.isMobile = isMobile },
    SET_MENU_OPEN: (state, value) => { state.isMenuOpen = value },
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
