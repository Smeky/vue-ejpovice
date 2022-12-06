<template>
    <div class="footer">
        <img class="footer--logo" src="~/assets/images/logo_BC.png" />

        <div class="flex items-center justify-between">
            <div class="flex flex-col text-tn-paragraph">
                <span>Broker Consulting, a. s.</span>
                <span>© {{new Date().getFullYear()}} | Všechna práva vyhrazena</span>
                <div>
                    <a class="underline" href="">Prohlášení developera</a>
                    <a class="underline" href="">Cookies</a>
                </div>
            </div>

            <div class="flex flex-col items-end text-tn-paragraph">
                <span>Created</span>
                <span>with passion by</span>
                <a class="underline" href="">Red Peppers</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    position: relative;
    padding: 40px 20px;

    @include lg() {
        padding: 60px;
    }
}

.footer--logo {
    margin-bottom: 40px;

    @include lg() {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-bottom: 0;
    }
}
</style>
