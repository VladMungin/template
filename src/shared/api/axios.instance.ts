import axios from 'axios'
import { getEnv } from '@/shared/config'

export const baseQuery = axios.create({
  baseURL: getEnv().BASE_URL,
})
