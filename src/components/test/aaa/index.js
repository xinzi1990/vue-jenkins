// 引入组件
import AAA from './index.vue';
AAA.install = function (Vue) {
    Vue.component(AAA.name, AAA);
};
// 导出
export default AAA;