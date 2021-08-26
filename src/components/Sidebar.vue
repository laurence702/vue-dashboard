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
                    <!-- <i class="fa fa-th-large"></i> -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22174 0H6.66521C7.8905 0 8.88695 0.97456 8.88695 2.17293V6.51879C8.88695 7.71717 7.8905 8.69173 6.66521 8.69173H2.22174C0.996449 8.69173 0 7.71717 0 6.51879V2.17293C0 0.97456 0.996449 0 2.22174 0ZM13.3348 0H17.7783C19.0036 0 20 0.97456 20 2.17293V6.51879C20 7.71717 19.0036 8.69173 17.7783 8.69173H13.3348C12.1095 8.69173 11.1131 7.71717 11.1131 6.51879V2.17293C11.1131 0.97456 12.1095 0 13.3348 0ZM6.66521 10.8644H2.22174C0.996449 10.8644 0 11.839 0 13.0373V17.3832C0 18.5816 0.996449 19.5561 2.22174 19.5561H6.66521C7.8905 19.5561 8.88695 18.5816 8.88695 17.3832V13.0373C8.88695 11.839 7.8905 10.8644 6.66521 10.8644ZM13.3348 10.8644H17.7783C19.0036 10.8644 20 11.839 20 13.0373V17.3832C20 18.5816 19.0036 19.5561 17.7783 19.5561H13.3348C12.1095 19.5561 11.1131 18.5816 11.1131 17.3832V13.0373C11.1131 11.839 12.1095 10.8644 13.3348 10.8644Z"/>
                        </mask>
                        <path d="M6.66521 -1.5H2.22174V1.5H6.66521V-1.5ZM10.3869 2.17293C10.3869 0.114897 8.68734 -1.5 6.66521 -1.5V1.5C7.09366 1.5 7.38695 1.83422 7.38695 2.17293H10.3869ZM10.3869 6.51879V2.17293H7.38695V6.51879H10.3869ZM6.66521 10.1917C8.68734 10.1917 10.3869 8.57683 10.3869 6.51879H7.38695C7.38695 6.8575 7.09366 7.19173 6.66521 7.19173V10.1917ZM2.22174 10.1917H6.66521V7.19173H2.22174V10.1917ZM-1.5 6.51879C-1.5 8.57683 0.199606 10.1917 2.22174 10.1917V7.19173C1.79329 7.19173 1.5 6.8575 1.5 6.51879H-1.5ZM-1.5 2.17293V6.51879H1.5V2.17293H-1.5ZM2.22174 -1.5C0.199606 -1.5 -1.5 0.114897 -1.5 2.17293H1.5C1.5 1.83422 1.79329 1.5 2.22174 1.5V-1.5ZM17.7783 -1.5H13.3348V1.5H17.7783V-1.5ZM21.5 2.17293C21.5 0.114898 19.8004 -1.5 17.7783 -1.5V1.5C18.2067 1.5 18.5 1.83422 18.5 2.17293H21.5ZM21.5 6.51879V2.17293H18.5V6.51879H21.5ZM17.7783 10.1917C19.8004 10.1917 21.5 8.57683 21.5 6.51879H18.5C18.5 6.8575 18.2067 7.19173 17.7783 7.19173V10.1917ZM13.3348 10.1917H17.7783V7.19173H13.3348V10.1917ZM9.61308 6.51879C9.61308 8.57683 11.3127 10.1917 13.3348 10.1917V7.19173C12.9064 7.19173 12.6131 6.8575 12.6131 6.51879H9.61308ZM9.61308 2.17293V6.51879H12.6131V2.17293H9.61308ZM13.3348 -1.5C11.3127 -1.5 9.61308 0.114897 9.61308 2.17293H12.6131C12.6131 1.83422 12.9064 1.5 13.3348 1.5V-1.5ZM2.22174 12.3644H6.66521V9.3644H2.22174V12.3644ZM1.5 13.0373C1.5 12.6986 1.79329 12.3644 2.22174 12.3644V9.3644C0.199606 9.3644 -1.5 10.9793 -1.5 13.0373H1.5ZM1.5 17.3832V13.0373H-1.5V17.3832H1.5ZM2.22174 18.0561C1.79329 18.0561 1.5 17.7219 1.5 17.3832H-1.5C-1.5 19.4412 0.199606 21.0561 2.22174 21.0561V18.0561ZM6.66521 18.0561H2.22174V21.0561H6.66521V18.0561ZM7.38695 17.3832C7.38695 17.7219 7.09366 18.0561 6.66521 18.0561V21.0561C8.68734 21.0561 10.3869 19.4412 10.3869 17.3832H7.38695ZM7.38695 13.0373V17.3832H10.3869V13.0373H7.38695ZM6.66521 12.3644C7.09366 12.3644 7.38695 12.6986 7.38695 13.0373H10.3869C10.3869 10.9793 8.68734 9.3644 6.66521 9.3644V12.3644ZM17.7783 9.3644H13.3348V12.3644H17.7783V9.3644ZM21.5 13.0373C21.5 10.9793 19.8004 9.3644 17.7783 9.3644V12.3644C18.2067 12.3644 18.5 12.6986 18.5 13.0373H21.5ZM21.5 17.3832V13.0373H18.5V17.3832H21.5ZM17.7783 21.0561C19.8004 21.0561 21.5 19.4412 21.5 17.3832H18.5C18.5 17.7219 18.2067 18.0561 17.7783 18.0561V21.0561ZM13.3348 21.0561H17.7783V18.0561H13.3348V21.0561ZM9.61308 17.3832C9.61308 19.4412 11.3127 21.0561 13.3348 21.0561V18.0561C12.9064 18.0561 12.6131 17.7219 12.6131 17.3832H9.61308ZM9.61308 13.0373V17.3832H12.6131V13.0373H9.61308ZM13.3348 9.3644C11.3127 9.3644 9.61308 10.9793 9.61308 13.0373H12.6131C12.6131 12.6986 12.9064 12.3644 13.3348 12.3644V9.3644Z" fill="#898CA6" mask="url(#path-1-inside-1)"/>
                    </svg>
                    <span>Dashboard</span>
                </div>
            </router-link>
            <router-link to="/people" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-commenting-o"></i> -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0474 1.6668C7.12241 1.65498 4.40466 3.1726 2.88377 5.66702C1.36288 8.16145 1.26079 11.2687 2.61466 13.8573L2.7816 14.1827C2.91843 14.4387 2.94705 14.7387 2.86109 15.016C2.62287 15.6487 2.42376 16.2954 2.26489 16.9525C2.26489 17.2858 2.36028 17.4763 2.718 17.4684C3.3516 17.3284 3.97558 17.1482 4.58612 16.9287C4.84907 16.8563 5.12866 16.873 5.38106 16.9763C5.61159 17.0874 6.08061 17.3731 6.09651 17.3731C9.15963 18.9838 12.9007 18.5394 15.4998 16.2562C18.0989 13.9731 19.0166 10.325 17.8064 7.08676C16.5961 3.84847 13.5093 1.69218 10.0474 1.6668V1.6668Z" stroke="#898ca6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <ellipse cx="6.07264" cy="10.0001" rx="0.397471" ry="0.396825" fill="#001233" stroke="#001233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <ellipse cx="10.0474" cy="10.0001" rx="0.397471" ry="0.396825" fill="#001233" stroke="#001233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <ellipse cx="14.0221" cy="10.0001" rx="0.397472" ry="0.396825" fill="#001233" stroke="#001233" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>People</span>
                </div>
            </router-link>
            <router-link to="/user" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-group"></i> -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5948 10.9319C19.1972 10.9319 20.497 9.63296 20.497 8.03063C20.497 6.4283 19.1972 5.12938 17.5948 5.12938" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.9291 14.0847C19.4076 14.1177 19.8833 14.1856 20.3517 14.291C21.0026 14.4184 21.7854 14.6852 22.0641 15.2691C22.2419 15.6431 22.2419 16.0785 22.0641 16.4534C21.7863 17.0373 21.0026 17.3032 20.3517 17.437" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.28998 10.9319C4.68765 10.9319 3.38782 9.63296 3.38782 8.03063C3.38782 6.4283 4.68765 5.12938 6.28998 5.12938" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.95577 14.0847C4.47727 14.1177 4.00152 14.1856 3.5331 14.291C2.88227 14.4184 2.09943 14.6852 1.82168 15.2691C1.64293 15.6431 1.64293 16.0785 1.82168 16.4534C2.09852 17.0373 2.88227 17.3032 3.5331 17.437" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9377 14.7095C15.1846 14.7095 17.9584 15.2009 17.9584 17.1671C17.9584 19.1325 15.2029 19.6421 11.9377 19.6421C8.68997 19.6421 5.91705 19.1508 5.91705 17.1845C5.91705 15.2183 8.67255 14.7095 11.9377 14.7095Z" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9377 11.9049C9.79638 11.9049 8.07947 10.188 8.07947 8.04575C8.07947 5.90442 9.79638 4.1875 11.9377 4.1875C14.0791 4.1875 15.796 5.90442 15.796 8.04575C15.796 10.188 14.0791 11.9049 11.9377 11.9049Z" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>User groups</span>
                </div>
            </router-link>
            <router-link to="/transaction" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-line-chart"></i> -->
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.24481 13.7815L8.23795 9.89131L11.6521 12.5732L14.5812 8.79291" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="17.9954" cy="3.20023" r="1.9222" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9245 2.12013H5.65673C2.64529 2.12013 0.778015 4.25286 0.778015 7.2643V15.3467C0.778015 18.3581 2.60868 20.4817 5.65673 20.4817H14.2609C17.2723 20.4817 19.1396 18.3581 19.1396 15.3467V8.30778" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Transactions</span>
                </div>
            </router-link>
            <hr/>
            <router-link to="/settings" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-gear"></i> -->
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6066 6.62357L17.9901 5.54348C17.4686 4.62956 16.3129 4.31428 15.4065 4.83867V4.83867C14.9751 5.0953 14.4602 5.16811 13.9756 5.04104C13.4909 4.91398 13.0762 4.59747 12.8229 4.16133C12.6599 3.8841 12.5724 3.56835 12.5691 3.246V3.246C12.5838 2.72918 12.3907 2.22836 12.0337 1.85763C11.6768 1.48689 11.1865 1.27782 10.6744 1.27803H9.43247C8.93081 1.27803 8.44983 1.47987 8.09595 1.8389C7.74207 2.19793 7.54448 2.68455 7.54689 3.19108V3.19108C7.53202 4.23688 6.6881 5.07677 5.65224 5.07666C5.33299 5.07331 5.02027 4.9849 4.74571 4.82037V4.82037C3.83934 4.29597 2.68361 4.61125 2.1621 5.52517L1.50033 6.62357C0.979453 7.53635 1.28745 8.70256 2.18929 9.23227V9.23227C2.77551 9.574 3.13663 10.2055 3.13663 10.889C3.13663 11.5725 2.77551 12.204 2.18929 12.5458V12.5458C1.2886 13.0719 0.980262 14.2353 1.50033 15.1453V15.1453L2.12584 16.2346C2.37019 16.6797 2.78016 17.0082 3.26505 17.1474C3.74993 17.2865 4.26974 17.2249 4.70945 16.976V16.976C5.14171 16.7213 5.65682 16.6515 6.14028 16.7822C6.62373 16.9128 7.03548 17.233 7.284 17.6716C7.44695 17.9488 7.53451 18.2646 7.53782 18.587V18.587C7.53782 19.6435 8.38609 20.5 9.43247 20.5H10.6744C11.7173 20.5 12.5641 19.6491 12.5691 18.5961V18.5961C12.5666 18.088 12.7655 17.6 13.1213 17.2407C13.4772 16.8814 13.9605 16.6806 14.4637 16.6831C14.7822 16.6917 15.0936 16.7797 15.3702 16.9394V16.9394C16.2743 17.4653 17.4292 17.1543 17.9539 16.2437V16.2437L18.6066 15.1453C18.8592 14.7075 18.9285 14.186 18.7992 13.6963C18.6699 13.2067 18.3526 12.7893 17.9176 12.5366V12.5366C17.4826 12.2839 17.1653 11.8665 17.036 11.3769C16.9066 10.8873 16.976 10.3658 17.2286 9.92792C17.3929 9.63829 17.6308 9.39815 17.9176 9.23227V9.23227C18.814 8.70285 19.1213 7.54345 18.6066 6.63272V6.63272V6.62357Z" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <ellipse cx="10.058" cy="10.889" rx="2.61081" ry="2.63616" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Settings</span>
                </div>
            </router-link>

            <router-link to="/api" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-key"></i> -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3344 0.7502H5.66537C2.64437 0.7502 0.750366 2.8892 0.750366 5.9162V14.0842C0.750366 17.1112 2.63537 19.2502 5.66537 19.2502H14.3334C17.3644 19.2502 19.2504 17.1112 19.2504 14.0842V5.9162C19.2504 2.8892 17.3644 0.7502 14.3344 0.7502Z" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69226 10.0002C8.69226 11.0222 7.86326 11.8522 6.84026 11.8522C5.81826 11.8522 4.98926 11.0222 4.98926 10.0002C4.98926 8.9782 5.81826 8.1482 6.84026 8.1482C7.86326 8.1482 8.69226 8.9782 8.69226 10.0002Z" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.69226 10.0002H15.0103V11.8522" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1816 11.8517V9.9997" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>API key</span>
                </div>
            </router-link>

            <router-link to="/logout" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    <!-- <i class="fa fa-sign-out"></i> -->
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.016 5.3895V4.4565C13.016 2.4215 11.366 0.7715 9.33103 0.7715H4.45603C2.42203 0.7715 0.772034 2.4215 0.772034 4.4565V15.5865C0.772034 17.6215 2.42203 19.2715 4.45603 19.2715H9.34103C11.37 19.2715 13.016 17.6265 13.016 15.5975V14.6545" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.8096 10.0214H7.76855" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8812 7.1063L19.8092 10.0213L16.8812 12.9373" stroke="#898CA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Logout</span>
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
// import Icon from '../components/Icon'
export default {
    name: 'Sidebar',
    components:{
        Profile
        // Icon
    }
}
</script>

<style lang="scss" scoped>
    .sidebar{
        box-shadow: 0px 0px 17px rgba(8,37,100,0.09);
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
                .link-container{
                    padding-left: 15px;
                    span{
                        padding-left: 15px;
                        vertical-align: super;
                    }
                    svg{
                        &:hover{
                            fill: red;
                        }
                    }
                }
            }
        }
    }

</style>
