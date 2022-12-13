<template>
    <svg width="20" height="20">
        <path d="M12.131 16.169a.746.746 0 0 1-.057-1.049l4.255-4.7H1.742a.742.742 0 0 1 0-1.484h14.587l-4.255-4.7a.746.746 0 0 1 1.106-1L19 9.681l-5.82 6.433a.744.744 0 0 1-.552.247.735.735 0 0 1-.497-.192z"
              :fill="color" />
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#fff'
        }
    }
}
</script>
