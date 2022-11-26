
export default ({ store }) => {
    window.addEventListener('resize', () => {
        store.commit('SET_IS_MOBILE', window.innerWidth < 768)
    })

    store.commit('SET_IS_MOBILE', window.innerWidth < 768)
}
