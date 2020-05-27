// 引入组件
import BBB from './index.vue';
BBB.install = function (Vue) {
    Vue.component(BBB.name, BBB);
};
// 导出
export default BBB;