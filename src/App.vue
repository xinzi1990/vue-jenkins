<!--
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2019-11-01 14:34:59
 -->
<template>
    <div id="app">
        <h1>count：{{ count }}</h1>
        <h1>test：{{ test }}</h1>
        <h1>local：{{ local }}</h1>
        <button @click="send">点击</button>
        <svg-icon name="fly" className="fly"></svg-icon>
        <mapv></mapv>
    </div>
</template>

<script>
import { mapState } from "Vuex";
import mapv from './components/mapv';
export default {
    data(){
        return {
            add: 0
        }
    },
    computed: {
        ...mapState([
            'count',
            'test'
        ]),
        local(){
            return '1111'
        }
    },
    methods:{
        send() {
            const v = 100;
            this.$store.commit("sendCount", v);
        }
    },
    mounted(){
        this.add++;
    },
    components:{
        mapv
    }
}
</script>


<style lang="less" scoped>
#app{
    .fly{
        width: 200px;
        height: 200px;
        color: #006aff;
    }
}
</style>
