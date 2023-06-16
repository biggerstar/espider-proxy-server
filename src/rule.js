// rule.js
module.exports = {
    // 模块介绍
    summary: 'my customized rule for AnyProxy',
    // 发送请求前拦截处理
    *beforeSendRequest(requestDetail) {
        console.log(requestDetail.url);
    },
    // 发送响应前处理
    *beforeSendResponse(requestDetail, responseDetail) {
        // console.log(JSON.stringify(responseDetail.body));
    },
    // 是否处理https请求
    *beforeDealHttpsRequest(requestDetail) { /* ... */ },
    // 请求出错的事件
    *onError(requestDetail, error) { /* ... */ },
    // https连接服务器出错
    *onConnectError(requestDetail, error) { /* ... */ }
};
