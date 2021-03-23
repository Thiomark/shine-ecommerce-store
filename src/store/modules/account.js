const state = {
    isAdmin: false,
    token: null,
    user: null,
    isloggedIn: false
}

const mutations = {
    setToken(state, token) {
        state.token = token
    },
    setUser(state, user) {
        if(user === null){
            state.isloggedIn = false
            state.isAdmin = false
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
    getIsloggedIn: state => state.isloggedIn,
    getIsAdmin: state => state.isAdmin,
}

export default {
    state,
    mutations,
    actions,
    getters
}