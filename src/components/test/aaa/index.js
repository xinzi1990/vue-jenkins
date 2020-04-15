// 引入组件
import AAAComponent from './aaa.vue'
// 定义 aaa 对象
const AAA = {
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install: function (Vue) {
        Vue.component('AAA', AAAComponent)
    }
}
// 导出
export default AAA;