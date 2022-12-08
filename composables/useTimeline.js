import { onBeforeUnmount, useContext } from '@nuxtjs/composition-api'

export const useTimeline = () => {
    const { $gsap } = useContext()
    const timeline = $gsap.timeline()

    onBeforeUnmount(() => {
        timeline.kill()
    })

    return { timeline }
}
