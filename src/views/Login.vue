<template>
    <div class="login-page" :style="{paddingBottom: `${footerHeight}px`}">
        <div class="form">
            <form class="login-form">
                <input v-model="username" type="text" placeholder="username"/>
                <input v-model="password" type="password" placeholder="password"/>
                <button @click.prevent="submitTheDetails">login</button>
                <p class="message">Not registered? <router-link to="/register" href="#">Create an account</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    import AuthService from '../services/AuthService'

    export default {
        name: 'Login',
        data() {
            return {
                footerHeight: null,
                buffer: false,
                errorMessage: null,
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapGetters(['getFooterHeight']),
            ...mapActions(['setNavbarAndFooter', 'setLoadingPage', 'setRequestFeedBack']),
            async submitTheDetails(){
                try {
                    this.setLoadingPage(true)
                    const response = await AuthService.login({
                        email: this.username, 
                        password: this.password
                    })

                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                    this.setLoadingPage(false)
                    if(response.data.user.role === 'admin'){
                        this.$router.push({
                            name: 'Dashboard'
                        })
                    }
                    else {
                        this.$router.push({
                            name: 'Home'
                        })
                    }
                    
                } 
                catch (error) {
                    this.setLoadingPage(false)
                    this.setRequestFeedBack(error.response.data.error)
                }
            },
        },
        created() {
            this.setLoadingPage(false)
            this.setNavbarAndFooter(false)
            this.footerHeight = this.getFooterHeight()
        },
    }

</script>

<style scoped>

    @media(max-width: 500px) {
        .form {
            margin: 3em auto;
            /* top: 50% */
        }
    }

    @media(min-width: 500px) {
        .form {
            margin: 0 auto ;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }
    }

    .login-page {
        width: 360px;
        padding: 8% 0 0;
        margin: auto;
        min-height: 100vh;
    }

    .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        padding: 45px;
        text-align: center;
        
    }

    .form input {
        font-family: "Roboto", sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 1em;
        padding: 1em;
        box-sizing: border-box;
        font-size: 14px;
    }

    .form button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4CAF50;
        width: 100%;
        border: 0;
        padding: 1em;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
    }

    .form button:hover,.form button:active,.form button:focus {
        background: #43A047;
    }

    .form .message {
        margin: 1em 0 0;
        color: #b3b3b3;
        font-size: .9rem;
    }

    .form .message a {
        color: #4CAF50;
        text-decoration: none;
    }

    .container {
        position: relative;
        z-index: 1;
        max-width: 300px;
        margin: 0 auto;
    }

    .container:before, .container:after {
        content: "";
        display: block;
        clear: both;
    }

    .container .info {
        margin: 3em auto;
        text-align: center;
    }

    .container .info h1 {
        margin: 0 0 1em;
        padding: 0;
        font-size: 2.25rem;
        font-weight: 300;
        color: #1a1a1a;
    }

    .container .info span {
        color: #4d4d4d;
        font-size: 12px;
    }

    .container .info span a {
        color: #000000;
        text-decoration: none;
    }

    .container .info span .fa {
        color: #EF3B3A;
    }
    
    /* .login-page {
        background: #76b852; 
        background: -webkit-linear-gradient(right, #76b852, #8DC26F);
        background: -moz-linear-gradient(right, #76b852, #8DC26F);
        background: -o-linear-gradient(right, #76b852, #8DC26F);
        background: linear-gradient(to left, #76b852, #8DC26F);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;      
    } */
</style>