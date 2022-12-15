import { onBeforeUnmount, useContext } from '@nuxtjs/composition-api'

export const useTimeline = (props = {}) => {
    const { $gsap } = useContext()
    const timeline = $gsap.timeline(props)

    onBeforeUnmount(() => {
        timeline.kill()
    })

    return { timeline }
}
