import { AxiosRequestConfig, AxiosStatic } from "./types";
import Axios from "./core/axios";
import { extend } from "./helpers/util";
import defaults from "./defaults";
import mergeConfig from "./core/mergeConfig";

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

export default axios