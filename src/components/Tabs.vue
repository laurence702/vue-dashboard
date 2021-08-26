<template>
    <article>
        <header class="tabs">
            <ul> 
                <li v-for="(tab, index) in tabs" :key="index"> 
                    <div class="nav-item"
                        :class="{'is-active': tab.isActive}"
                        @click="selectedTab(tab)">
                        {{tab.name}}
                    </div>
                </li>
            </ul>
        </header>
        <section class="tabs-details">
            <slot></slot>
        </section>
    </article>
</template>
<script>
export default {
    data:() =>{
        return{
            tabs: []
        }
    },
    methods:{
        selectedTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            })
        }
    },
    created(){
        this.tabs = this.$children;
    }
}
</script>
<style lang="scss" scoped>
    .tabs{
        border-bottom:1px solid #D9D9D9;
        margin: 0 10px;
    }

    .tabs-details{
        padding:10px;
    }

    ul{
        display: flex;
        padding: 0px;
        list-style-type: none ;
        margin-bottom: 0;
        li{
            margin-right: 40px;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
        }
        .nav-item{
            cursor: pointer;
            color: #9FA2B8;
            &.is-active{
                color: #0052CE;
                border-bottom: 2px solid blue;
            }
        }
    }
</style>