const state = {
    footerHeight: null,
    requestFeedBack: null,
    pageLoading: false,
    selectPopupConfirm: 'some',
    selectPopupMessage: "something"
}


const mutations = {
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
    },
    setSelectPopupConfirm(state, payload){
        state.selectPopupConfirm = payload
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
    updatedReviewState({commit}, review){
        commit('updatedReviewState', review)
    },
    addSelectPopupConfirm({commit}, message){
        commit('setSelectPopupConfirm', message)
    }
}

const getters = {
    getFooterHeight: state => state.footerHeight,
    getRequestFeedBack: state => state.requestFeedBack,
    getLoadingPage: state => state.pageLoading,
    getSelectPopupMessage: state => state.selectPopupMessage,
    getSelectPopupConfirm: state => state.selectPopupConfirm,
    // getShippingCost: state => state.shippingCost,
}

export default {
    state,
    mutations,
    actions,
    getters
}