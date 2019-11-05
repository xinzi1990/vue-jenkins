<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        // svg图标名称
        name: {
            default: ""
        },
        // 自定义样式
        className: {
            type: String,
            default: ""
        }
    },
    computed: {
        iconName() {
            return `#icon-${this.name}`;
        },
        svgClass() {
            return ["svg-icon", this.className ? this.className : ""];
        }
    }
};
</script>

<style scoped>
.svg-icon {
    fill: currentColor;
    overflow: hidden;
}
</style>