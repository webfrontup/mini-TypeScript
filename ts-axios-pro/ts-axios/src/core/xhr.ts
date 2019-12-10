import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers';
import { createError } from '../helpers/error';
import { isURLSameOrigin } from '../helpers/url';
import cookie from '../helpers/cookie';
import { isFormData } from '../helpers/util';

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
    return new Promise((resolve, reject) => {
        const { data = null,
            url,
            method = 'get',
            headers,
            responseType,
            timeout,
            cancelToken,
            withCredentials,
            xsrfCookieName,
            xsrfHeaderName,
            onDownloadProgress,
            onUploadProgress,
            auth,
            validateStatus
        } = config

        const request = new XMLHttpRequest()
        request.open(method.toUpperCase(), url!, true)
        configureRequest()
       
        addEvents()
        progressHeaders()
        progressCancel()

        
        request.send(data)

        function configureRequest(): void{
            if (responseType) {
                request.responseType = responseType
            }
            if (timeout) {
                request.timeout = timeout
            }
            if (withCredentials) {
                request.withCredentials = withCredentials
            }
        }
        function addEvents(): void{
            request.onreadystatechange = function handleLoad() {
                if (request.readyState !== 4) return
                if (request.status === 0) return
                const responseHeaders = parseHeaders(request.getAllResponseHeaders())
                const responseData = responseType !== 'text' ? request.response : request.responseText
                const response: AxiosResponse = {
                    data: responseData,
                    status: request.status,
                    statusText: request.statusText,
                    headers: responseHeaders,
                    config,
                    request
                }
                handleResponse(response)
            }
            request.onerror = function handleError() {
                reject(createError('Network Error!', config, null, request))
            }
            request.ontimeout = function handleTimeout() {
                reject(createError(`Timeout of ${timeout}ms exceeded`, config, 'ECONNABORTED'))
            }
            if (onDownloadProgress) {
                request.onprogress = onDownloadProgress
            }
            if (onUploadProgress) {
                request.upload.onprogress = onUploadProgress
            }
        }

        function progressHeaders():void{
            if (isFormData(data)) {
                delete headers['Content-Type'] // 如果是formdata 则然系统自行设置数据类型
            }

            if (withCredentials || isURLSameOrigin(url!) && xsrfCookieName) {
                const xsrfValue = cookie.read(xsrfCookieName!)
                if (xsrfValue) {
                    headers[xsrfHeaderName!] = xsrfValue
                }
            }

            if(auth){
                headers['Authorization'] = 'Basic '+ btoa(auth.username+':'+auth.password)
            }

            Object.keys(headers).forEach((name) => {
                if (data === null && name.toLowerCase() === 'content-type') {
                    delete headers[name]
                } else {
                    request.setRequestHeader(name, headers[name])
                }
            })
        }

        function progressCancel():void {
            if (cancelToken) {
                cancelToken.promise.then(reason => {
                    request.abort() // 取消请求
                    reject(reason)
                })
            }
        }


        function handleResponse(response: AxiosResponse): void {
            if (!validateStatus || validateStatus(response.status)) {
                resolve(response)
            } else {
                reject(createError(`Request failed with status code ${response.status}`, config, null, request, response))
            }
        }

    })

}