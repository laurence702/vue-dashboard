<template>
    <div class="profile_image_content mr-2">
        <img src="../assets/profile_image.svg" alt="Profile" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .profile_image{
        .profile_image_content{
            background-color: #ffd590;
            border-radius: 50%;
            height: fit-content;
        }
        .profile_name{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 16px;
            color: #1D2029;
            margin: auto;
            h6{
                margin-bottom: 0;
            }
        }
    }
</style>