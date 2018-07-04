const CHANGE = 'CHANGE';
const CHANGE_COOKIE = 'CHANGE_COOKIE';
function getCookie(key) {
    let res = document.cookie.split("; ");
    for(var i = 0, len = res.length; i < len; i++){
        var arr = res[i].split("=");
        if(arr[0] == key){
            return arr[1];
        }
    }
}
function addCookie(key, value, day) {
    if(arguments.length === 2){
        document.cookie = key+'='+value+'; ';
    }
    else if(arguments.length === 3){
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key+"="+value+"; "+ "expires="+date+";path=/;domain=jingdianbao.cn";
    }
}
export default {
    [CHANGE](state, newVal = 0) {
        localStorage.setItem('balance', newVal);
        state.balance = newVal;
    },
    [CHANGE_COOKIE](state,newVal =''){
        addCookie('token',newVal,999999);
        state.token = newVal;
    }
}