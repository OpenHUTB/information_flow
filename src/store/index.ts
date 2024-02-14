import Vue from 'vue'
import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import settings from './modules/settings'

export default createStore({
    state: {

    },
    getters: {
        sidebar: (state: any) => state.app.sidebar,
        device: (state: any) => state.app.device,
        token: (state: any) => state.user.token,
        avatar: (state: any) => state.user.avatar,
        name: (state: any) => state.user.name
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        app,
        user,
        settings
    }
})