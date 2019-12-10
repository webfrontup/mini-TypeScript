import { AxiosRequestConfig, AxiosStatic } from "./types";
import Axios from "./core/axios";
import { extend } from "./helpers/util";
import defaults from "./defaults";
import mergeConfig from "./core/mergeConfig";
import CancelToken from "./cancel/CancelToken";
import Cancel, { isCancel } from "./cancel/cancel";

function createInstance(config: AxiosRequestConfig): AxiosStatic {
    const context = new Axios(config)
    // 将调用方法的对象绑定到 当前axios的实例上 方便调用
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function create(config){
    return createInstance(mergeConfig(defaults, config!))
}
axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel
axios.all = function all(promises){
    return Promise.all(promises)
}
axios.spread = function spread(callback){
    return function wrap(arr){
        return callback.apply(null, arr)
    }
}
axios.Axios = Axios


export default axios