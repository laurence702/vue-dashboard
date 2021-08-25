<template>
    <div class="container p-0">
        <div class="body_container">
            <h6>People</h6>
        </div>
        <Rightbar/>
    </div>
</template>

<script>
    import Rightbar from '../components/Rightbar'
    export default {
        name: 'People',
        components: {
            Rightbar
        }
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    width: 100%;
    .body_container{
        width: 74%;
    }

}
</style>