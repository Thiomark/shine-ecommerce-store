const state = {
    footerHeight: null,
    requestFeedBack: null,
    pageLoading: false,
    hideNavbarAndFooter: false,
    shippingCost: 200,
}


const mutations = {
    setNavbarAndFooter(state, user) {
        state.hideNavbarAndFooter = user
    },
    setLoadingPage(state, loading) {
        state.pageLoading = loading
    },
    setRequestFeedBack(state, loading) {
        state.requestFeedBack = loading
    },
    setFooterheight(state, payload){
        state.footerHeight = payload
    },
    updatedReviewState(state, review){
        state.requestFeedBack = review
    }
}

const actions = {
    setNavbarAndFooter({commit}, user) {
        commit('setNavbarAndFooter', user)
    },
    setLoadingPage({commit}, loading) {
        commit('setLoadingPage', loading)
    },
    setRequestFeedBack({commit}, loading) {
        commit('setRequestFeedBack', loading)
    },
    addFooterheight({commit}, height){
        commit('setFooterheight', height)
    },
    updatedReviewState({commit}, review){
        commit('updatedReviewState', review)
    }
}

const getters = {
    getNavBarInfo: state => state.hideNavbarAndFooter,
    getFooterHeight: state => state.footerHeight,
    getRequestFeedBack: state => state.requestFeedBack,
    getLoadingPage: state => state.pageLoading,
}

export default {
    state,
    mutations,
    actions,
    getters
}