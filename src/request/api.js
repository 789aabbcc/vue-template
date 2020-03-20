import request from './axios';

/* 替换 
 * 1.暴露的名字 
 * 2.url 
 * 3.method 
 **/


// 1. Get请求
export const getUserTask = () => {
    return request({
        url: '/task/select',
        method: 'get'
    })
}
// 2. POST请求
export const getPhoneCode = (query) => {
    return request({
        url: '/user/messageCode',
        method: 'post',
        data: query
    })
}

// 3. Get请求（路由中带参数）
export const getUserTask = (query) => {
    return request({
        url: '/task/select',
        method: 'get',
        params: query
    })
}
// 4. POST请求（路由中带参数）
export const queryTask = (query1, query2) => {
    return request({
        url: '/task/query',
        method: 'post',
        data: query1,
        params: query2
    })
}