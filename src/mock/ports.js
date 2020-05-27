/**
 * @file: url接口配置
 * @Author: wangxin
 * @Email: wangxin72@baidu.com
 * @Date: 2019-05-20 16:09:04
 * @LastEditors: longzuowei
 * @LastEditTime: 2019-05-21 15:46:40
 */

// 一行一条，filter 移动到独立的文件中处理
export default {
    gate: 'judge',
    module: '', // 默认模块
    responseType: '', // 设置发送数据的类型是JSON还是BLOB
    requestType: '',
    version: 'v5',
    filter: () => { }, // 默认拦截过滤器
    inter: () => { }, // 默认拦截器
    list: {
        // 用户接口
        user: {
            checkToken: {gate: 'oauth', url: '/me'} // 校验token------
        },
        trunk: {
            // 获取全量的路口数据
            getAllCrossList: {gate: 'road-api', url: '/intersections'}, // 获取全量的路口数据
        },
        // 设置早晚高峰
        timePeakOptions: {
            queryCrossPeakTime: {gate: 'analysis', url: '/evaluate/crossings/peaktime'}, // 获取评价时间
            setCrossPeakTime: {gate: 'analysis', type: 'put', url: '/evaluate/crossings/peaktime'} // 设置评价时间
        },
        traffic: { // 研判
            getJudgedCrossList: {url: '/cross/list'}, // 获取研判路口列表
            ypresult: {url: '/cross/result/agg_group'}, // 研判结果
            ypgreen: {url: '/cross/flow_quota'}, // 研判结果 绿色利用率
            Runingstate: {type: 'post', url: '/cross/runstatus'}, // 运行状态
            Runingstateexport: {type: 'post', url: '/cross/runstatus/export', responseType: 'blob'}, // 运行状态导出
            getCrossingFlowAndTurn: {gate: 'analysis', url: '/cross/detail'}, // 路口对象流向、转向信息
            getdate: {gate: 'analysis', url: '/datelist'}, // 根据日期类型获取日期列表
            getypfx: {url: '/cross/lane'}, // 研判分析
            getypfxgreen: {url: '/cross/flow_quota'}, // 研判分析 绿灯利用率
            getypxj: {url: '/cross/summary/flow_group'}, // 研判分析 研判小结
            findSchemeDetail: {url: '/cross/signalschemes'}, // 查询配时及方案详情
        },
        // 致因分析
        cause: {
            getEventList: {type: 'post', url: '/cause/jam/list'}, // 获取事件列表
            getAlarmList: {url: '/cause/jam/blackpoint/list'}, // 获取警情列表
            getEventTotal: {type: 'post', url: '/cause/jam/event/stat'}, // 查询事件总和
            getWarningList: {url: '/cause/event/list'}, // 致因事件列表获取
            getDictUgcType: {gate: 'analysis', url: '/dict/ugcType'}, // 警情颜色对应的说明
            getDictUgcColor: {gate: 'analysis', url: '/dict/ugcColor'}, // 警情颜色字典
            getBlackPointStatistic: {url: '/cause/jam/blackpoint/events/statistic'}, // 指定路段黑点相关拥堵事件统计
            getOngoingList: {url: '/cause/intersection/ongoing/congest/events'}, // 获取实时路口拥堵事件列表
            getCompltedList: {url: '/cause/intersection/completed/congest/stat'}, // 获取历史路口拥堵事件列表
            getCongestEvent: {url: '/cause/intersection/congest/event'}, // 路口拥堵事件详情接口
            getCompletedCongestEvent: {url: '/cause/intersection/completed/congest/events'} // 路口历史拥堵事件详细列表接口
        },
        // 道路研判
        judgedCross: {
            getAllRegion: {url: '/region/list'}, // 获取全部区域
            getRegionChildRoad: {url: '/road/list'}, // 获取区域下子道路
            getJudgedCrossList: {url: '/road/page/list'}, // 获取道路列表
            exportJudgedCrossList: {url: '/road/page/export', responseType: 'blob'}, // 导出道路列表
            getTidalAllRegion: {url: '/road/tide/region/list'}, // 潮汐研判获取全部区域
            getTidalRegionChildRoad: {url: '/road/tide/road/list'}, // 潮汐研判获取区域下子道路
            getTidalJudgedCrossList: {url: '/road/list/tide'}, // 获取潮汐道路列表
            exportTidalJudgedCrossList: {url: '/road/list/export/tide', responseType: 'blob'}, // 导出潮汐道路列表
            getJudgedTidalQuotaDetail: {url: '/road/agg/tide'}, // 潮汐研判详情
            getJudgedQuotaDetail: {type: 'post', url: '/road/agg'}, // 指标态势
            getForecast: {url: '/road/predict'}, // 交通指标预测
            getIndextrend: {type: 'post', url: '/road/agg'}, // 查询指标趋势
            IndextrendExport: {type: 'post', url: '/road/agg/export', responseType: 'blob'}, // 指标趋势导出
            getRlt: {url: '/road/heat'}, // 获取热力图
            getAnalysis: {url: '/road/summary'}, // 分析小结
            getcongestion: {url: '/road/summary'}, // 拥堵指数
            gettides: {url: '/road/analysis/tidal/comparet'}, // 潮汐指数
            cxRuningstate: {url: '/road/agg/tide'}, // 潮汐运行状态
            cxRuningstateexport: {
                url: '/road/agg/export/tide',
                responseType: 'blob'
            }, // 潮汐运行状态导出
            getcxypfx: {url: '/road/compare/tide'}, // 潮汐研判(拥堵和潮汐)指数对比
            getcxypxj: {url: '/road/summary/tide'}, // 潮汐研判分析 研判小结
        },
        // 区域研判
        judgedArea: {
            getAllRegion: {url: '/region/info/list'}, // 获取全部区域
            getAreaList: {url: '/region/page/list'}, // 获取区域列表
            exportJudgedAreaList: {url: '/region/page/export', responseType: 'blob'}, // 导出区域列表
            getJudgedAreaQuotaDetail: {type: 'post', url: '/region/agg'}, // 获取区域指标详情
            getForecast: {url: '/region/predict'}, // 交通指标预测
            getIndextrendarea: {type: 'post', url: '/region/agg'}, // 查询指标趋势
            IndextrendExportarea: {type: 'post', url: '/region/agg/export', responseType: 'blob'}, // 指标趋势导出
            getRltarea: {type: 'get', url: '/region/heat'}, // 获取热力图
            getAnalysisarea: {type: 'get', url: '/region/summary'}, // 分析小结
        },
        // 交通流统计分析
        trafficArea: {
            getAreaLists: {gate: 'flow-api', type: 'get', url: '/region/car/flows'}, // 区域在途车辆列表
            getAreaData: {gate: 'flow-api', type: 'get', url: '/region/car/flow'}, // 区域在途车辆数据
            getAreaDataExport: {gate: 'flow-api', type: 'get', url: '/region/car/flow/export', responseType: 'blob'}, // 区域在途车辆数据excel导出
            getRoadList: {gate: 'flow-api', type: 'get', url: '/road/car/flows'}, // 道路在途车辆列表
            getRoadData: {gate: 'flow-api', type: 'get', url: '/road/car/flow'}, // 道路在途车辆数据
            getRoadDataExport: {gate: 'flow-api', type: 'get', url: '/road/car/flow/export', responseType: 'blob'}, // 道路在途车辆数据excel导出
            getCrossingList: {gate: 'flow-api', type: 'get', url: '/cross/car/flows'}, // 路口在途车辆列表
            getCrossingData: {gate: 'flow-api', type: 'get', url: '/cross/car/flow'}, // 路口在途车辆数据
            getCrossingDataExport: {
                gate: 'flow-api', type: 'get', url: '/cross/car/flow/export',
                responseType: 'blob'
            }, // 路口交通流统计数据excel导出
            getCrossingTurnDatas: {gate: 'flow-api', type: 'get', url: '/cross/car/flow/in/desc'}, // 路口全流向交通流详情统计
            getAllRegion: {gate: 'flow-api', url: '/region/info/list'}, // 获取全部区域
            getAreaList: {gate: 'flow-api', url: '/region/page/list'}, // 获取区域列表
            exportJudgedAreaList: {gate: 'flow-api', url: '/region/page/export', responseType: 'blob'}, // 导出区域列表
            getJudgedAreaQuotaDetail: {gate: 'flow-api', type: 'post', url: '/region/agg'}, // 获取区域指标详情
            getForecast: {gate: 'flow-api', url: '/region/predict'}, // 交通指标预测
            getCrossFlowData: {gate: 'road-api', url: '/cross/desc/signal'} // 路口微观图
        },
        // 交通流结构分析
        trafficFlowStructure: {
            queryCarListByRegion: {gate: 'flow-api', url: '/region/car/flows'}, // 1.1获取区域在途车辆列表
            queryCarDataByRegion: {gate: 'flow-api', url: '/region/car/flow'}, // 1.2获取交通流区域在途车辆数据
            // exportCarNumberByTrafficFlowRegion: {gate: 'flow-api', url: '/region/car/flow/export'},//1.3交通流区域在途车辆数据excel导出
            queryGoBackCarByRegion: {gate: 'flow-api', url: '/region/car/gobacks'}, // 2.1交通流区域进出城车辆数
            exportGoBackCarRegion: {gate: 'flow-api', url: '/region/car/gobacks/export', responseType: 'blob'}, // 2.2交通流区域进出城车辆数excel导出
            queryCarTypes: {gate: 'flow-api', url: '/region/car/types'}, // 2.3交通流区域在途车辆类型分布
            queryCarLocations: {gate: 'flow-api', url: '/region/car/locations'}, // 2.4交通流区域在途车辆归属地分布
            queryGoBackCarLocations: {gate: 'flow-api', url: '/region/car/locations'}, // 2.5交通流区域进出城车辆归属地分布
        },
    }
};
