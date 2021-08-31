import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'd683f2e5-a7af-46f3-9fb7-3906f227c671'
  }
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    ).then(response => {
        return response.data
      }
    )
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`)
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  }
}

export const profileAPI = {
  getProfile(userId: string | null | undefined) {
    return instance.get(`profile/${userId}`)
  },

  getStatus(userId: string | null | undefined) {
    return instance.get(`profile/status/${userId}`)
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status})
  }

}


export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}


const getGoogle = () => {
  return axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=20')
    .then(resp => resp.data)
    .then(data => data.items)
}


getGoogle()
  .then(items => console.log(items))