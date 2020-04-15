/*
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2020-03-05 21:52:31
 */
export const toggle = {
    data(){
        return {
            isShowing: false
        }
    },
    methods: {
        toggleShow(){
            this.isShowing = !this.isShowing;
        }
    },
    mounted(){
        console.log('hello from mixin!');
    }
}