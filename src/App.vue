<!--
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2020-04-15 17:57:49
 -->
<template>
    <div id="app">
        <div id="container" class="container">
            <div id="main" class="main">
                <h1>count：{{ count }}</h1>
                <h1>test：{{ test }}</h1>
                <h1>local：{{ local }}</h1>
                <button @click="send">点击</button>
                <svg-icon name="fly" className="fly"></svg-icon>
            </div>
        </div>
        <!-- <mapv></mapv> -->
    </div>
</template>

<script>
import { mapState } from "Vuex";
import mapv from './components/mapv';
import { toggle } from './components/mixins/toggle';
export default {
    mixins: [toggle],
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
        for(let i = 0; i < 5; i++){
            setTimeout(() => {
                this.$message('这是一条消息提示' + i);
            }, 1000 * i);
        }
        console.log('hello from Vue instance!');
        console.log(this.isShowing = !this.isShowing);
        this.add++;
        window.addEventListener('load', adaptation);
        window.addEventListener('resize', adaptation);
        function adaptation () {
            var w = document.body.clientWidth;
            var h = document.body.clientHeight;
            var nw = 1920;
            var nh = 1080;
            var left, top, scale;
            if (w / h > nw / nh) {
                scale = h / nh;
                top = 0;
                left = (w - nw * scale) / 2;
            } else {
                scale = w / nw;
                left = 0;
                top = (h - nh * scale) / 2;
            }

            
            console.log(scale);
            document.getElementById('container').setAttribute('style',`width:${w}px;height:${h}px`);
            document.getElementById('main').setAttribute('style', `transform: scale(${scale},${scale});margin-left:${left}px;margin-top:${top}px;`);
            // document.getElementById('main').setAttribute('style', 'transform: scale('+ scale +');');
        }

    },
    components:{
        mapv
    }
}
</script>

<style lang="less">
* {
    padding: 0;
    margin: 0;
}
body,html{
    height: 100%;
    
}

</style>
<style lang="less" scoped>
// @import url('./assets/style/var.less');
.container{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(39, 39, 39);
    .main{
        background:#006aff;
        width:1920px;
        height:1080px;
        transform-origin: 0px 0px;
        position: absolute;
    }
}
#app{ 
    .fly{
        width: @variable;
        height: @variable;
        color: #006aff;
        &::after{
            content: '';
            width: @variable;
            height: @variable;
        }
    }
}
</style>
