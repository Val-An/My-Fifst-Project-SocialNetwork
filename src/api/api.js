import * as axios from "axios";

const instanse = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f2505eb7-09e9-4414-946c-a8ac246dd9fb'
    }
})

export const userAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
            .then (response => response.data)
    },
    profile(userId) {
        return instanse.get(`profile/${userId}`)
            .then (response => response.data)
    },
    unfollowUser (userId) {
        return instanse.delete(`follow/${userId}`)
            .then (response => response.data)
    },
    followUser(userId) {
        return instanse.post(`follow/${userId}`)
            .then (response => response.data)
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`)
            .then (response => response.data)
    }
}



