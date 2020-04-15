/*
 * @file: /
 * @Author: wangxin
 * @LastEditTime: 2020-04-15 10:56:17
 */
/**重置message，防止重复点击重复弹出message弹框 */
import { Message } from "element-ui";
console.log(Message);
let timer = null;
let messageInstance = null;
let openSetTimeout = function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        messageInstance = null;
    }, 1000 * 60);
}
let mainMessage = function DoneMessage(options) {
    //如果弹窗已存在先关闭
    if (messageInstance) {
        messageInstance.close();
    }
    messageInstance = Message(options);
    openSetTimeout();
}

let arr = ['success', 'warning', 'info', 'error'];
arr.forEach(function (type) {
    mainMessage[type] = function (options) {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return mainMessage(options);
    };
});
export const message = mainMessage;