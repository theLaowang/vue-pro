import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
Vue.use(Vuex);
function getCookie(key) {
    let res = document.cookie.split("; ");
    for(var i = 0, len = res.length; i < len; i++){
        var arr = res[i].split("=");
        if(arr[0] == key){
            return arr[1];
        }
    }
}
const state = {
    balance:localStorage.getItem('balance')||0,
    token:getCookie('token')||''
};

export default new Vuex.Store({
    state,
    mutations,
})