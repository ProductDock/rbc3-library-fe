export const IS_PROD = import.meta.env.PROD
export const BASE_URL_LOCAL = 'http://localhost:8080'
export const BASE_URL_PROD =
  'http://ecs-eu-west-1-nonprod-505016162.eu-west-1.elb.amazonaws.com:81'

export const API_URL = IS_PROD ? BASE_URL_PROD : BASE_URL_LOCAL
export const GOOGLE_BASE_URL = 'https://www.googleapis.com'
export const DATA_FETCH_ERROR = 'DATA_FETCH_ERROR'
