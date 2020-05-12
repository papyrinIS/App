import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "3cf8a212-6fe7-4193-ac05-fcfe8e85a9a3"
    }
});

export const usersAPI={
    getUsers (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
}}


export const followAPI = {
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }

}


export const profileAPI={
    getFile(userId) {
       return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status:status});
    }
}

export const authAPI={
    getAuth(){
        return instance.get(`auth/me`);
    },
    login(email, password , rememberMe = false){
        return instance.post(`auth/login`, {email, password , rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

