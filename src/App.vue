<!--
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2020-05-27 16:44:18
 -->
<template>
    <div id="app">
        <!-- <AAA />
        <BBB /> -->
        <div id="container" class="container">
            <div id="main" class="main">
                <h1>count：{{ count }}</h1>
                <h1>test：{{ test }}</h1>
                <h1>local：{{ local }}</h1>
                <button @click="send">点击</button>
                <svg-icon name="fly" className="fly"></svg-icon>
                <div id="l-map" style="width:500px; height:500px;"></div>
                <div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="百度" style="width:150px;" /></div>
                <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
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
        var map = new BMap.Map("l-map");
        var point = new BMap.Point(115.472202,38.886796);
        map.centerAndZoom(point,12);

        var geoc = new BMap.Geocoder();

        

        map.addEventListener("click", function(e){        
            // console.log(e.point, geoc.getLocation);
            var pt = e.point;
            var pontStr = pt.lat + ',' + pt.lng;
            var marker = new BMap.Marker(pt);  // 创建标注
            // console.log(pontStr);
            fetch(`/map/geocoding?location=${pontStr}&output=json`).then(function(response) {
                return response.json();
            }).then(function(myJson) {
                map.addOverlay(marker);    //添加标注
                console.log(myJson);
            });
        });


        // 百度地图API功能
        // function G(id) {
        //     return document.getElementById(id);
        // }
        // var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        //     {"input" : "suggestId","location" : map}
        // );
        // ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
        //     console.log('onhighlight');
        //     var str = "";
        //     var _value = e.fromitem.value;
        //     var value = "";
        //     if (e.fromitem.index > -1) {
        //         value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        //     }    
        //     str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
            
        //     value = "";
        //     if (e.toitem.index > -1) {
        //         _value = e.toitem.value;
        //         value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        //     }
        //     str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        //     G("searchResultPanel").innerHTML = str;
        // });

        // var myValue;
        // ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        //     console.log('onconfirm');
        //     var _value = e.item.value;
        //     myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        //     G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        //     setPlace();
        // });
        // function setPlace(){
        //     map.clearOverlays();    //清除地图上所有覆盖物
        //     function myFun(){
        //         console.log(local.getResults().getPoi(0), myValue);
        //         var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
        //         console.log(pp);
        //         map.centerAndZoom(pp, 18);
        //         var marker = new BMap.Marker(pp);  // 创建标注
        //         map.addOverlay(marker);    //添加标注
        //         marker.addEventListener("click", () => {
        //             console.log(marker);
        //             getAttr(marker);
        //         });
        //     }
        //     var local = new BMap.LocalSearch(map, { //智能搜索
        //         onSearchComplete: myFun
        //     });
        //     local.search(myValue);
        // }

        // function getAttr(marker){
        //     var p = marker.getPosition();       //获取marker的位置
        //     console.log("marker的位置是" + p.lng + "," + p.lat);
        // }



        this.add++;
        // window.addEventListener('load', adaptation);
        // window.addEventListener('resize', adaptation);
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
        // background:#006aff;
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
