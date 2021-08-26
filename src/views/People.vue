<template>
    <div class="container p-0">
        <div class="body_container">
            <div class="people_content">
                <!-- <Filter/> -->
                <h6>People</h6>
                <Tabs>
                    <Tab name="All" selected="true">
                        <div class="filter_part mt-2 mb-4 pull-right">
                            <form class="col-lg-12 p-0 form-inline">
                                <div class="form-group filter_form d-flex mr-3">
                                    <p class="filter pt-2">Filter:</p>
                                    <div class="select_section">
                                        <select>
                                            <option value="recent">Most Recent</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group search_input">
                                    <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search here" aria-label="Search">
                                    <span><i class="fa fa-search"></i></span>
                                </div>
                            </form>
                        </div>
                        <div class="all_persons">
                            <div class="person_container p-3" v-for="person in persons" :key="person"> 
                                <div class="info text-right">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.9">
                                        <path d="M10 0C4.47254 0 0 4.47293 0 10C0 15.5275 4.47293 20 10 20C15.5275 20 20 15.5271 20 10C20 4.47254 15.527 0 10 0ZM10 18.4375C5.33621 18.4375 1.5625 14.6635 1.5625 10C1.5625 5.33621 5.33652 1.5625 10 1.5625C14.6638 1.5625 18.4375 5.33652 18.4375 10C18.4375 14.6638 14.6634 18.4375 10 18.4375Z" fill="#333333"/>
                                        <path d="M10 8.3723C9.56852 8.3723 9.21875 8.72206 9.21875 9.15355V14.1845C9.21875 14.616 9.56852 14.9658 10 14.9658C10.4315 14.9658 10.7812 14.616 10.7812 14.1845V9.15355C10.7812 8.72206 10.4315 8.3723 10 8.3723Z" fill="#333333"/>
                                        <path d="M10 7.41562C10.5825 7.41562 11.0547 6.94342 11.0547 6.36093C11.0547 5.77844 10.5825 5.30624 10 5.30624C9.41751 5.30624 8.94531 5.77844 8.94531 6.36093C8.94531 6.94342 9.41751 7.41562 10 7.41562Z" fill="#333333"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="person_image" >
                                    <img :src="person.image" />
                                </div>
                                <div class="person_details mt-3">
                                    <h5 class="mb-0">{{person.name}}</h5>
                                    <h6>{{person.position}}</h6>
                                    <div>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 0C2.91596 0 0 2.91596 0 6.5C0 10.084 2.91596 13 6.5 13C10.084 13 13 10.084 13 6.5C13 2.91596 10.084 0 6.5 0ZM6.5 12.1875C3.36386 12.1875 0.812504 9.63614 0.812504 6.5C0.812504 3.36386 3.36386 0.812504 6.5 0.812504C9.63614 0.812504 12.1875 3.36386 12.1875 6.5C12.1875 9.63614 9.63614 12.1875 6.5 12.1875Z" fill="#888888"/>
                                            <path d="M6.90625 2.43758H6.09375V6.66828L8.65026 9.2248L9.22473 8.65033L6.90625 6.33186V2.43758Z" fill="#888888"/>
                                        </svg>
                                        <img src="../assets/pill.png" alt=""/>
                                        <span>63%</span>
                                    </div>
                                    <hr>

                                    <p class="email">{{person.email}}</p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab name="Organization"> Organization </Tab>
                </Tabs>
            </div>
        </div>
        <Rightbar/>
    </div>
</template>

<script>
    import Rightbar from '../components/Rightbar'
    import Tab from '../components/Tab'
    import Tabs from '../components/Tabs'
    import Filter from '../components/Filter'

    export default {
        name: 'People',
        components: {
            Rightbar,
            Tab,
            Filter,
            Tabs,
        },
        data (){
            return{
                persons:[
                    {
                        image: [require("../assets/one.svg")],
                        name: 'John Ohue',
                        position:'CREATIVE DESIGNER',
                        email:'john23@yopmail.com'
                    },
                    {
                        image: [require('../assets/two.svg')],
                        name: 'Sarah Bright',
                        position:'CREATIVE DESIGNER',
                        email:'sarah@yopmail.com'
                    },
                    {
                        image: [require('../assets/three.svg')],
                        name: 'Kola Adegun',
                        position:'CREATIVE DESIGNER',
                        email:'kola@yopmail.com'
                    },
                    {
                        image: [require('../assets/four.svg')],
                        name: 'Mary Nimi',
                        position:'CREATIVE DESIGNER',
                        email:'mary@yopmail.com'
                    },
                    {
                        image: [require('../assets/five.svg')],
                        name: 'Tom Jerry',
                        position:'CREATIVE DESIGNER',
                        email:'tom@yopmail.com'
                    },
                    {
                        image: [require('../assets/six.svg')],
                        name: 'Henry Paul',
                        position:'CREATIVE DESIGNER',
                        email:'henry@yopmail.com'
                    }
                ]
            }
        }
        
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    width: 100%;
    .body_container{
        width: 77%;
        font-family: Nunito;
        .people_content{
            h6{
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                line-height: 44px;
                color: #001233;
            }
        }
    }

}

.filter_part{
    text-align: -webkit-right;
    width: fit-content;
    position: relative;
    .filter_form{
        border: 1px solid #D8D8D8;
        width: fit-content;
        padding-right: 5px;
        background-color: white;
        border-radius: 4px;
    }
    .filter{
        background:  #EFF2F6;
        margin-bottom:0;
        padding: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;
        color: #333333;
        border-radius: 4px 0px 0px 4px;
        height: 45px;
    }
    .select_section{
        select{
            padding: 10px;
            border:none;
            border-radius: 4px;
            box-shadow: none !important;
            outline: none !important;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            text-transform: capitalize;
            color: #888888;
        }
    }
    .search_input{
        input{
            padding-left: 35px;
            border-radius: 4px;
            box-shadow: none !important;
            outline: none !important;
            font-size: 13px;
            line-height: 18px;
            color: #888888;
            height: 45px;
            background: #FFFFFF;
            opacity: 0.9;
            border: 0.5px solid #ABA7B6;
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
            top: 28%;
            padding-left: 11px;
            color: #D8D8D8;
            font-size: 13px;
        }
    }
}

.all_persons{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    clear: both;
    .person_container{
        text-align: center;
        background: #FFFFFF;
        box-shadow: 1px 4px 2px rgba(29, 125, 193, 0.15);
        border-radius: 8px;
        width: 223px;
        height: 310px;
        margin-bottom: 25px;
        .info{
            cursor: pointer;
        }
        .person_image{
            img{
                border-radius: 50%;
                border: 4px solid #005BFF;
            }
        }
        .person_details{
            h5{
                font-family: Nunito;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 33px;
                text-align: center;
                color: #001233;
            }
            h6,
            .email{
                font-style: normal;
                font-weight: normal;
                font-size: 13px;
                line-height: 18px;
                text-align: center;
                color: #9B9B9B;
            }
        }

    }
}
</style>