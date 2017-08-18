<template>
    <mu-appbar>
        <div class="logo" slot="left">
            <a href="#" class="logo-a">
                <img class="logo-img" src="./../../assets/logo.png" />
            </a>
        </div>
        <div class="nav">
            <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
                <mu-tab value="tab1" title="电影" />
                <mu-tab value="tab2" title="电视" />
                <mu-tab value="tab3" title="动漫" />
                <mu-tab value="tab4" title="综艺" />
            </mu-tabs>
        </div>
        <div id="search" slot="right">
            <mu-text-field icon="search" class="appbar-search-field" hintText="请输入搜索内容" />
        </div>
    </mu-appbar>
</template>
<script>

export default {
    name: 'titleBar',
    data() {
        return {
            activeTab: 'tab1',
            'appbar-search-focus': 'appbar-search-focus'
        }
    },
    methods: {
        handleTabChange(value) {
            this.activeTab = value
        }
    }
}
</script>

<style lang="less" scoped>
.logo {
    height: 100%;
    .logo-a {
        height: 100%;
        .logo-img {
            margin-top: 16px;
        }
    }
}

@media screen and (max-width:640px) {
    #search {
        display: none
    }
}

.tab {
    margin: 0 auto;
    padding: 0;
}

.nav {
    display: inline-block;
    width: 50%;
    margin: 0 auto;
}

.appbar-search-field {
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
        color: #FFF;
    }
    .mu-text-field-hint {
        color: fade(#FFF, 54%);
    }
    .mu-text-field-focus-line {
        background-color: #FFF;
    }
}
</style>
