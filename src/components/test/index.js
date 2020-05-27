import AAA from './AAA/index';
import BBB from './BBB/index';

const components = [
    AAA,
    BBB
]

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default{
    install,
    AAA,
    BBB
};
