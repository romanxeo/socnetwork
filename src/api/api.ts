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
  },

  getProfile(userId: string | null | undefined) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}
