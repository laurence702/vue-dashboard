<template>
    <div class="sidebar">
        <div class="title d-flex">
            <div class="profile_image">
                <Profile/>
            </div>
            <div class="description">
                <p class="description_name">Sarah Cody</p>
                <small class="description_email">sarah@gmail.com</small>
            </div>
        </div>
        <div class="menu-items">
            <router-link to="/" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-th-large"></i>
                    Dashboard
                </div>
            </router-link>
            <router-link to="/people" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-commenting-o"></i>
                    People
                </div>
            </router-link>
            <router-link to="/user" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-group"></i>
                    User groups
                </div>
            </router-link>
            <router-link to="/transaction" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-line-chart"></i>
                    Transactions
                </div>
            </router-link>
            <hr/>
            <router-link to="/settings" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-gear"></i>
                    Settings
                </div>
            </router-link>

            <router-link to="/api" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-key"></i>
                    API key
                </div>
            </router-link>

            <router-link to="/logout" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <i class="fa fa-sign-out"></i>
                    Logout
                </div>
            </router-link>

            <button class="btn btn-top d-flex mt-3">
                <p class="top-up mb-0"><i class="fa fa-long-arrow-up"></i></p>
                Top up
            </button>
        </div>
    </div>
</template>

<script>
import Profile from '../components/Profile'
export default {
    name: 'Sidebar',
    components:{
        Profile
    }
}
</script>

<style lang="scss" scoped>
    .sidebar{
        box-shadow: 0px 0px 17px rgb(8 37 100 / 9%);
        background: white;
        z-index: 1000;
        height: auto;
        padding: 12%;
        hr{
            width: 100%;
            border: 1px solid #ECEDEF;
        }
        .title {
            .description{
                &_name{
                    margin-bottom: 0px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 26px;
                    color: #1E1E2F;
                }
                &_email{
                    font-size: 12px;
                    line-height: 26px;
                    color: #898CA6;
                }
            }
        }
        .menu-items {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            .side-btn {
                border: none;
                padding: 12px 0px;
                cursor: pointer;
                margin-bottom: 15px;
                font-family: Graphik;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 20px;
                color: #898CA6;
                text-align: left;
                background-color: white;
                &:focus{
                    outline: none;
                }
                &.active{
                    position: relative;
                    background-color: #F6F6F8;
                    color: #001233;
                    border-radius: 5%;
                }
                .fa{
                    margin-left: 15px;
                    margin-right: 15px;
                    font-size: 20px;
                    vertical-align: middle;
                }
            }
        }
    }

</style>
