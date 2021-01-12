<template>
    <div class="options-container">
        <div class="options-wrapper">
            <a v-click-outside="closeForFilter"  @click="showMenu('filter')" class="mobile" href="javascript:void(0)">Filter<i class="fas fa-sort-down"></i>
                <Menu 
                    v-if="filter"
                    class="absolute filter"
                    backgroundColour="white" 
                    :shadow="false"
                    :listItems="['Price to high', 'Price high to low', 'A - Z', 'Z - A']" 
                />
            </a>
            <a v-click-outside="closeForDepartment" @click="showMenu('department')" class="mobile" href="javascript:void(0)">Department<i class="fas fa-sort-down">
                <Menu 
                    v-if="department"
                    class="absolute Gender"
                    backgroundColour="white" 
                    :shadow="true"
                    :listItems="['Both', 'Male', 'Female']" 
                /> 
            </i>

            </a>
            <a class="mobile" href="javascript:void(0)"><i class="fas fa-th-large"></i></a>
            <ul class="desktop right-side">
                <li v-click-outside="closeForDepartment" @click="showMenu('department')"><a href="javascript:void(0)"></a>Department
                    <Menu 
                        v-if="department"
                        class="absolute Gender"
                        backgroundColour="white" 
                        :shadow="true"
                        :listItems="['Both', 'Male', 'Female']" 
                    /> 
                </li>
                <li v-click-outside="closeForCategory" @click="showMenu('category')"><a href="javascript:void(0)"></a>Category
                    <Menu 
                        v-if="category"
                        class="absolute Category"
                        backgroundColour="white" 
                        :shadow="false"
                        :listItems="['All', 'New', 'Trending']" 
                    />
                </li>
            </ul>
            <ul class="desktop left-side">
                <li v-click-outside="closeForFilter"  @click="showMenu('filter')"><a href="javascript:void(0)"></a>Sort
                    <Menu 
                        v-if="filter"
                        class="absolute filter"
                        backgroundColour="white" 
                        :shadow="false"
                        :listItems="['Price to high', 'Price high to low', 'A - Z', 'Z - A']" 
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import Menu from './Menu'

    export default {
        name: "OptionsMenu",
        components: {
            Menu
        },
        data() {
            return {
                department: false,
                category: false,
                filter: false,
                customStyle: [
        //             -moz-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        // -webkit-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        // box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
                ]
            }
        },
        methods: {
            showMenu(menu){
                if(menu === 'department'){
                    console.log('department')
                    this.category = false
                    this.filter = false
                    this.department = !this.department
                }
                else if(menu === 'category'){
                    this.department = false
                    this.filter = false
                    this.category = !this.category
                }
                else if(menu === 'filter'){

                    this.category = false
                     this.department = false
                    this.filter = !this.filter
                }
            },
            closeForDepartment(){  
                this.department = false
            },
            closeForCategory(){  
                this.category = false
            },
            closeForFilter(){  
                this.filter = false
            }
        },
    }
</script>

<style scoped>

    @media (min-width: 500px){

        .mobile {
            display: none;
        }

        .options-container {
            margin-top: 2em;
            border-radius: .3em;
            padding: 0.7em;
        }

        .options-wrapper {
            padding: 0 1em;
            justify-content: space-between;
        }
    }

    @media (max-width: 500px){

        .options-container {
            margin: 0 -1em;
            padding: 1.3em 2em;
            align-items: center;
        }

        .desktop {
            display: none;
        }

        .mobile {
            font-size: .8rem;
            cursor: pointer;
            font-weight: 500;   
            color: rgb(20, 20, 20);
            margin-right: 1em;
            display: flex;
        }
    }

    .fa-sort-down {
        padding-left: .2em;
    }

    .fa-th-large {
        align-self: center;
    }

    .options-container {
        background-color: rgb(255, 255, 255);
        
        -moz-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        -webkit-box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        box-shadow: rgba(17, 17, 18, 0.151) 0 .3em .6em, rgba(19, 20, 20, 0.06) 0 .1em .1em;
        margin-bottom: .5em;
        
    } 

    .options-wrapper {
        max-width: 1100px;
        margin: auto;
        display: flex;
    } 

    ul {
        display: flex;
        position: relative;
    }

    .absolute {
        top: 2em;
        position: absolute;
    } 

    .Gender {
        right: 6em;
    }
    .Category {
        right: -.7em;
    }
    .filter {
        left: -4em;
    }

    li {
        color: rgb(20, 20, 20);
        font-size: 1rem;
        cursor: pointer;
        font-weight: 600;      
        border-bottom: .3em solid rgb(255, 255, 255);
        border-top: .3em solid rgb(255, 255, 255);
        margin: 0 1em;  
    }

    li:hover {
        border-bottom: .3em solid rgb(39, 116, 139);
    }

    

</style>