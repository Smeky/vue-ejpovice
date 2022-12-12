<template>
    <div class="contact-form-field" 
        :class="{ 'contact-form-field--active': focused || !isValueEmpty }"
        @click="focused = true"
        v-click-outside="() => focused = false"
    >
        <label :for="`field-${name}`" :class="{
            'text-sm-capital': focused || !isValueEmpty,
            'text-md-ui-desc': !focused && isValueEmpty,
        }">
            <slot></slot>
            <span v-if="required">*</span>
        </label>
        <input 
            type="text" 
            :id="`field-${name}`" 
            :name="name" 
            :value="value"
            class="text-md-ui-desc"
            @input="value = $event.target.value"
        />
    </div>
</template>

<script>
export default {
    props: {
        required: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        }
    },
    data: () => ({
        focused: false,
        value: '',
    }),
    computed: {
        isValueEmpty() {
            return this.value === ''
        }
    }
}
</script>

<style lang="scss">
.contact-form-field {
    position: relative;
    width: 100%;
    margin: 30px 0;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba($color-main-text, 0.4);
    transition: all 0.3s ease-in-out;

    &:hover {
        border-bottom-color: $color-main-text;
    }

    > label {
        position: absolute;
        transition: all 0.2s ease-in-out;
        transform: translateY(-50%);
        top: 50%;
        pointer-events: none;
    }

    > input {
        width: 100%;
        border: none;
        background: none;
        outline: none;
        padding: 10px 0;
        color: $color-main-text;
    }
}

.contact-form-field--active {
    border-bottom-color: $color-main-text;

    > label {
        transform: translateY(-60%);
        top: 0;
        opacity: 0.5;
    }
}
</style>
