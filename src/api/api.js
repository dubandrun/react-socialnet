import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ce63c559-f848-4639-902e-7b2ba953b876",
  },
});

export const userAPI = {

  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },

  getProfileInfo(userId) {
    return instance.get('profile/' + userId).then((res) => res.data)
  }
}

export const authAPI = {

  getAuth() {
    return instance.get('auth/me').then((res) => res.data)
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', {email, password, rememberMe, captcha}).then((res) => res.data)
  },

  logout() {
    return instance.delete('auth/login').then((res) => res.data)
  }
}

export const profileAPI = {

  getProfileInfo(userId) {
    return instance.get('profile/' + userId).then((res) => res.data)
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId).then((res) => res.data)
  },

  updateStatus(status) {
    return instance.put('profile/status/', {status: status}).then((res) => res.data)
  },

  saveAvatar(photos) {
    const formData = new FormData()
    formData.append('image', photos)
    
    return instance.put('profile/photo/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data)
  },

  saveProfile(profile) {
    return instance.put('profile', profile).then((res) => res.data)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url').then((res) => res.data)
  }
}

