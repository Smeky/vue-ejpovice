<template>
    <div class="contact-form--container">
        <!-- not submitted -->
        <form v-if="!submitted" class="contact-form" ref="form" @submit.prevent="handleSubmit">
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
        <div v-else class="text-center">
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
export default {
    data: () => ({
        submitted: false,
    }),
    methods: {
        handleSubmit() {
            console.log('TODO: Submit the form')
            this.submitted = true
        },
    }
}
</script>

<style lang="scss">
.contact-form {

}
</style>
