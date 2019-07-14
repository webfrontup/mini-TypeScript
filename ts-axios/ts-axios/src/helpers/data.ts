import { isPlainObject } from './util'

/**
 * 处理请求data
 * @param data
 */
export function transFormRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * 处理响应data
 * @param data
 */
export function transFormResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // TODO
    }
  }
  return data
}
