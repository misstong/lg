import request from './request'


export const  followers = (query) => {
    return request({
        url: `/users/misstong/followers?page=${query.page}&per_page=${query.pageSize}`
    })
}

export const following = (query) => {
    return request({
        url: `/users/misstong/following?page=${query.page}&per_page=${query.pageSize}`
    })
}