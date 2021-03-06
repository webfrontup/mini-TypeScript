
import {isDate, isPlainObject, isURLSearchParams} from  './util'

interface URLOrigin {
    protocol: string
    host: string
}

function encode(val: string): string {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}


export function buildURL(url: string, params?: any, paramsSerializer?: (params: any) => string) :string{
    if(!params) {
        return url
    }
    
   
    let serializalParams
    if (paramsSerializer) {
        serializalParams = paramsSerializer(params)
    } else if(isURLSearchParams(params)){
        serializalParams = params.toString()
    }
    else{
        const parts: string[] = []
        Object.keys(params).forEach((key) => {
            const val = params[key]
            if (val === null || typeof val === 'undefined') {
                return
            }
            let values = []
            if (Array.isArray(val)) {
                values = val
                key += '[]'
            } else {
                values = [val]
            }
            values.forEach((val) => {
                if (isDate(val)) {
                    val = val.toISOString()
                } else if (isPlainObject(val)) {
                    val = JSON.stringify(val)
                }
            })
            parts.push(`${encode(key)}=${encode(val)}`)
        })
        serializalParams = parts.join('&')
        
    }

    if (serializalParams){
        const markIndex = url.indexOf("#")
        if(markIndex !== -1) {
            url = url.slice(0, markIndex)
        }
        url += (url.indexOf('?')===-1?'?':'&')+serializalParams
    }
    return url
}
// 判断地址是否为绝对地址
export function isAbsoluteURL(url: string):boolean {
    return /(^[a-z][a-z\d\+\-\.]*:)\/\//i.test(url)
}

export function combineURL(baseURL: string, relativeURL?:string):string{
    return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''): baseURL
}

export function isURLSameOrigin(requestURL: string): boolean{
    const parsedOrigin = resolveURL(requestURL)
    return (parsedOrigin.protocol === currentOrgin.protocol && parsedOrigin.host === currentOrgin.host)
}

const urlParsingNode = document.createElement('a')
const currentOrgin = resolveURL(window.location.href)

function resolveURL(url: string): URLOrigin{
    urlParsingNode.setAttribute('href', url)
    const {protocol,host} = urlParsingNode
    console.log(protocol, host,'222')
    return {
        protocol,
        host
    }

}