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
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  }
}

export const profileAPI = {
  getProfile(userId: string | null | undefined) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId: string | null | undefined) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },

    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append('image', photoFile)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfileInfo(profile: any) {
        return instance.put(`profile`, profile);
    }
}


export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },

  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha});
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}