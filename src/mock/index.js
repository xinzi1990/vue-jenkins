import ports from "./ports";
import hello from "./hello/hello";

// console.log(hello, typeof hello, hello.usercheckToken);
const portListApi = (function () {
    const api = {};
    function run(note) {
        let gate = note.gate === undefined ? ports.gate : note.gate;
        let type = (note.type || 'get').toLocaleLowerCase();
        let url = note.url + '.*';
        return {
            url: [gate, url].join(''),
            type
        };
    }
    return function (ports) {
        for (let p in ports.list) {
            for (let l in ports.list[p]) {
                // list 下一级和二级的拼串组成唯一索引
                api[p + l] = run(ports.list[p][l]);
            }
        }
        return api;
    }
}());
(function () {
    const portList = portListApi(ports);
    for (let k in portList) {
        const port = portList[k];
        // console.log(port)
    };
}());