import { LS_USER } from '../constants'
import { fetchData } from './fetchData'
import { API_BASE_URL } from '../core/app'

export const loadUserInfo = async () => {
  const data = await fetchData(API_BASE_URL + 'api/user/me', 'GET')
  localStorage.setItem(LS_USER, JSON.stringify(data))
}

export const getUserInfo = () => {
  const lsData = localStorage.getItem(LS_USER)
  console.log(lsData)
  if (!lsData) return false

  const data = JSON.parse(lsData)
  return data
}
