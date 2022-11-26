
export const state = () => ({
    isMobile: false,
    isMenuOpen: false,
})

export const mutations = {
    SET_IS_MOBILE: (state, isMobile) => { state.isMobile = isMobile },
    SET_MENU_OPEN: (state, value) => { state.isMenuOpen = value }    
}

export const actions = {
    toggleMenu({ commit, state }) {
        commit('SET_MENU_OPEN', !state.isMenuOpen)
    },
    closeMenu({ commit }) {
        commit('SET_MENU_OPEN', false)
    }
}

export const getters = {

}
