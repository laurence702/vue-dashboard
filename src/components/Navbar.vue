<template>
    <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand d-flex col-lg-2" href="#">
                <img src="../assets/logo_one.svg" alt="Logo" />
                <span class="mt-1 ml-1">Test Project</span>
            </a>
            
            <form class="form-inline my-2 my-lg-0 mr-auto px-4 col-lg-6">
                <input class="form-control mr-sm-2 w-100" type="search" placeholder="search" aria-label="Search">
                <span><i class="fa fa-search"></i></span>
            </form>

            <div class="navbar-nav mt-2 mt-lg-0">
                <div class="notification">
                    <span><i class="fa fa-bell"></i></span>
                    <span class="badge">21</span>
                </div>
                <div class="profile_image d-flex">
                    <Profile />
                    <span class="profile_name">
                        <h6>Hi, Sarah Cody <i class="fa fa-angle-down"></i></h6>
                    </span>
                </div>
            </div>
        </div>
    </nav>    
</template>

<script>
import Profile from '../components/Profile'
export default {
    name: 'Navbar',
    components:{
        Profile
    }
}
</script>

<style lang="scss" scoped>
    nav{
        background: white;
        box-shadow: 0px 0px 17px rgb(8 37 100 / 9%);
        z-index: 1000000;
        padding: 1% 2%;
        .navbar-brand{
            // font-family: 'Open Sans';
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
            color: #000000;
        }
        form{
            font-size: 14px;
            line-height: 19px;
            color: #828282;
            input{
                padding-left: 35px;
                border: 1px solid #E0E0E0;
                border-radius: 4px;
                box-shadow: none !important;
                outline: none !important;
                &:focus{
                    border: 1px solid #E0E0E0;
                }
                &::placeholder{
                    font-size: 13px;
                    font-style: normal;
                    font-weight: normal;
                }
            }
            span{
                position: absolute;
                top: 25%;
                padding-left: 11px;
            }
        }
        .navbar-nav{
            .notification {
                color: black;
                padding: 8px 26px;
                position: relative;
                display: inline-block;
                .badge {
                    position: absolute;
                    top: 5px;
                    right: 17px;
                    padding: 1px 4px;
                    border-radius: 50%;
                    background: #0DC671;
                    color: white;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 10px;
                    line-height: 14px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.05em;
                }
            }
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
        }
    }
</style>