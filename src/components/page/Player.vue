<template>
    <!-- <iframe id="iframe_player" width="100%" :src="src" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no">
            </iframe> -->
    <div id="iframe_player">

    </div>
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
            if (url.indexOf('http') > 0) {
                this.src = 'http://www.rejuwang.com' + url;
            } else {
                this.src = url;
            }
            console.log(this.src);
            $.ajax(this.src, {
                dataType: 'html',
                crossDomain: true,
                success: data => {
                    console.log("success");
                    if (data && data.resultcode == '200') {
                        console.log(data.result);
                    }
                },
                error: err => {
                    console.log("err");
                }
            })
            // this.$http.get(this.src)
            //         .then(res => {
            //             console.log(res.data);
            //         }).catch(err => {
            //             console.log(err);
            //         })
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


