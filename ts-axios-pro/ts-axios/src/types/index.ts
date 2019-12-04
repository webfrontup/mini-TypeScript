import { request } from "https";

export type Method = 'get' | 'GET'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | "PUT"
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url: string
    method?: string
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse>{
    
}

export interface AxiosError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse
}
