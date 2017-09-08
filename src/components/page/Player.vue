<template>
    <iframe id="iframe_player" width="100%" height="100%" :src="src" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no">
    </iframe>
</template>
<script>
export default {
    data() {
        return {
            src: null
        }
    },
    methods: {
        handleUrl(url) {
            this.src = url;
        }
    },
    mounted() {
        let url = this.$route.query.url;
        this.handleUrl(url);
    },
    watch: {
        '$route'(to, from) {
            let url = to.query.url;
            this.handleUrl(url);
        }
    }
}
</script>



