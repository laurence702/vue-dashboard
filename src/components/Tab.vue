<template>
    <div v-show="isActive">
        <slot> </slot>
    </div>
</template>
<script>
// import {inject} from 'vue'
export default {
    props: {
        name: {required: true},
        selected: { default: false}
    },
    data: () => {
        return {
            isActive: false,
        }
    },
    mounted(){
        this.isActive = this.selected;
    }
    // props: ['title'],
    // setup(){
    //     const selectedTitle = inject("selectedTitle")
    //     return{
    //         selectedTitle
    //     }
    // }
}
</script>
<style lang="scss" scoped>

</style>