<template>
    <div class="hello">
        {{test}}
        <button @click="setLocal">设置</button>
        <button @click="changeLocal">改变</button>
        <button @click="removeLocal">删除</button>
        <button @click="getLocal">获取</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {addCookie} from "../store/mutations";
    import Cookies from 'js-cookie';
    export default {
        computed:{
            ...mapState(['token']),
            test(){
                return Cookies.get('test')?Cookies.get('test'):"";
            }
        },
        methods: {
            setLocal() {
                Cookies.set('test','隔壁老王',{domain:'.jingdianbao.cn',expires:999});
            },
            changeLocal() {
                Cookies.set('test','新修改的名字',{domain:'.jingdianbao.cn',expires:999});
            },
            getLocal(){
                console.log(Cookies.get('test'));
            },
            removeLocal(){
                Cookies.remove('test',{domain:'.jingdianbao.cn'});
            },
            addCookie(key, value, day) {
                if (arguments.length === 2) {
                    document.cookie = key + '=' + value + '; ';
                }
                else if (arguments.length === 3) {
                    let date = new Date();
                    date.setDate(date.getDate() + day);
                    document.cookie = key + "=" + value + "; " + "expires=" + date + ";path=/;domain=jingdianbao.cn";
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
