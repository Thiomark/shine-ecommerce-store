const state = {
    isAdmin: false,
    token: 'h',
    user: null,
    isloggedIn: false
}


const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        if(user === null){
            // user = {
            //     name: null, 
            //     _id: null, 
            //     email: null, 
            //     role: null
            // }
            state.isloggedIn = false
        }else {
            if(user.role === 'admin'){
                state.isAdmin = true
            }
            else{
                state.isAdmin = false
            }
            state.isloggedIn = true
        }
        state.user = user
    },  
}

const actions = {
    setToken({commit}, token) {
        commit('setToken', token)
    },
    setUser({commit}, user) {
        commit('setUser', user)
    },
}

const getters = {
    getTheUser: state => state.user,
}

export default {
    state,
    mutations,
    actions,
    getters
}