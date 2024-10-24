export const IS_PROD = import.meta.env.PROD
export const BASE_URL_LOCAL = 'http://localhost:8080'
export const BASE_URL_PROD = 'http://fake-prod:8080'

export const API_URL = IS_PROD ? BASE_URL_PROD : BASE_URL_LOCAL

export const DATA_FETCH_ERROR = 'DATA_FETCH_ERROR'
