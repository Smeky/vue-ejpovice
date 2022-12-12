<template>
    <div class="contact-form--container">
        <div class="contact-form--background" ref="background" :style="{ 'background-color': backgroundColor }"></div>

        <!-- not submitted -->
        <form class="contact-form" ref="form" @submit.prevent="handleSubmit">
            <h3 class="text-md-capital uppercase text-center">napište nám, ozveme se zpět</h3>

            <div class="my-10">
                <ContactFormField name="firstname" required>jméno</ContactFormField>
                <ContactFormField name="lastname" required>příjmení</ContactFormField>
                <ContactFormField name="email" required>email</ContactFormField>
                <ContactFormField name="phone">telefon</ContactFormField>
                <ContactFormField name="message">vaše zpráva</ContactFormField>
            </div>

            <p class="text-tn-paragraph">Odesláním formuláře souhlasím se zpracováním svých osobních údajů, uvedených víše, za účelem získání podrobnějších informací o projektu a sjednáním osobní prezentace.</p>
            <br />
            <p class="text-tn-paragraph">Pro bližší informace si prosím prohlédněte Zásady zpracování osobních údajů.</p>

            <div class="flex justify-center my-10">
                <ContactFormSubmit @click="handleSubmit" />
            </div>
        </form>

        <!-- is submitted -->
        <div class="contact-form--sent text-center" ref="formSent">
            <h3 class="text-gt-title mb-10">Díky!</h3>

            <p class="text-md-paragraph">Vaše zpráva byla úspěšně odeslána.</p>
            <p class="text-md-paragraph">Ozveme se Vám zpět nejpozději následující pracovní den.</p>

            <ButtonRounded outline class="mt-10" @click="() => submitted = false">
                zavřít okno
            </ButtonRounded>
        </div>
    </div>
</template>

<script>
import { useTimeline } from '~/composables/useTimeline'

export default {
    setup: () => useTimeline(),
    props: {
        backgroundColor: {
            type: String,
            default: '#E6ECEE',
        }
    },
    data: () => ({
        submitted: false,
    }),
    watch: {
        submitted(isSubmitted) {
            const styles = {
                form: {
                    [true]: { 'opacity': 0, 'z-index': 0, duration: 0.2 },
                    [false]: { 'opacity': 1, 'z-index': 1, duration: 0.2 },
                },
                sent: {
                    [true]: { 'opacity': 1, 'z-index': 1, duration: 0.2 },
                    [false]: { 'opacity': 0, 'z-index': 0, duration: 0.2 },
                },
                background: {
                    [true]: { 'height': '50%', 'top': '25%', duration: 0.3, ease: 'power1.inOut' },
                    [false]: { 'height': '100%', 'top': '0%', duration: 0.3, ease: 'power1.inOut' },
                },
            }

            this.timeline.to(this.$refs.form, { ...styles.form[isSubmitted] })
            this.timeline.to(this.$refs.formSent, { ...styles.sent[isSubmitted] }, '<')
            this.timeline.to(this.$refs.background, { ...styles.background[isSubmitted] }, '<')
        }
    },
    methods: {
        handleSubmit() {
            console.log('TODO: Submit the form')
            this.submitted = true
        },
    }
}
</script>

<style lang="scss">
.contact-form--container {
    position: relative;
}

.contact-form--background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.contact-form {
    opacity: 1; // Change by GSAP
    z-index: 1; // Change by GSAP
    position: relative;
}

.contact-form--sent {
    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
