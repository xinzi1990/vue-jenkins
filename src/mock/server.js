const fs = require('fs');

const json = {
    usercheckToken: { "id": 1, "name": "系统管理员", "account": "boss1234", "groups": [{ "id": 1, "name": "上级", "remark": null }], "grantedOperators": ["analysis.line", "signal.stratege-config.cross", "signal.stratege-config.line", "boss", "boss.security.account", "signal.optimize-stratege", "signal.plan", "signal.optimize-stratege.period-cycle", "signal.optimize-stratege.line-overflow", "judge.traffic-flow.structure", "signal.optimize-stratege.period-cycle.cross", "judge.traffic-situation.cross", "video", "signal.optimize-stratege.line-coordinate", "signal.stratege-config.region", "judge.traffic-flow.statistics", "judge.traffic-situation.road", "signal.optimize-stratege.period-cycle.line", "signal.optimize-stratege.realtime-adaptive", "signal.stratege-config", "judge", "signal.optimize-stratege.line-interceptor", "signal", "signal.optimize-stratege.variable-lane", "judge.traffic-situation.region", "boss.security.role", "boss.security", "judge.congestion-cause.cross", "judge.congestion-cause.road", "analysis.cross", "analysis", "judge.congestion-cause", "signal.stratege-config.global", "signal.optimize-stratege.line-priority", "signal.optimize-statistics", "judge.traffic-flow", "signal.optimize-overview", "judge.traffic-situation", "traffic-incident-platform", "boss.security.group"], "grantedUrls": [], "accountNonExpired": true, "accountNonLocked": true, "credentialsNonExpired": true, "enabled": true, "sysGeneratedPwd": false }
}


fs.writeFile('./hello/hello.js', 'export default ' + JSON.stringify(json, null, '\t'), 'utf-8', function(err, data){
    if(err){
        console.log('写文件出错了，错误是：' + err);
    }else{
        console.log('ok', data);
    }
})

fs.readFile('./hello/hello.js', (err, data) => {
    if (err) {
        console.log('出错了：' + err);
    } else {
        console.log(data, JSON.parse(data.toString().split('export default ')[1]));
    }
})