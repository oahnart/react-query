import axiosClient from './axios-client'

export type UserProfile = {
  name: string
  email: string
  city: string
  id: string
}

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
