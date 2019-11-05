/*
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2019-08-16 14:56:24
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        test: 1,
        localCount: 2
    },
    mutations: {
        sendCount(state, v){
            state.count = v;
            console.log(state);
        }
    },
    actions: {

    }
})
